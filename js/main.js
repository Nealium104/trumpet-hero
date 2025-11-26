// import cellReader from "cell-reader.js";
import { Circle } from "./circle.js";

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
canvas.style.border = "solid 5pt green"

ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.lineWidth = "5.0";

let v1 = new Circle(ctx, 100, 100, 50);
let v2 = new Circle(ctx, 100, 200, 50);
let v3 = new Circle(ctx, 100, 300, 50);

function init() {
    window.requestAnimationFrame(draw);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.drawRect(100, 100);
    // ctx.stroke();
    v1.draw();
    v2.draw();
    v3.draw();
    window.requestAnimationFrame(draw)
}

init();
