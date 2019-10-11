import Layout from "../components/layout/MainLayout";
import React from "react";
import { Container, Col, Card } from "shards-react";
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
  running: false
};
class IntervalTimer extends React.Component {
  componentDidMount() {
    this.startBreak = new Audio("../static/sounds/start-break.wav");
    this.endBreak = new Audio("../static/sounds/end-break.wav");
  }

  state = init;
  timer;
  handleStartTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.timer = setInterval(() => {
      const { target, timeElapsed, workMode, breakTime } = this.state;
      const currenttype = workMode ? target : breakTime;
      const minutes = ~~((currenttype - timeElapsed) / 60);
      const seconds = (currenttype - timeElapsed) % 60;
      const finalTime =
        str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
      if (!minutes && !seconds) {
        this.setState({
          timeElapsed: 0,
          display: finalTime,
          workMode: !workMode
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
          running: true
        });
      }
    }, 1000);
  };
  handleStopTimer = () => {
    if (this.timer) {
      clearInterval(this.timer);
    }
    this.setState(init);
  };
  handleResumeTime = v => {
    this.setState({ breakTime: v.target.value * 60 });
  };
  handleTargetTime = v => {
    this.setState({ target: v.target.value * 60 });
  };
  render() {
    const { display, running, target, breakTime } = this.state;

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
            <p>
              I want to take a break after{" "}
              <input
                type="number"
                defaultValue={target / 60}
                onChange={this.handleTargetTime}
              ></input>{" "}
              minutes for
              <input
                type="number"
                defaultValue={breakTime / 60}
                onChange={this.handleResumeTime}
              ></input>{" "}
              minutes
            </p>
            {running ? (
              <button onClick={this.handleStopTimer} className="-button">
                <i className="material-icons">stop</i>
                Stop
              </button>
            ) : (
              <button onClick={this.handleStartTimer} className="play-button">
                <i className="material-icons">play_arrow</i>
                Start
              </button>
            )}
          </div>
        </Container>
      </Layout>
    );
  }
}

export default IntervalTimer;

// <Row noGutters className="page-header py-4">
//   <PageTitle
//     title="String To Hex Convertor"
//     subtitle="Character to Unicode Binary "
//     md="12"
//     className="ml-sm-auto mr-sm-auto"
//   />
// </Row>
// <Row>
