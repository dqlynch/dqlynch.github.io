//import {Delaunay} from "d3-delaunay"
const Delaunay = d3.Delaunay

$(document).ready(function() {
  // Set canvas to screen size
  let canvas = $("#canvas");
  canvas.attr("width", document.body.clientWidth - 20);
  canvas.attr("height", document.body.clientHeight - 20);

  $("body").fadeIn(200);

  // Draw stuff
  const cvs = document.getElementById('canvas')
  const ctx = cvs.getContext('2d')
  drawTriangles(ctx, cvs.height, cvs.width, 8);
})

function drawTriangles(context, height, width, grid_div=10) {
  // Form grid of points
  let points = [];
  for (let i = 0; i <= grid_div; ++i) {
    for (let j = 0; j <= grid_div; ++j) {
      // Randomly offset points
      let ioff = (Math.random() - 0.5) * (1)*(height/grid_div)
      if (i == 0 || i == grid_div) {
        ioff = 0
      }
      let joff = (Math.random() - 0.5) * (1)*(width/grid_div)
      if (j == 0 || j == grid_div) {
        joff = 0
      }

      points.push([j*(width/grid_div) + joff, i*(height/grid_div) + ioff]);
    }
  }

  delaunay = Delaunay.from(points);

  // Render points
  context.strokeStyle = "darkgray";
  //context.beginPath();
  //delaunay.renderPoints(context);
  //context.fill();

  // Voronoi diagram
  //const voronoi = delaunay.voronoi([0, 0, width, height]);
  //context.beginPath();
  //voronoi.render(context);
  //context.stroke();

  // Render triangles
  for (let i = 0, n = delaunay.triangles.length / 3; i < n; ++i) {
    setTimeout(() => {
      renderTriangle(context, delaunay, i)
    }, i*200)
  }
}


function renderTriangle(context, delaunay, i) {
  context.beginPath();
  delaunay.renderTriangle(i, context);
  context.stroke();

  vertices = delaunay.trianglePolygon(i);
  if (Math.random() > 0.75) {
    vertices.reverse();
  }

  drawSpiral(context, vertices, ratio=15, depth=0, maxdepth=30);
}


function drawSpiral(context, vertices, ratio=5, depth=0, maxdepth=10) {
  let point = vertices[0];
  let a = vertices[1];
  let b = vertices[2];
  let other = between(a, b, ratio=10);

  context.beginPath();
  context.moveTo(point[0], point[1]);
  context.lineTo(other[0], other[1]);
  context.stroke();

  let next_verts = [other, b, point];

  if (depth != maxdepth) {
    setTimeout(() => {
      drawSpiral(context, next_verts, ratio=ratio, depth=depth+1, maxdepth=maxdepth);
    }, 40);
  }
}


// Return a point on the line between a and b, closer to point a by ratio
function between(a, b, ratio) {
  return [
    (a[0]*ratio + b[0]) / (ratio+1),
    (a[1]*ratio + b[1]) / (ratio+1),
  ]
}
