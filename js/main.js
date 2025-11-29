// import cellReader from "cell-reader.js";
import { Circle } from "./circle.js";

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.border = "solid 5pt green"
ctx.lineWidth = 5;

let v1 = new Circle(ctx, 200, 200, 100);
let v2 = new Circle(ctx, 200, 500, 100);
let v3 = new Circle(ctx, 200, 800, 100);
let valves = [v1, v2, v3];

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    Array.from(e.targetTouches).forEach(touch => {
        for (const valve of valves) {
            console.log(touch);
            console.log(valve);

            let leftX = valve.x - valve.radius;
            let rightX = valve.x + valve.radius;
            let topY = valve.y + valve.radius;
            let bottomY = valve.y - valve.radius;

            if (touch.clientX > leftX && touch.clientX < rightX && touch.clientY > bottomY && touch.clientY < topY) {
                console.log("I should be growing");
                valve.grow();
            }
        }
    });
});


canvas.addEventListener("touchend", (e) => {
    e.preventDefault();
    Array.from(e.targetTouches).forEach(touch => {
        for (const valve of valves) {
            valve.shrink();
        }
    });
})

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (const valve of valves) {
        valve.draw();
    }

    window.requestAnimationFrame(draw)
}

draw();
