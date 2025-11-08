let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;
canvas.style = "border: solid 5pt green"

ctx.fillStyle = "green";
ctx.strokeStyle = "green";
ctx.lineWidth = "5.0";
ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.fill();

