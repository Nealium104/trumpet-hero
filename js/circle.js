export class Circle {
    constructor(ctx, x, y, radius, color = 'green') {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.isPressed = false;
        this.pressId = "";
    }

    press(id) {
        this.pressId = id;
        this.isPressed = true;
    }

    unpress() {
        this.pressId = "";
        this.isPressed = false;
    }


    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle = this.color;
        this.ctx.fill();
        this.ctx.stroke();
    }

    grow() {
        this.color = "blue";
        if (this.radius < 150) {
            this.radius += 25;
        }
    }

    shrink() {
        this.color = "green";
        if (this.radius > 100) {
            this.radius -= 25;
        }
    }
}
