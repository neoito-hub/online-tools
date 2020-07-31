import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  Form,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import Layout from "../components/layout/MainLayout";
import JSONInput from "react-json-editor-ajrm";
import locale from "react-json-editor-ajrm/locale/en";
import {
  deepCleanObject,
  deepCleanObjectCode as code,
} from "../utils/deepCleanObject";

class DeepCleanObject extends Component {
  state = {
    input: { sample: "Delete this and enter your object here" },
    output: null,
  };

  componentDidMount() {
    this.setState(({ input }) => ({
      output: deepCleanObject(input),
    }));
  }

  handleInputChange = ({ error, jsObject }) => {
    !error &&
      this.setState((prevState) => ({
        output: jsObject ? deepCleanObject(jsObject) : prevState.output,
      }));
  };

  render() {
    const { input, output } = this.state;

    return (
      <Layout>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              title="Deep Clean Object"
              subtitle="Deep clean an object"
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
                          <Row form style={{ marginLeft: 0 }}>
                            {/* Description */}
                            <Col md="6" className="form-group">
                              <label htmlFor="feDescription">Input</label>
                              <JSONInput
                                id="a_unique_id"
                                placeholder={input}
                                onChange={this.handleInputChange}
                                locale={locale}
                                height="300px"
                              />
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="feDescription">Output</label>
                              <JSONInput
                                id="a_unique_id"
                                placeholder={output}
                                viewOnly
                                locale={locale}
                                height="300px"
                              />
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
                      <code className="javascript p-3">{code}</code>
                    </pre>
                  </ListGroupItem>
                  <ListGroupItem className="p-4">
                    <strong className="text-muted d-block mb-2">
                      About Deep Clean Object
                    </strong>
                    <p>
                      Ever had a situation where you had to clear only the values of an object while
                      keeping all the keys of the object?
                    </p>
                    <p>
                      Deep clean object can do just that. No matter how deep the object is!
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

DeepCleanObject.getInitialProps = () => {
  return {};
};

export default DeepCleanObject;
