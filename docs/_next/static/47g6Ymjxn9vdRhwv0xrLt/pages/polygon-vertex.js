(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"2aGO":function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function r(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=a("q1tI"),s=a.n(o),l=a("TSYQ"),i=a.n(l),c=a("QJSi"),u=s.a.createElement;t.a=function(e){var t=e.title,a=e.subtitle,o=e.className,s=r(e,["title","subtitle","className"]),l=i()(o,"text-center","text-md-left","mb-sm-0");return u(c.e,n({xs:"12",sm:"4",className:l},s),u("span",{className:"text-uppercase page-subtitle"},a),u("h3",{className:"page-title"},t))}},b5Ne:function(e,t,a){"use strict";a.r(t);var n=a("1OyB"),r=a("vuIU"),o=a("JX7q"),s=a("md7G"),l=a("foSv"),i=a("Ji7U"),c=a("rePB"),u=a("ofb8"),h=a("q1tI"),d=a.n(h),f=a("eV2b"),p=a("QJSi"),m=a("2aGO");function g(e){var t,a,n,r,o=parseInt(e.cx),s=parseInt(e.cy),l=e.n,i=e.r;l=Math.round(l);var c=2*Math.PI/l;t=Math.PI*e.a/180,0==e.a.length&&(t=function(e){return e%2==1}(l)?Math.PI/2:Math.PI/2-c/2);for(var u=new Array,h=0;h<l;h++)a=t+h*c,n=Math.round(o+i*Math.cos(a)),r=Math.round(s-i*Math.sin(a)),u.push({x:n,y:r});return u}var v=d.a.createElement;function b(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var y=function(e){Object(i.a)(h,e);var t,a=(t=h,function(){var e,a=Object(l.a)(t);if(b()){var n=Object(l.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(s.a)(this,e)});function h(){var e;Object(n.a)(this,h);for(var t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return e=a.call.apply(a,[this].concat(r)),Object(c.a)(Object(o.a)(e),"state",{centerx:100,centery:100,number:5,radius:70,angle:0,vertex:[],validity:!0,key:0}),Object(c.a)(Object(o.a)(e),"handleTextInputChangex",(function(t){e.setState({centerx:t.target.value,vertex:g({r:e.state.radius,a:e.state.angle,cx:t.target.value,cy:e.state.centery,round:e.state.round,n:e.state.number})})})),Object(c.a)(Object(o.a)(e),"handleTextInputChangey",(function(t){e.setState({centery:t.target.value,vertex:g({r:e.state.radius,a:e.state.angle,cy:t.target.value,cx:e.state.centerx,round:e.state.round,n:e.state.number})})})),Object(c.a)(Object(o.a)(e),"handleTextInputChangeside",(function(t){e.setState({number:t.target.value}),t.target.value>2?e.setState({vertex:g({n:t.target.value,r:e.state.radius,a:e.state.angle,cx:e.state.centerx,cy:e.state.centery,round:e.state.round})}):t.target.value&&t.target.value})),Object(c.a)(Object(o.a)(e),"clear",(function(t){e.setState({vertex:[]})})),Object(c.a)(Object(o.a)(e),"handleTextInputChangeradius",(function(t){var a=t.target.value;a>0&&e.setState({radius:a,vertex:g({n:e.state.number,r:a,a:e.state.angle,cx:e.state.centerx,cy:e.state.centery,round:e.state.round})})})),Object(c.a)(Object(o.a)(e),"handleTextInputChangestartangle",(function(t){e.setState({angle:t.target.value,vertex:g({n:e.state.number,r:e.state.radius,a:t.target.value,cx:e.state.centerx,cy:e.state.centery,round:e.state.round})})})),Object(c.a)(Object(o.a)(e),"handleCleanCanva",(function(){return e.canva.cleanCanvas()})),e}return Object(r.a)(h,[{key:"componentDidMount",value:function(){this.setState({vertex:g({cx:100,cy:100,n:5,r:70,a:0})})}},{key:"render",value:function(){var e=this.state,t=e.centerx,a=e.centery,n=e.radius,r=e.number,o=e.angle;e.validity;return v(u.a,null,v(p.f,{fluid:!0,className:"main-content-container px-4"},v(p.v,{noGutters:!0,className:"page-header py-4"},v(m.a,{title:"Polygon Vertex Calculator",subtitle:"Find the polygon vertex's here ",md:"12",className:"ml-sm-auto mr-sm-auto"})),v(p.v,null,v(p.e,{lg:"12"},v(p.a,{small:!0,className:"mb-4"},v(p.p,{flush:!0},v(p.q,{className:"p-3"},v(p.v,null,v(p.e,null,v(p.h,null,v(p.v,{form:!0},v(p.e,{md:"6",className:"form-group"},v(p.e,{md:"8",className:"form-group"},v("label",{htmlFor:"x"},"Center X"),v(p.j,{id:"x",value:t,onChange:this.handleTextInputChangex,placeholder:"X-axis",className:"mb-2",required:!0,valid:!0}),v(p.i,null,"Cannot be empty")),v(p.e,{md:"8",className:"form-group"},v("label",{htmlFor:"y"},"Center Y"),v(p.j,{id:"y",value:a,onChange:this.handleTextInputChangey,placeholder:"Y-axis",className:"mb-2",required:!0,valid:!0}),v(p.i,null,"Cannot be empty")),v(p.e,{md:"8",className:"form-group"},v("label",{htmlFor:"vertex"},"Number of sides"),v(p.j,{value:r,id:"vertex",onChange:this.handleTextInputChangeside,placeholder:"Number of side's",className:"mb-2",required:!0,valid:!0}),v(p.i,null,"Number of sides must be a number greater than 2")),v(p.e,{md:"8",className:"form-group"},v("label",{htmlFor:"radius"},"Radius"),v(p.j,{id:"radius",value:n,onChange:this.handleTextInputChangeradius,placeholder:"Radius",className:"mb-2",required:!0,valid:!0}),v(p.i,null,'Radius must be greater than zero"')),v(p.e,{md:"8",className:"form-group"},v("label",{htmlFor:"angle"},"Start angle (degrees)"),v(p.j,{id:"angle",value:o,onChange:this.handleTextInputChangestartangle,placeholder:"Angle in Degree",className:"mb-2",required:!0,valid:!0}))),v(p.e,{md:"6",className:"form-group"},v(p.v,null,v(p.e,null,v(p.a,{small:!0,className:"mb-4"},this.state.vertex.length>0?v(p.b,{className:"p-0 pb-3"},v("table",{className:"table mb-0"},v("thead",{className:"bg-light"},v("tr",null,v("th",{scope:"col",className:"border-0"},"X-axis"),v("th",{scope:"col",className:"border-0"},"Y-axis"))),v("tbody",null,this.state.vertex.map((function(e){return v("tr",null,v("td",null,e.x),v("td",null,e.y))}))))):null),v(f.default,{key:this.state.vertex,vertex:this.state.vertex}))))))))),v(p.q,{className:"p-4"},v("strong",{className:"text-muted d-block mb-2"},"How it Works"),v("pre",{className:"code-part"},v("code",{className:"javascript p-3"},"\nexport function polygon(input) {\n  var cx = parseInt(input.cx); //center x\n  var cy = parseInt(input.cy); //center y\n  var n = input.n; //number of sides\n  var r = input.r; //radius. Dist from center to a vertex\n  var startAng;\n  var ang, vx, vy;\n\n  n = Math.round(n);\n  var centerAng = (2 * Math.PI) / n;\n\n  startAng = (Math.PI * input.a) / 180;\n\n  function isOdd(n) {\n    return n % 2 == 1;\n  }\n\n  //calculate the default start angle\n\n  if (input.a.length == 0) {\n    //none supplied\n    if (isOdd(n)) startAng = Math.PI / 2;\n    //12 oclock\n    else startAng = Math.PI / 2 - centerAng / 2;\n  }\n\n  //create a vertex array\n  var vertex = new Array();\n  for (var i = 0; i < n; i++) {\n    ang = startAng + i * centerAng;\n    vx = Math.round(cx + r * Math.cos(ang));\n    vy = Math.round(cy - r * Math.sin(ang));\n    vertex.push({ x: vx, y: vy });\n  }\n  return vertex;\n}\n  "))),v(p.q,{className:"p-4"},v("strong",{className:"text-muted d-block mb-2"},"About the calculator"),v("p",null,"This calculator takes the parameters of a regular polygon and calculates its coordinates. It produces both the coordinates of the vertices and the coordinates of the line segments making up the sides of the polygon. It is useful to blind users and those who produce material for the sight-impaired. The programs that emboss shapes on pages for the blind need the coordinates of the lines that make up the shape. This page was designed to make it easy to produce the data needed by those programs (such as SVG Draw) to 'draw' regular polygons."),v("p",null,"Click the 'Calculate' button to refresh the results. Note that the y coordinates are positive downwards, to conform to the convention in most computer software. Positive x is to the right. The sides output is a table containing the start and end x,y coordinates of each side of the polygon, going counter clockwise from the first one. Below that is the same data in CSV format. The vertex output is a table containing the x and y coordinates of each vertex of the polygon, going counter clockwise from the first one. Below that is the same data in CSV format."),v("p",null,v("ul",null,v("li",null,"Center X and center Y are the coordinates of the center point of the polygon. Set initially to 0, 0. Note that the y coordinate is positive downwards, to conform to the convention in most computer software. Positive x is to the right."),v("li",null,"The number of sides. Must be greater than 2. Set initially to 4."),v("li",null,"The radius is the distance from the center to a vertex. Set initially to 50."),v("li",null,"Start angle is the position of the first vertex. This angle is in degrees and is the angle starting at 3 o'clock going counter clockwise. So for example if you want the first vertex to be at 12 o'clock, set this to 90. Set initially to blank (auto). If you leave this blank it will be set automatically: If the number of sides is odd, (e.g. a pentagon), the first vertex will be at 12 o'clock. If even, e.g. an octagon, the top and bottom sides will be horizontal on the page."))))))))))}}]),h}(d.a.Component);y.getInitialProps=function(){return{}};t.default=y},eV2b:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var n=a("1OyB"),r=a("vuIU"),o=a("md7G"),s=a("foSv"),l=a("Ji7U"),i=a("q1tI"),c=a.n(i),u=c.a.createElement;function h(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var d=function(e){Object(l.a)(i,e);var t,a=(t=i,function(){var e,a=Object(s.a)(t);if(h()){var n=Object(s.a)(this).constructor;e=Reflect.construct(a,arguments,n)}else e=a.apply(this,arguments);return Object(o.a)(this,e)});function i(){return Object(n.a)(this,i),a.apply(this,arguments)}return Object(r.a)(i,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=new Array;this.props.vertex.map((function(t){e.push(t.x),e.push(t.y)}));var t=this.refs.canvas.getContext("2d");t.fillStyle="#f00",t.beginPath(),t.moveTo(e[0],e[1]),t.fillText("(".concat(e[0],",").concat(e[1],")"),e[0],e[1]);for(var a=e.length/2,n=2;n<e.length-1;n+=2)t.lineTo(e[n],e[n+1]),t.textAlign=n<a/2?"start":n>a/2?"end":"center",t.fillText("(".concat(e[n],",").concat(e[n+1],")"),e[n],e[n+1]);t.closePath(),t.font="30px Verdana";var r=t.createLinearGradient(0,0,this.refs.canvas.width,0);r.addColorStop("0"," magenta"),r.addColorStop("0.5","blue"),r.addColorStop("1.0","red"),t.fillStyle=r,t.fill()}},{key:"render",value:function(){return u("div",null,u("canvas",{ref:"canvas",wdith:"500",height:"300"}))}}]),i}(c.a.Component)},mTXp:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/polygon-vertex",function(){return a("b5Ne")}])}},[["mTXp",0,1,3,2,4,5]]]);