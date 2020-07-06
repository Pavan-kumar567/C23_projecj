const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(480,350,50,250);
    box2 = new Box(240,350,50,250);
    box3 = new Box(650,350,50,250);
    box4 = new Box(500,350,50,250);
    ground = new Ground(400,390,800,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    fill ("gold");
    triangle(240,100,200,150,280,150);
    triangle(480,80,440,130,540,130);
    triangle(650,100,610,150,690,150);
    ground.display();
}