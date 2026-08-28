import { Circle } from "./circle.js";
import { Trumpet } from "./trumpet.js";

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.border = "solid 5pt green"
ctx.lineWidth = 5;

let xLocation = canvas.width - 150;

let v1 = new Circle(ctx, xLocation, 1000, 100);
let v2 = new Circle(ctx, xLocation, 700, 100, "purple");
let v3 = new Circle(ctx, xLocation, 400, 100, "red");
let valves = [v1, v2, v3]

const trumpet = new Trumpet();

async function getAllNotes() {
    const songFile = "../data/exercises/1235cell.json"
    const request = new Request(songFile);
    const response = await fetch(request);

    const notes = await response.json();
    return notes;
}

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    Array.from(e.targetTouches).forEach(touch => {
        for (const valve of trumpet.valves) {
            if (valve.intersects(touch.clientX, touch.clientY)) {
                valve.press(touch.identifier);
            }
        }
    });
});


canvas.addEventListener("touchend", (e) => {
    e.preventDefault();
    Array.from(e.changedTouches).forEach(touch => {
        valves.forEach((valve, i) => {
            // translate from array index to trumpet index
            const valveIndex = i + 1;
        });
        // for (const valve of valves) {
        //     const valveIndex =
        //     if (touch.identifier === valve.pressId) {
        //         valve.unpress();
        //     }
        // }
    // }
    });
});

function getDistance(x1, y1, x2, y2) {
    // pythagorean theorum
    let a = Math.abs(x1 - x2) ** 2;
    let b = Math.abs(y1 - y2) ** 2;

    return Math.sqrt(a + b);
}

let allNotes = getAllNotes();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let expectedValveCombo = [];

    valves.forEach((valve, i) => {
        // Map valve array index to trumpet index
        // e.g. E would be represented as 0-1 in the array
        // and would be 1-2 in the trumpet
        const valveIndex = i + 1;

        const isPressed = trumpet.valves[valveIndex];
        if (isPressed) {
            valve.grow();
        } else {
            valve.shrink();
        }

        valve.draw();
    });

    if (trumpet.getCurrentCombo() === expectedValveCombo) {
        canvas.style.border = "solid 5pt red"
    } else {

    }

    requestAnimationFrame(draw);
}

draw();
