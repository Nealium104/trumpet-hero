let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

canvas.style.border = "solid 5pt red"
ctx.lineWidth = 5;

let xLocation = canvas.width - 150;

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
            const valveIndex = i + 1;
        });
    });
});

let allNotes = await getAllNotes();

// origin should be [x, y]
function createStaff(origin, gap, width) {
    const treble = new Image();

    treble.src = '/assets/treble.svg'
    treble.classList.add('staff');
    treble.dataset.status = 'default';

    let [x, y] = origin;
    treble.onload = () => {
        ctx.drawImage(treble, x, y);
    }

    ctx.lineWidth = 5;
    ctx.strokeStyle = 'black';
    ctx.lineCap = 'round';

    let currentY = y;
    for(let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(x, currentY);
        ctx.lineTo(x + width, currentY);

        ctx.stroke()

        currentY += gap;
    }
}

//
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//
//     requestAnimationFrame(draw);
// }
function drawNote() {
    const note = new Image();

    // need to determine note orientation
    const up = true;

    if (up) {
        note.src = '/assets/quarter_up.svg';
    } else {
        note.src = '/assets/quarter_down.svg';
    }

    note.classList.add('note');
    note.dataset.status = "incorrect";

    note.onload = () => {
        ctx.drawImage(note, 100, 100)
    }
}

createStaff([100, 100], 25, 1000);
drawNote();
