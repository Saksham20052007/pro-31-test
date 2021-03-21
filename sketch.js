const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var ground;
var particles = [];
var division = [];
var Plinko = [];
var divisionHeight = 300;




function setup() {
  createCanvas(1200,600);

  
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600, 590, width, 5);

  for(var k = 0; k<=width; k = k+80){
    division.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight));
 
  }

}

function draw() {
  background(0,0,0);  





  for(var k = 0; k<=width; k = k+80){
    division.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight));
    division.display();

  }



 ground.display();


}