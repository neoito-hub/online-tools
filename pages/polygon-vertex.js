import Layout from "../components/layout/MainLayout";
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Form,
  FormInput,
  Button,
  CardHeader,
  CardBody,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { polygon, polygoncode } from "../utils/PolygonVertex";

class StringToHexConvertor extends React.Component {
  state = {
    centerx: 0,
    centery: 0,
    number: 4,
    radius: 50,
    angle: "",
    vertex: [],
    visibile: "none",
  };

  handleTextInputChangex = (e) => {
    this.setState({
      centerx: e.target.value,
      vertex: polygon({
        r: this.state.radius,
        a: this.state.angle,
        cx: e.target.value,
        cy: this.state.centery,
        round: this.state.round,
        n: this.state.number,
      }),
    });
  };
  handleTextInputChangey = (e) => {
    this.setState({
      centery: e.target.value,
      vertex: polygon({
        r: this.state.radius,
        a: this.state.angle,
        cy: e.target.value,
        cx: this.state.centerx,
        round: this.state.round,
        n: this.state.number,
      }),
    });
  };
  handleTextInputChangeside = (e) => {
    this.setState({
      number: e.target.value,
    });
    if (e.target.value > 2) {
      this.setState({
        vertex: polygon({
          n: e.target.value,
          r: this.state.radius,
          a: this.state.angle,
          cx: this.state.centerx,
          cy: this.state.centery,
          round: this.state.round,
        }),
      });
    } else if (e.target.value && e.target.value >= 0) {
      alert("Number of sides must be a number greater than 2");
    }
  };
  clear = (e) => {
    this.setState({
      vertex: [],
    });
  };
  handleTextInputChangeradius = (e) => {
    this.setState({
      radius: e.target.value,
    });
    if (e.target.value > 0) {
      this.setState({
        vertex: polygon({
          n: this.state.number,
          r: e.target.value,
          a: this.state.angle,
          cx: this.state.centerx,
          cy: this.state.centery,
          round: this.state.round,
        }),
      });
    } else {
      alert("Radius  must be greater than zero");
    }
  };

  handleTextInputChangestartangle = (e) => {
    this.setState({
      angle: e.target.value,
      vertex: polygon({
        n: this.state.number,
        r: this.state.radius,
        a: e.target.value,
        cx: this.state.centerx,
        cy: this.state.centery,
        round: this.state.round,
      }),
    });
  };

  render() {
    return (
      <Layout>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              title="Polygon Vertex Calculator"
              subtitle="Find the polygon vertex's here "
              md="12"
              className="ml-sm-auto mr-sm-auto"
            />
          </Row>
          <Row>
            <Col lg="12">
              <Card small className="mb-4">
                <ListGroup flush>
                  <ListGroupItem className="p-3">
                    <Row>
                      <Col>
                        <Form>
                          <Row form>
                            <Col md="6" className="form-group">
                              <Col md="8" className="form-group">
                                <label htmlFor="x">Center X</label>
                                <FormInput
                                  id="x"
                                  onChange={this.handleTextInputChangex}
                                  placeholder="X-axis"
                                  className="mb-2"
                                />
                              </Col>
                              <Col md="8" className="form-group">
                                <label htmlFor="y">Center Y</label>
                                <FormInput
                                  id="y"
                                  onChange={this.handleTextInputChangey}
                                  placeholder="Y-axis"
                                  className="mb-2"
                                />
                              </Col>
                              <Col md="8" className="form-group">
                                <label htmlFor="vertex">Number of sides</label>
                                <FormInput
                                  id="vertex"
                                  onChange={this.handleTextInputChangeside}
                                  placeholder="Number of side's"
                                  className="mb-2"
                                />
                              </Col>
                              <Col md="8" className="form-group">
                                <label htmlFor="radius">Radius</label>
                                <FormInput
                                  id="radius"
                                  onChange={this.handleTextInputChangeradius}
                                  placeholder="Radius"
                                  className="mb-2"
                                />
                              </Col>
                              <Col md="8" className="form-group">
                                <label htmlFor="angle">
                                  Start angle (degrees)
                                </label>
                                <FormInput
                                  id="angle"
                                  onChange={
                                    this.handleTextInputChangestartangle
                                  }
                                  placeholder="Angle in Degree"
                                  className="mb-2"
                                />
                              </Col>
                            </Col>
                            <Col md="6" className="form-group">
                              <Row>
                                <Col>
                                  <Card small className="mb-4">
                                    {this.state.vertex.length > 0 ? (
                                      <CardBody className="p-0 pb-3">
                                        {/* <h6 className="m-0">
                                          <Button
                                            outline
                                            theme="primary"
                                            className="mb-2 mr-1"
                                          >
                                            Clear
                                          </Button>
                                        </h6> */}
                                        <table className="table mb-0">
                                          <thead className="bg-light">
                                            <tr>
                                              <th
                                                scope="col"
                                                className="border-0"
                                              >
                                                X-axis
                                              </th>
                                              <th
                                                scope="col"
                                                className="border-0"
                                              >
                                                Y-axis
                                              </th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            {this.state.vertex.map((item) => (
                                              <tr>
                                                <td>{item.x}</td>
                                                <td>{item.y}</td>
                                              </tr>
                                            ))}
                                          </tbody>
                                        </table>
                                      </CardBody>
                                    ) : null}
                                  </Card>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Form>
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="p-4">
                    <strong className="text-muted d-block mb-2">
                      How it Works
                    </strong>
                    <pre className="code-part">
                      <code className="javascript p-3">{polygoncode}</code>
                    </pre>
                  </ListGroupItem>
                  <ListGroupItem className="p-4">
                    <strong className="text-muted d-block mb-2">
                      About the calculator
                    </strong>
                    <p>
                      This calculator takes the parameters of a regular polygon
                      and calculates its coordinates. It produces both the
                      coordinates of the vertices and the coordinates of the
                      line segments making up the sides of the polygon. It is
                      useful to blind users and those who produce material for
                      the sight-impaired. The programs that emboss shapes on
                      pages for the blind need the coordinates of the lines that
                      make up the shape. This page was designed to make it easy
                      to produce the data needed by those programs (such as SVG
                      Draw) to 'draw' regular polygons.
                    </p>
                    <p>
                      Click the 'Calculate' button to refresh the results. Note
                      that the y coordinates are positive downwards, to conform
                      to the convention in most computer software. Positive x is
                      to the right. The sides output is a table containing the
                      start and end x,y coordinates of each side of the polygon,
                      going counter clockwise from the first one. Below that is
                      the same data in CSV format. The vertex output is a table
                      containing the x and y coordinates of each vertex of the
                      polygon, going counter clockwise from the first one. Below
                      that is the same data in CSV format.
                    </p>
                    <p>
                      <ul>
                        <li>
                          Center X and center Y are the coordinates of the
                          center point of the polygon. Set initially to 0, 0.
                          Note that the y coordinate is positive downwards, to
                          conform to the convention in most computer software.
                          Positive x is to the right.
                        </li>
                        <li>
                          The number of sides. Must be greater than 2. Set
                          initially to 4.
                        </li>
                        <li>
                          The radius is the distance from the center to a
                          vertex. Set initially to 50.
                        </li>
                        <li>
                          Start angle is the position of the first vertex. This
                          angle is in degrees and is the angle starting at 3
                          o'clock going counter clockwise. So for example if you
                          want the first vertex to be at 12 o'clock, set this to
                          90. Set initially to blank (auto). If you leave this
                          blank it will be set automatically: If the number of
                          sides is odd, (e.g. a pentagon), the first vertex will
                          be at 12 o'clock. If even, e.g. an octagon, the top
                          and bottom sides will be horizontal on the page.
                        </li>
                      </ul>
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </Layout>
    );
  }
}

StringToHexConvertor.getInitialProps = () => {
  return {};
};

export default StringToHexConvertor;
