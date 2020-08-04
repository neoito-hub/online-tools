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
  CardBody,
  CardHeader,
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import {
  passwordCheck,
  checkPassStrength,
  passwordCheckcode,
} from "../utils/PasswordChecker";

class StringToHexConvertor extends React.Component {
  state = {
    password: "",
    score: "",
    strength: "",
  };

  password = (e) => {
    this.setState({
      password: e.target.value,
      score: passwordCheck(e.target.value),
      strength: checkPassStrength(e.target.value),
    });
  };
  render() {
    return (
      <Layout>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              title="Password checker"
              subtitle="Find outhow strong your password is really  "
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
                                <label htmlFor="password">
                                  Type the password here
                                </label>
                                <FormInput
                                  id="password"
                                  onChange={this.password}
                                  placeholder="password"
                                  className="mb-2"
                                />
                              </Col>
                            </Col>
                            {this.state.password.length > 0 ? (
                              <Col md="6" className="form-group">
                                <Card small className="mb-4">
                                  <CardHeader>
                                    <b>Your password strength is</b>
                                  </CardHeader>
                                  <CardBody className="pb-3">
                                    {this.state.strength} {this.state.score}
                                  </CardBody>
                                </Card>
                              </Col>
                            ) : null}
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
                      <code className="javascript p-3">
                        {passwordCheckcode}
                      </code>
                    </pre>
                  </ListGroupItem>
                  <ListGroupItem className="p-4">
                    <strong className="text-muted d-block mb-2">
                      About the Paswword checker
                    </strong>
                    <p>
                      Today password strength is extremely important to keep
                      your data secure. As web developers/designers we need a
                      way to show our users the strength of their password. Here
                      we provide a easiest way to check how strong your password
                      really is. It comes with 3 tier such as strong , good and
                      weak. Make sure your password is in the strong category.
                      happy coding
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
