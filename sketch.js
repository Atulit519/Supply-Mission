const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var chopper, chopperImg, ground, package;
var world, engine;

function preload(){
    chopperImg = loadImage("helicopter.png");

}

function setup(){
    createCanvas(1000, 500);
    engine = Engine.create();
    world = engine.world;

    chopper = createSprite(500, 100);
    chopper.addImage(chopperImg);
    chopper.scale = 0.5;

    ground = Bodies.rectangle(500, 500, 1000, 30);

    World.add(world, ground);

}

function draw(){
    background("black");
    drawSprites();

    rectMode(CENTER);
    rect(ground.position.x, ground.position.y, 1000, 30);
    if(keyDown("space")){
        package = new Package(chopper.x, chopper.y, 50, 50);
        package.display();

    }

}