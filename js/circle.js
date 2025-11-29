export class Circle {
    constructor(ctx, x, y, radius, color = 'green') {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
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
        console.log("circle growing function");
        this.color = "blue";
        if (this.radius < 400) {
            this.radius += 1;
        }
    }

    shrink() {
        console.log("circle shrinking function");
        this.color = "green";
        if (this.radius > 100) {
            this.radius -= 1;
        }
    }
}
