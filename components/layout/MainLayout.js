import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import javascript from "highlight.js/lib/languages/javascript";
import hljs from "highlight.js/lib/highlight"; // import hljs library
import "highlight.js/styles/atom-one-dark.css";
hljs.registerLanguage("javascript", javascript);

import "bootstrap/dist/css/bootstrap.min.css";
import "../../static/css/shards-dashboards.1.1.0.min.css";
import "../../static/css/main.css";

import MainNavbar from "./MainNavbar/MainNavbar";
import MainSidebar from "./MainSidebar/MainSidebar";
import MainFooter from "./MainFooter";

class DefaultLayout extends React.Component {
  componentDidMount() {
    this.updateCodeSyntaxHighlighting();
  }

  componentDidUpdate() {
    this.updateCodeSyntaxHighlighting();
  }

  updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("pre code").forEach(block => {
      hljs.highlightBlock(block);
    });
  };
  render() {
    return (
      <Container fluid>
        <Row>
          <MainSidebar />
          <Col
            className="main-content p-0"
            lg={{ size: 10, offset: 2 }}
            md={{ size: 9, offset: 3 }}
            sm="12"
            tag="main"
          >
            {!this.props.noNavbar && <MainNavbar />}
            {this.props.children}
            {!this.props.noFooter && <MainFooter />}
          </Col>
        </Row>
      </Container>
    );
  }
}

DefaultLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

DefaultLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default DefaultLayout;
