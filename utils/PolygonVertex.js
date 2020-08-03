export function polygon(input) {
  var cx = parseInt(input.cx); //center x
  var cy = parseInt(input.cy); //center y
  var n = input.n; //number of sides
  var r = input.r; //radius. Dist from center to a vertex
  var startAng;
  var ang, vx, vy;

  n = Math.round(n);
  var centerAng = (2 * Math.PI) / n;

  startAng = (Math.PI * input.a) / 180;

  function isOdd(n) {
    return n % 2 == 1;
  }

  //calculate the default start angle

  if (input.a.length == 0) {
    //none supplied
    if (isOdd(n)) startAng = Math.PI / 2;
    //12 oclock
    else startAng = Math.PI / 2 - centerAng / 2;
  }

  //create a vertex array
  var vertex = new Array();
  for (var i = 0; i < n; i++) {
    ang = startAng + i * centerAng;
    vx = Math.round(cx + r * Math.cos(ang));
    vy = Math.round(cy - r * Math.sin(ang));
    vertex.push({ x: vx, y: vy });
  }
  return vertex;
}

// build output will uglify the above code so making it a string
export const polygoncode = `
export function polygon(input) {
  var cx = parseInt(input.cx); //center x
  var cy = parseInt(input.cy); //center y
  var n = input.n; //number of sides
  var r = input.r; //radius. Dist from center to a vertex
  var startAng;
  var ang, vx, vy;

  n = Math.round(n);
  var centerAng = (2 * Math.PI) / n;

  startAng = (Math.PI * input.a) / 180;

  function isOdd(n) {
    return n % 2 == 1;
  }

  //calculate the default start angle

  if (input.a.length == 0) {
    //none supplied
    if (isOdd(n)) startAng = Math.PI / 2;
    //12 oclock
    else startAng = Math.PI / 2 - centerAng / 2;
  }

  //create a vertex array
  var vertex = new Array();
  for (var i = 0; i < n; i++) {
    ang = startAng + i * centerAng;
    vx = Math.round(cx + r * Math.cos(ang));
    vy = Math.round(cy - r * Math.sin(ang));
    vertex.push({ x: vx, y: vy });
  }
  return vertex;
}
  `;
