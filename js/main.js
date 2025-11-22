import cellReader from "cell-reader.js"

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
canvas.style = "border: solid 5pt green"

ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.lineWidth = "5.0";

function init() {
    window.requestAnimationFrame(draw)
}

function draw() {
    canvas.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath(100, 100);
    ctx.arc(100, 100, 80, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

init();
