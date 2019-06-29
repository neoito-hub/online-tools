import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import StringToHexConvertor from "./views/StringToHEX";

export default [
  {
    path: `/`,
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/string-to-hex" />
  },
  {
    path: `/string-to-hex`,
    layout: DefaultLayout,
    component: StringToHexConvertor
  }
];
