const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  /* config options here */
  exportPathMap: function () {
    return {
      "/": { page: "/string-to-hex" },
      "/hex-to-string": {
        page: "/hex-to-string",
        query: { title: "Hex to String" },
      },
      "/polygon-vertex": {
        page: "/polygon-vertex",
        query: { title: "Polygon vertex calculator" },
      },
      "/string-to-hex": {
        page: "/string-to-hex",
        query: { title: "String to hex" },
      },
      "/string-to-morse": {
        page: "/string-to-morse",
        query: { title: "String to Morse encoder" },
      },
      "/interval-timer": {
        page: "/interval-timer",
        query: { title: "A Timer to take a break" },
      },
      "/deep-clean-object": {
        page: "/deep-clean-object",
        query: { title: "Deep Clean Object" },
      },
    };
  },
});
