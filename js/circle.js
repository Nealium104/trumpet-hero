export class Circle {
    constructor(ctx, x, y, color = "green") {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.radius = 100;
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

    intersects(x, y) {
        const dx = x - this.x;
        const dy = y - this.y;
        return (dx * dx + dy * dy) <= (this.radius * this.radius);
    }
}
