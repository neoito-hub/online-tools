import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar, NavItem, DropdownItem } from "shards-react";

import NavbarToggle from "./NavbarToggle";
const MainNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  const handleEditClick = () => {
    window.open(
      process.browser
        ? `https://github.com/neoito-hub/online-tools/blob/master/pages/${
            document.URL.split("/")[document.URL.split("/").length - 1]
          }.js`
        : "https://github.com/neoito-hub/online-tools",
      "_blank"
    );
  };

  return (
    <div className={classes}>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="/static/images/favicon.ico"
      />
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <NavbarToggle />
          <NavItem>
            <DropdownItem>
              <span
                className="d-none d-md-inline-block "
                onClick={handleEditClick}
              >
                <i className="material-icons mr-2">&#xE150;</i>Edit in github
              </span>
            </DropdownItem>
          </NavItem>
        </Navbar>
      </Container>
    </div>
  );
};

MainNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool,
};

MainNavbar.defaultProps = {
  stickyTop: true,
};

export default MainNavbar;
