const withCSS = require("@zeit/next-css");
module.exports = withCSS({
  /* config options here */
  exportPathMap: function() {
    return {
      "/": { page: "/string-to-hex" },
      "/hex-to-string": {
        page: "/hex-to-string",
        query: { title: "Hex to String" }
      },
      "/string-to-hex": {
        page: "/string-to-hex",
        query: { title: "String to hex" }
      }
    };
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/online-tools" : ""
});
