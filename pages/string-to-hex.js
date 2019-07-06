import Layout from "../components/layout/MainLayout";
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
  FormTextarea,
  FormInput
} from "shards-react";
import PageTitle from "../components/common/PageTitle";
import { convertStringToHEX, convertohexCode } from "../utils/stringToHex";

class StringToHexConvertor extends React.Component {
  state = {
    text: "",
    hexValue: "",
    option: "1",
    separator: ""
  };

  getCurrentSeparator = o => {
    const { option, separator } = this.state;
    switch (o || option) {
      case "1":
        return "0x";
      case "2":
        return "%u";
      case "3":
        return "";
      case "4":
        return separator;

      default:
        break;
    }
  };
  handleTextInputChange = e => {
    this.setState({
      text: e.target.value,
      hexValue: convertStringToHEX(e.target.value, this.getCurrentSeparator())
    });
  };
  handleSeparatorChange = e => {
    const { text } = this.state;

    this.setState({
      separator: e.target.value,
      hexValue: convertStringToHEX(text, e.target.value)
    });
  };
  handleOptionChange = o => {
    this.setState({
      option: o,
      text: this.state.text,
      hexValue: convertStringToHEX(this.state.text, this.getCurrentSeparator(o))
    });
  };
  render() {
    const { text, hexValue, option, separator } = this.state;
    return (
      <Layout>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              title="String To Hex Convertor"
              subtitle="Character to Unicode Binary "
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
                                placeholder="0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f "
                                rows="5"
                                value={hexValue}
                                onChange={() => {}}
                              />
                            </Col>
                          </Row>
                          <Row>
                            <Col className="mb-3 block-options" md="6">
                              <h5>Separator</h5>
                              <FormRadio
                                name="option"
                                checked={option === "1"}
                                onChange={() => this.handleOptionChange("1")}
                              >
                                0X
                              </FormRadio>
                              <FormRadio
                                name="option"
                                checked={option === "2"}
                                onChange={() => this.handleOptionChange("2")}
                              >
                                %u
                              </FormRadio>
                              <FormRadio
                                name="option"
                                checked={option === "3"}
                                onChange={() => this.handleOptionChange("3")}
                              >
                                none
                              </FormRadio>
                              <FormRadio
                                name="option"
                                checked={option === "4"}
                                onChange={() => this.handleOptionChange("4")}
                              >
                                custom
                              </FormRadio>
                            </Col>
                            <Col md="6">
                              {option === "4" ? (
                                <div>
                                  <label htmlFor="customSeparator">
                                    Custom Separator
                                  </label>

                                  <FormInput
                                    id="customSeparator"
                                    placeholder="separator(eg:%u)"
                                    value={separator}
                                    onChange={this.handleSeparatorChange}
                                  />
                                </div>
                              ) : (
                                ""
                              )}
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
                    <pre className="code-part">
                      <code className="javascript p-3">{convertohexCode}</code>
                      {/* <button
                      theme="white"
                      className="copy-button"
                      data-clipboard-text={convertohexCode}
                    >
                      <i className="material-icons">file_copy</i>
                   </button>*/}
                    </pre>
                  </ListGroupItem>
                  <ListGroupItem className="p-4">
                    <strong className="text-muted d-block mb-2">
                      About Unicode
                    </strong>
                    <p>
                      Unicode serves as a standard for computers to display
                      character data from any language. There are many
                      variations of the Unicode standard, including UTF-7,
                      UTF-8, UTF-16, UCS-2, as well as Big Endian / Little
                      Endian byte order variations.
                    </p>
                    <p>
                      Traditionally, the ASCII standard used 1 byte to store 1
                      character, resulting in 256 combinations. Unlike the ASCII
                      standard, Unicode character data utilizes multiple bytes
                      per character. This increases the number of possible
                      characters, and this may vary depending on what variation
                      of the Unicode standard is in use.
                    </p>
                    <p>
                      Unicode now replaces ASCII, ISO 8859 and EUC at all
                      levels. It enables users to handle not only practically
                      any script and language used on this planet, it also
                      supports a comprehensive set of mathematical and technical
                      symbols to simplify scientific information exchange.
                      <a href="https://www.cl.cam.ac.uk/~mgk25/unicode.html">
                        UTF-8 and Unicode FAQ for Unix/Linux
                      </a>
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

export default StringToHexConvertor;
