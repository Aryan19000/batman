class Drop {
    constructor(x, y) {
        var options = {
            'restitution': 0,
            'friction': 1.0,
            'density': 2.0,
        }
        this.body = Bodies.circle(x, y, 5, options);
        this.radius = 5;
        this.visibility=100;
        World.add(world, this.body);
    }
    display() {

        // var angle = this.body.angle;
        // push();
        // translate(this.body.position.x, this.body.position.y);
        // rotate(angle);
        // imageMode(CENTER);
        // image(this.image, 0, 0, this.width, this.height);
        // pop();
        var angle=this.body.angle;
        push();
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, 5, 5);
        pop();
        if(this.body.position.y>500){
            World.remove(world, this.body);
            this.visibility=0;
        }
    }
}