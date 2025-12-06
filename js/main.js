// import cellReader from "./cell-reader.js";
import { Circle } from "./circle.js";

let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.border = "solid 5pt green"
ctx.lineWidth = 5;

let xLocation = canvas.width - 150;

let v1 = new Circle(ctx, xLocation, 1000, 100, "green");
let v2 = new Circle(ctx, xLocation, 700, 100, "purple");
let v3 = new Circle(ctx, xLocation, 400, 100, "red");
let valves = [v1, v2, v3];

async function getAllNotes() {
    const songFile = "../data/exercises/songs1235cell.json"
    const request = new Request(songFile);
    const response = await fetch(request);

    const notes = await response.json();
    return notes;
}


canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    Array.from(e.targetTouches).forEach(touch => {
        for (const valve of valves) {
            let leftX = valve.x - valve.radius;
            let rightX = valve.x + valve.radius;
            let topY = valve.y + valve.radius;
            let bottomY = valve.y - valve.radius;

            if (touch.clientX > leftX && touch.clientX < rightX && touch.clientY > bottomY && touch.clientY < topY) {
                valve.press(touch.identifier);
            }
        }
    });
});


canvas.addEventListener("touchend", (e) => {
    e.preventDefault();
    Array.from(e.changedTouches).forEach(touch => {
        for (const valve of valves) {
            if (touch.identifier === valve.pressId) {
                valve.unpress();
            }
        }
    });
});
// Array of each valve's boolean isPressed
// e.g., [true, true, false]
// return string with the valve combo
// This feels like an anti-pattern
let allNotes = getAllNotes();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    console.log(allNotes);
    let expectedValveCombo = "";
    let liveValveCombo = "";

    // Changes to valves
    for (const valve of valves) {
        if (valve.isPressed && valve.radius < 200) {
            valve.grow();
        } else if (!valve.isPressed && valve.radius > 100) {
            valve.shrink();
        }
        liveValveCombo.push(valve.isPressed);
        valve.draw();
    }

    if (liveValveCombo === expectedValveCombo) {
        // move along the array, make the user see happy things
    } else {
        // Don't move along the array, show the user sad things?
    }

    window.requestAnimationFrame(draw);
}

draw();
