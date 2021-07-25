class Umbrella {
    constructor(x, y) {
        var options = {
            'isStatic': true
        }
        this.body = Bodies.circle(x, y, 90, options);
        this.radius = 200;
        this.image = loadImage("man.png");
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
        // fill("red");
        // ellipseMode(RADIUS);
        // ellipse(this.body.position.x, this.body.position.y, 50, 50);
    }
}