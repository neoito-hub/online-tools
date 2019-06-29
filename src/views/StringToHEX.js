import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  FormRadio,
  ListGroup,
  ListGroupItem,
  Form,
  FormTextarea
} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import { convertStringToHEX, convertohexCode } from "../utils/stringToHex";
import "./StringToHex.css";
class StringToHexConvertor extends React.Component {
  state = {
    text: "",
    hexValue: "",
    option: "1"
  };

  handleTextInputChange = e => {
    this.setState({
      text: e.target.value,
      hexValue: convertStringToHEX(e.target.value, this.state.option)
    });
  };
  handleOptionChange = o => {
    this.setState({
      option: o,
      text: this.state.text,
      hexValue: convertStringToHEX(this.state.text, o)
    });
  };
  render() {
    const { text, hexValue, option } = this.state;
    return (
      <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="String To Hex Convertor"
            subtitle="Overview"
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
                          {/* Description */}
                          <Col md="6" className="form-group">
                            <label htmlFor="feDescription">Text</label>
                            <FormTextarea
                              id="feDescription"
                              placeholder="Your text here... !┓ ₢�kkk?"
                              rows="5"
                              onChange={this.handleTextInputChange}
                              value={text}
                            />
                          </Col>
                          <Col md="6" className="form-group">
                            <label htmlFor="feDescription">Hex</label>
                            <FormTextarea
                              id="feDescription"
                              placeholder="0x0021 0x2513 0x0020 0x20a2 0xfffd 0x006b 0x006b 0x006b 0x003f "
                              rows="5"
                              value={hexValue}
                              onChange={() => {}}
                            />
                          </Col>
                        </Row>
                        <Row>
                          <Col className="mb-3 block-options" md="6">
                            <FormRadio
                              name="option"
                              checked={option === "1"}
                              onChange={() => this.handleOptionChange("1")}
                            >
                              0X padded
                            </FormRadio>
                            <FormRadio
                              name="option"
                              checked={option === "2"}
                              onChange={() => this.handleOptionChange("2")}
                            >
                              Default
                            </FormRadio>
                          </Col>
                          <Col className="mb-3" />
                        </Row>
                      </Form>
                    </Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="p-4">
                  <strong className="text-muted d-block mb-2">
                    How it Works
                  </strong>
                  <pre>
                    <code className="javascript">{convertohexCode}</code>
                  </pre>
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default StringToHexConvertor;
