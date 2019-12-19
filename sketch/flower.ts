interface Flowers {
    bud: p5.Image,
    flower0: p5.Image,
    flower25: p5.Image,
    flower75: p5.Image,
    flower100: p5.Image,
}

class Flower {
    private flower: p5.Image;
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private time: number;
    private r: number;

    public constructor(x: number, y: number, width: number, height: number) {
        this.flower = flowers.bud;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.time = 0;
        this.r = 36;
    }

    public update() {
        this.move();
        this.grow();
        this.collisionCalc();
    }

    private collisionCalc() {
        var d = dist(this.x, this.y, collisionobjectX, collisionobjectY);
        if (d < this.r + collisionobjectR) {
            this.flower = flowers.flower25;
        }
    }

    private grow() {
        this.time += deltaTime;

        if (this.time > 5000) {
            this.flower = flowers.flower75;
        }
    }

    private move() {
        if (keyIsDown(LEFT_ARROW)) {
            this.x -= 3;
        }
        else if (keyIsDown(RIGHT_ARROW)) {
            this.x += 3;
        }
        if (this.x > width - this.width) {
            this.x = width - this.width;
        }
        if (this.x < 0) {
            this.x = 0;
        }
    }

    public draw() {
        push();
        imageMode(CENTER);
        image(this.flower, this.x, this.y, this.width, this.height);
        pop();
        push();
        noFill();
        noStroke();
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
        pop();
    }
}