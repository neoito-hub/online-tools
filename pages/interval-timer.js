import Layout from "../components/layout/MainLayout";
import React from "react";
import { Container } from "shards-react";
import "../static/css/interval-timer.css";

function str_pad_left(string, pad, length) {
  return (new Array(length + 1).join(pad) + string).slice(-length);
}
const init = {
  display: "10:00",
  timeElapsed: 0,
  target: 10 * 60, // mins* seconds
  breakTime: 2 * 60, // mins* seconds
  workMode: true,
  running: false,
};
class IntervalTimer extends React.Component {
  componentDidMount() {
    this.startBreak = new Audio("../static/sounds/start-break.wav");
    this.endBreak = new Audio("../static/sounds/end-break.wav");
  }

  state = init;
  timer;
  triggerUpdateTime(target, breakTime) {
    const { timeElapsed, workMode } = this.state;

    const currenttype = workMode ? target : breakTime;
    const minutes = ~~((currenttype - timeElapsed) / 60);
    const seconds = (currenttype - timeElapsed) % 60;
    const finalTime =
      str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
    if (!minutes && !seconds) {
      this.setState({
        timeElapsed: 0,
        display: finalTime,
        workMode: !workMode,
      });
      if (workMode) {
        // stop tune
        this.startBreak.play();
      } else {
        this.endBreak.play();
      }
    } else {
      this.setState({
        timeElapsed: timeElapsed + 1,
        display: finalTime,
        running: true,
      });
    }
  }
  handleStartTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    const { target, breakTime } = this.state;
    this.triggerUpdateTime(target, breakTime);
    this.timer = setInterval(() => {
      this.triggerUpdateTime(target, breakTime);
    }, 1000);
  };
  handleStopTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    const { target, workMode, breakTime } = this.state;
    const currenttype = workMode ? target : breakTime;
    const minutes = ~~(currenttype / 60);
    const seconds = currenttype % 60;
    const finalTime =
      str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
    this.setState({
      running: false,
      timeElapsed: 0,
      display: finalTime,
      workMode: true,
    });
  };
  handleResumeTime = (v) => {
    this.setState({ breakTime: v.target.value * 60 });
  };
  handleTargetTime = (v) => {
    this.setState({ target: v.target.value * 60 });
  };
  render() {
    const { display, running, target, breakTime, workMode } = this.state;

    return (
      <Layout>
        <Container fluid className="main-content-container px-4 noisy">
          <div className="emblem">
            <span className="icon-information"></span>
          </div>
          <div className="frame">
            <div className="piece output">
              <h1>{display}</h1>
            </div>

            <div className="piece scanlines noclick"></div>
            <div className="piece glow noclick"></div>
          </div>
          <div className="controls">
            <h2>
              {running
                ? workMode
                  ? "I am in work mode"
                  : "It's time for a break"
                : null}
            </h2>
            <p>
              I want to take a break after{" "}
              <input
                type="number"
                defaultValue={target / 60}
                onChange={this.handleTargetTime}
              ></input>
              minutes for
              <input
                type="number"
                defaultValue={breakTime / 60}
                onChange={this.handleResumeTime}
              ></input>{" "}
              minutes
            </p>
            {running ? (
              <b onClick={this.handleStopTimer} className="play-button">
                <i className="material-icons">stop</i>
                <span>Stop</span>
              </b>
            ) : (
              <b onClick={this.handleStartTimer} className="play-button">
                <i className="material-icons">play_arrow</i>
                <span>Start</span>
              </b>
            )}
          </div>
        </Container>
        <p>
          The cyber punk retro UI is inspired from{" "}
          <a
            href="https://codepen.io/somethingformed/pen/raWJXV"
            target="_blank"
          >
            A PEN BY 未知天地 CLOSED
          </a>
        </p>
      </Layout>
    );
  }
}

IntervalTimer.getInitialProps = () => {
  return {};
};

export default IntervalTimer;
