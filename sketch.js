const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, boy, maxDrops, drop, drops;
var dash = [];
var b = 10;

function preload() {

}

function setup() {
    var canvas = createCanvas(600, 550);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(300, 560, 600, 50);
    boy = new Umbrella(300, 445);
    drop = new Drop(random(0, 600), 0);
    maxDrops = 100;
}

function draw() {
    background("lightblue");
    Engine.update(engine);

    if (b == 10) {
        var drops = new Drop(random(0, 600), 0);
        var sets = [drops];
        dash.push(sets);
        for (var i; i < dash.length; i++) {
            var dropped = new Drop(random(0, 600), 0);
            dropped.display();
        }
    }

    // if(frameCount%2===0){
    //     var dash=[1, 2, 3];
    //     var drops=new Drop(random(0, 600), 0);
    //     dash.push(drops);
    //     drops.display();
    // }

    ground.display();
    boy.display();
    drop.display();
    // drops.display();
}

