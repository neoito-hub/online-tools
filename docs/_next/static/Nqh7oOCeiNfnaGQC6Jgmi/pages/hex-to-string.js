(window.webpackJsonp=window.webpackJsonp||[]).push([["772c"],{"2aGO":function(e,t,a){"use strict";var n=a("UXZV"),r=a.n(n);function o(){return(o=r.a||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=a("4mXO"),c=a.n(l),s=a("pLtp"),i=a.n(s);function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=i()(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(c.a){var o=c()(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=a("q1tI"),m=a.n(p),d=a("TSYQ"),f=a.n(d),h=a("QJSi");t.a=function(e){var t=e.title,a=e.subtitle,n=e.className,r=u(e,["title","subtitle","className"]),l=f()(n,"text-center","text-md-left","mb-sm-0");return m.a.createElement(h.e,o({xs:"12",sm:"4",className:l},r),m.a.createElement("span",{className:"text-uppercase page-subtitle"},a),m.a.createElement("h3",{className:"page-title"},t))}},"5pKv":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(e,t,a){e.exports=a("uekQ")},"9pa2":function(e,t,a){"use strict";a.r(t);var n=a("0iUn"),r=a("sLSF"),o=a("MI3g"),l=a("a7VT"),c=a("AT/M"),s=a("Tit0"),i=a("vYYK"),u=a("q1tI"),p=a.n(u),m=a("QJSi"),d=a("2aGO"),f=a("6BQ9"),h=a.n(f);function g(e,t){var a,n;n=t?e.split(t):e.match(/.{1,4}/g)||[];var r="";for(a=0;a<n.length;a++)r+=String.fromCharCode(h()(n[a],16));return r}var E=a("ofb8"),x=function(e){function t(){var e,a;Object(n.default)(this,t);for(var r=arguments.length,s=new Array(r),u=0;u<r;u++)s[u]=arguments[u];return a=Object(o.default)(this,(e=Object(l.default)(t)).call.apply(e,[this].concat(s))),Object(i.a)(Object(c.default)(a),"state",{input:"",output:"",option:"1",separator:""}),Object(i.a)(Object(c.default)(a),"getCurrentSeparator",function(e){var t=a.state,n=t.option,r=t.separator;switch(e||n){case"1":return"0x";case"2":return"%u";case"3":return"";case"4":return r}}),Object(i.a)(Object(c.default)(a),"handleTextInputChange",function(e){a.setState({input:e.target.value,output:g(e.target.value,a.getCurrentSeparator())})}),Object(i.a)(Object(c.default)(a),"handleSeparatorChange",function(e){var t=a.state.input;a.setState({separator:e.target.value,output:g(t,e.target.value)})}),Object(i.a)(Object(c.default)(a),"handleOptionChange",function(e){a.setState({option:e,input:a.state.input,output:g(a.state.input,a.getCurrentSeparator(e))})}),a}return Object(s.default)(t,e),Object(r.default)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.input,n=t.output,r=t.option,o=t.separator;return p.a.createElement(E.a,null,p.a.createElement(m.f,{fluid:!0,className:"main-content-container px-4"},p.a.createElement(m.t,{noGutters:!0,className:"page-header py-4"},p.a.createElement(d.a,{title:"Hex To String Convertor",subtitle:"Unicode Binary to Character",md:"12",className:"ml-sm-auto mr-sm-auto"})),p.a.createElement(m.t,null,p.a.createElement(m.e,{lg:"12"},p.a.createElement(m.a,{small:!0,className:"mb-4"},p.a.createElement(m.n,{flush:!0},p.a.createElement(m.o,{className:"p-3"},p.a.createElement(m.t,null,p.a.createElement(m.e,null,p.a.createElement(m.g,null,p.a.createElement(m.t,{form:!0},p.a.createElement(m.e,{md:"6",className:"form-group"},p.a.createElement("label",{htmlFor:"feDescription"},"Hex"),p.a.createElement(m.j,{id:"feDescription",placeholder:"0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f ",rows:"5",onChange:this.handleTextInputChange,value:a})),p.a.createElement(m.e,{md:"6",className:"form-group"},p.a.createElement("label",{htmlFor:"feDescription"},"String"),p.a.createElement(m.j,{id:"feDescription",placeholder:"Your text here... !┓ ₢�kkk?",rows:"5",value:n,onChange:function(){}}))),p.a.createElement(m.t,null,p.a.createElement(m.e,{className:"mb-3 block-options",md:"6"},p.a.createElement("h5",null,"Separator"),p.a.createElement(m.i,{name:"option",checked:"1"===r,onChange:function(){return e.handleOptionChange("1")}},"0X"),p.a.createElement(m.i,{name:"option",checked:"2"===r,onChange:function(){return e.handleOptionChange("2")}},"%u"),p.a.createElement(m.i,{name:"option",checked:"3"===r,onChange:function(){return e.handleOptionChange("3")}},"none"),p.a.createElement(m.i,{name:"option",checked:"4"===r,onChange:function(){return e.handleOptionChange("4")}},"custom")),p.a.createElement(m.e,{md:"6"},"4"===r?p.a.createElement("div",null,p.a.createElement("label",{htmlFor:"customSeparator"},"Custom Separator"),p.a.createElement(m.h,{id:"customSeparator",placeholder:"separator(eg:%u)",value:o,onChange:this.handleSeparatorChange})):""),p.a.createElement(m.e,{className:"mb-3"})))))),p.a.createElement(m.o,{className:"p-4"},p.a.createElement("strong",{className:"text-muted d-block mb-2"},"How it Works"),p.a.createElement("pre",{className:"code-part"},p.a.createElement("code",{className:"javascript p-3"},'\n/**\n *\n * @param {*} string\n * @param {*} separator\n */\nexport function convertHexToString(str, separator) {\n  // converts  0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f  and returns !┓ ₢�kkk?\n  let j;\n  let hexes;\n  if (separator) {\n    hexes = str.split(separator);\n  } else {\n    hexes = str.match(/.{1,4}/g) || [];\n  }\n  let parsedOutput = "";\n  for (j = 0; j < hexes.length; j++) {\n    parsedOutput += String.fromCharCode(parseInt(hexes[j], 16));\n  }\n\n  return parsedOutput;\n}\n'))),p.a.createElement(m.o,{className:"p-4"},p.a.createElement("strong",{className:"text-muted d-block mb-2"},"About Unicode"),p.a.createElement("p",null,"Unicode serves as a standard for computers to display character data from any language. There are many variations of the Unicode standard, including UTF-7, UTF-8, UTF-16, UCS-2, as well as Big Endian / Little Endian byte order variations."),p.a.createElement("p",null,"Traditionally, the ASCII standard used 1 byte to store 1 character, resulting in 256 combinations. Unlike the ASCII standard, Unicode character data utilizes multiple bytes per character. This increases the number of possible characters, and this may vary depending on what variation of the Unicode standard is in use."),p.a.createElement("p",null,"Unicode now replaces ASCII, ISO 8859 and EUC at all levels. It enables users to handle not only practically any script and language used on this planet, it also supports a comprehensive set of mathematical and technical symbols to simplify scientific information exchange.",p.a.createElement("a",{href:"https://www.cl.cam.ac.uk/~mgk25/unicode.html"},"UTF-8 and Unicode FAQ for Unix/Linux")))))))))}}]),t}(p.a.Component);t.default=x},T5VS:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hex-to-string",function(){var e=a("9pa2");return{page:e.default||e}}])},XWtR:function(e,t,a){var n=a("5T2Y").parseInt,r=a("oc46").trim,o=a("5pKv"),l=/^[-+]?0[xX]/;e.exports=8!==n(o+"08")||22!==n(o+"0x16")?function(e,t){var a=r(String(e),3);return n(a,t>>>0||(l.test(a)?16:10))}:n},dEVD:function(e,t,a){var n=a("Y7ZC"),r=a("XWtR");n(n.G+n.F*(parseInt!=r),{parseInt:r})},oc46:function(e,t,a){var n=a("Y7ZC"),r=a("Jes0"),o=a("KUxP"),l=a("5pKv"),c="["+l+"]",s=RegExp("^"+c+c+"*"),i=RegExp(c+c+"*$"),u=function(e,t,a){var r={},c=o(function(){return!!l[e]()||"​"!="​"[e]()}),s=r[e]=c?t(p):l[e];a&&(r[a]=s),n(n.P+n.F*c,"String",r)},p=u.trim=function(e,t){return e=String(r(e)),1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(i,"")),e};e.exports=u},uekQ:function(e,t,a){a("dEVD"),e.exports=a("WEpk").parseInt}},[["T5VS","5d41","9da1","ad9d"]]]);