import React from "react";
import PropTypes from "prop-types";
import { NavItem } from "shards-react";
import Link from "next/link";
import { withRouter } from "next/router";

const SidebarNavItem = ({ router, item }) => (
  <NavItem>
    <Link href={item.to}>
      <a
        className={router.pathname === item.to ? "nav-link active" : "nav-link"}
      >
        {item.htmlBefore && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
          />
        )}
        {item.title && <span>{item.title} </span>}
        {item.htmlAfter && (
          <div
            className="d-inline-block item-icon-wrapper"
            dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
          />
        )}
      </a>
    </Link>
  </NavItem>
);

SidebarNavItem.propTypes = {
  /**
   * The item object.
   */
  item: PropTypes.object
};

export default withRouter(SidebarNavItem);
