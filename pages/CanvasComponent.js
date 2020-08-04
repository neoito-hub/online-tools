export default class CanvasComponent extends React.Component {
  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas() {
    var poly = new Array();
    this.props.vertex.map((item) => {
      poly.push(item.x);
      poly.push(item.y);
    });
    const ctx = this.refs.canvas.getContext("2d");
    ctx.fillStyle = "#f00";
    ctx.beginPath();
    ctx.moveTo(poly[0], poly[1]);
    ctx.fillText(`(${poly[0]},${poly[1]})`, poly[0], poly[1]);
    var sides = poly.length / 2;
    for (var item = 2; item < poly.length - 1; item += 2) {
      ctx.lineTo(poly[item], poly[item + 1]);
      if (item < sides / 2) {
        ctx.textAlign = "start";
      } else if (item > sides / 2) {
        ctx.textAlign = "end";
      } else {
        ctx.textAlign = "center";
      }
      ctx.fillText(
        `(${poly[item]},${poly[item + 1]})`,
        poly[item],
        poly[item + 1]
      );
    }
    ctx.closePath();
    ctx.font = "30px Verdana";
    var gradient = ctx.createLinearGradient(0, 0, this.refs.canvas.width, 0);
    gradient.addColorStop("0", " magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    ctx.fillStyle = gradient;
    ctx.fill();
  }
  render() {
    return (
      <div>
        <canvas ref="canvas" wdith="500" height="300" />
      </div>
    );
  }
}
