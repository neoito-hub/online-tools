_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[19],{"2aGO":function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=a("q1tI"),c=a.n(o),s=a("TSYQ"),i=a.n(s),l=a("QJSi"),u=c.a.createElement;t.a=function(e){var t=e.title,a=e.subtitle,o=e.className,c=r(e,["title","subtitle","className"]),s=i()(o,"text-center","text-md-left","mb-sm-0");return u(l.e,n({xs:"12",sm:"4",className:s},c),u("span",{className:"text-uppercase page-subtitle"},a),u("h3",{className:"page-title"},t))}},I5HJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/string-to-hex",function(){return a("i6LJ")}])},i6LJ:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),r=a("vuIU"),o=a("JX7q"),c=a("Ji7U"),s=a("md7G"),i=a("foSv"),l=a("rePB"),u=a("ofb8"),p=a("q1tI"),h=a.n(p),d=a("QJSi"),f=a("2aGO");function m(e,t){var a="";return e.split("").forEach((function(e,n){var r="000"+e.charCodeAt(0).toString(16);a=a+t+r.slice(-4)})),a}var b=h.a.createElement;function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(i.a)(e);if(t){var r=Object(i.a)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return Object(s.a)(this,a)}}var x=function(e){Object(c.a)(a,e);var t=g(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return e=t.call.apply(t,[this].concat(c)),Object(l.a)(Object(o.a)(e),"state",{text:"",hexValue:"",option:"1",separator:""}),Object(l.a)(Object(o.a)(e),"getCurrentSeparator",(function(t){var a=e.state,n=a.option,r=a.separator;switch(t||n){case"1":return"0x";case"2":return"%u";case"3":return"";case"4":return r}})),Object(l.a)(Object(o.a)(e),"handleTextInputChange",(function(t){e.setState({text:t.target.value,hexValue:m(t.target.value,e.getCurrentSeparator())})})),Object(l.a)(Object(o.a)(e),"handleSeparatorChange",(function(t){var a=e.state.text;e.setState({separator:t.target.value,hexValue:m(a,t.target.value)})})),Object(l.a)(Object(o.a)(e),"handleOptionChange",(function(t){e.setState({option:t,text:e.state.text,hexValue:m(e.state.text,e.getCurrentSeparator(t))})})),e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.text,n=t.hexValue,r=t.option,o=t.separator;return b(u.a,null,b(d.f,{fluid:!0,className:"main-content-container px-4"},b(d.v,{noGutters:!0,className:"page-header py-4"},b(f.a,{title:"String To Hex Convertor",subtitle:"Character to Unicode Binary ",md:"12",className:"ml-sm-auto mr-sm-auto"})),b(d.v,null,b(d.e,{lg:"12"},b(d.a,{small:!0,className:"mb-4"},b(d.p,{flush:!0},b(d.q,{className:"p-3"},b(d.v,null,b(d.e,null,b(d.h,null,b(d.v,{form:!0},b(d.e,{md:"6",className:"form-group"},b("label",{htmlFor:"feDescription"},"Text"),b(d.l,{id:"feDescription",placeholder:"Your text here... !\u2513 \u20a2\ufffdkkk?",rows:"5",onChange:this.handleTextInputChange,value:a})),b(d.e,{md:"6",className:"form-group"},b("label",{htmlFor:"feDescription"},"Hex"),b(d.l,{id:"feDescription",placeholder:"0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f ",rows:"5",value:n,onChange:function(){}}))),b(d.v,null,b(d.e,{className:"mb-3 block-options",md:"6"},b("h5",null,"Separator"),b(d.k,{name:"option",checked:"1"===r,onChange:function(){return e.handleOptionChange("1")}},"0X"),b(d.k,{name:"option",checked:"2"===r,onChange:function(){return e.handleOptionChange("2")}},"%u"),b(d.k,{name:"option",checked:"3"===r,onChange:function(){return e.handleOptionChange("3")}},"none"),b(d.k,{name:"option",checked:"4"===r,onChange:function(){return e.handleOptionChange("4")}},"custom")),b(d.e,{md:"6"},"4"===r?b("div",null,b("label",{htmlFor:"customSeparator"},"Custom Separator"),b(d.j,{id:"customSeparator",placeholder:"separator(eg:%u)",value:o,onChange:this.handleSeparatorChange})):""),b(d.e,{className:"mb-3"})))))),b(d.q,{className:"p-4"},b("strong",{className:"text-muted d-block mb-2"},"How it Works"),b("pre",{className:"code-part"},b("code",{className:"javascript p-3"},'\n/**\n *\n * @param {*} d\n * @param {*} separator\n */\nexport function convertStringToHEX(d, separator) {\n  let f = "";\n  d.split("").forEach((s, i) => {\n    // type "1"\n    // converts !\u2513 \u20a2\ufffdkkk? and returns 0x00210x25130x00200x20a20xfffd0x006b0x006b0x006b0x003f\n\n    let hexCode = "000" + s.charCodeAt(0).toString(16);\n\n    f = f + separator + hexCode.slice(-4);\n  });\n  return f;\n}\n'))),b(d.q,{className:"p-4"},b("strong",{className:"text-muted d-block mb-2"},"About Unicode"),b("p",null,"Unicode serves as a standard for computers to display character data from any language. There are many variations of the Unicode standard, including UTF-7, UTF-8, UTF-16, UCS-2, as well as Big Endian / Little Endian byte order variations."),b("p",null,"Traditionally, the ASCII standard used 1 byte to store 1 character, resulting in 256 combinations. Unlike the ASCII standard, Unicode character data utilizes multiple bytes per character. This increases the number of possible characters, and this may vary depending on what variation of the Unicode standard is in use."),b("p",null,"Unicode now replaces ASCII, ISO 8859 and EUC at all levels. It enables users to handle not only practically any script and language used on this planet, it also supports a comprehensive set of mathematical and technical symbols to simplify scientific information exchange.",b("a",{href:"https://www.cl.cam.ac.uk/~mgk25/unicode.html"},"UTF-8 and Unicode FAQ for Unix/Linux")))))))))}}]),a}(h.a.Component);x.getInitialProps=function(){return{}};t.default=x}},[["I5HJ",0,1,3,4,2,5,6]]]);