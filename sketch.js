const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var runner;
var barrel;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  runner = new Runner(400,200,50,50);
  barrel = new Barrel(400,100,50,50);

}

function draw() {
  background(0);  

  runner.display();
  barrel.display();

}