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
import {
  StringToMorse as fn,
  StringToMorseCode as code,
  IMC_LIST
} from "../utils/stringToMorse";
import Layout from "../components/layout/MainLayout";
import ListMap from "../components/common/ListMap";

class StringToMorseConvertor extends React.Component {
  IMC = IMC_LIST();
  state = {
    input: "",
    output: ""
  };

  handleTextInputChange = e => {
    this.setState({
      input: e.target.value,
      output: fn(e.target.value)
    });
  };
  render() {
    const { input, output } = this.state;
    return (
      <Layout>
        <Container fluid className="main-content-container px-4">
          <Row noGutters className="page-header py-4">
            <PageTitle
              title="String To Morse Code Convertor"
              subtitle="Morse encoder"
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
                              <label htmlFor="feDescription">String</label>
                              <FormTextarea
                                id="feDescription"
                                placeholder="Save the world! "
                                rows="5"
                                onChange={this.handleTextInputChange}
                                value={input}
                              />
                            </Col>
                            <Col md="6" className="form-group">
                              <label htmlFor="feDescription">Morse Code</label>
                              <FormTextarea
                                id="feDescription"
                                placeholder="Your text here... ?"
                                rows="5"
                                value={output}
                                onChange={() => {}}
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
                      {/* <button
                      theme="white"
                      className="copy-button"
                      data-clipboard-text={convertohexCode}
                    >
                      <i className="material-icons">file_copy</i>
                   </button>*/}
                    </pre>
                  </ListGroupItem>
                  <ListGroupItem>
                    <Row>
                      <Col lg="4">
                        <ListMap
                          title="International Morse code"
                          list={this.IMC.slice(
                            0,
                            Math.ceil(this.IMC.length / 3)
                          )}
                        />
                      </Col>
                      <Col lg="4">
                        <ListMap
                          title="International Morse code"
                          list={this.IMC.slice(
                            Math.ceil(this.IMC.length / 3),
                            Math.ceil((this.IMC.length / 3) * 2)
                          )}
                        />
                      </Col>
                      <Col lg="4">
                        <ListMap
                          title="International Morse code"
                          list={this.IMC.slice(
                            Math.ceil((this.IMC.length / 3) * 2),
                            this.IMC.length
                          )}
                        />
                      </Col>
                    </Row>
                  </ListGroupItem>
                  <ListGroupItem className="p-4">
                    <strong className="text-muted d-block mb-2">
                      About Morse Code
                    </strong>
                    <p>
                      Morse code is a character encoding scheme used in
                      telecommunication that encodes text characters as
                      standardized sequences of two different signal durations
                      called dots and dashes or dits and dahs.[2][3] Morse code
                      is named for Samuel F. B. Morse, an inventor of the
                      telegraph.
                    </p>
                    <p>
                      The International Morse Code encodes the 26 English
                      letters A through Z, some non-English letters, the Arabic
                      numerals and a small set of punctuation and procedural
                      signals (prosigns). There is no distinction between upper
                      and lower case letters. Each Morse code symbol is formed
                      by a sequence of dots and dashes. The dot duration is the
                      basic unit of time measurement in Morse code transmission.
                      The duration of a dash is three times the duration of a
                      dot. Each dot or dash within a character is followed by
                      period of signal absence, called a space, equal to the dot
                      duration. The letters of a word are separated by a space
                      of duration equal to three dots, and the words are
                      separated by a space equal to seven dots. To increase the
                      efficiency of encoding, Morse code was designed so that
                      the length of each symbol is approximately inverse to the
                      frequency of occurrence in text of the English language
                      character that it represents. Thus the most common letter
                      in English, the letter "E", has the shortest code: a
                      single dot. Because the Morse code elements are specified
                      by proportion rather than specific time durations, the
                      code is usually transmitted at the highest rate that the
                      receiver is capable of decoding. The Morse code
                      transmission rate (speed) is specified in groups per
                      minute, commonly referred to as words per minute.
                    </p>
                    <p>
                      Morse code can be memorized, and Morse code signalling in
                      a form perceptible to the human senses, such as sound
                      waves or visible light, can be directly interpreted by
                      persons trained in the skill.
                      <br />
                      <a href="https://en.wikipedia.org/wiki/Morse_code">
                        Morse code Wiki
                      </a>
                      <br />
                      <a href="https://morsecode.scphillips.com/">More info</a>
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

export default StringToMorseConvertor;
