const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;



var ground;
var particles = [];
var division = [];
var divisionHeight = 250;




function setup() {
  createCanvas(1200,700);

  
	engine = Engine.create();
	world = engine.world;

  ground = new Ground(600, 695, width, 5);

  for(var k = 10; k<width; k = k+80){
    division.push(new Ground(k, height-divisionHeight/2, 10, divisionHeight));
 
  }

  for(var a = 40; a<width; a = a+50){
    particles.push(new particle(a, 75));
 
  }

  for(var b = 20; b<width; b = b+80){
    particles.push(new particle(b, 175));
 
  }  
  
  for(var c = 40; c<width; c = c+50){
    particles.push(new particle(c, 275));
 
  }

  for(var d = 20; d<width; d = d+80){
    particles.push(new particle(d, 375));
 
  }

}

function draw() {
  background(0,0,0);  





  for(var k = 0; k<division.length;  k++){
    division[k].display();

  }

  for(var a = 0; a<particles.length;  a++){
    particles[a].display();
  }

  for(var b = 0; b<particles.length;  b++){
    particles[b].display();
  } 
  
  for(var c = 0; c<particles.length;  c++){
    particles[c].display();
  }

  for(var d = 0; d<particles.length;  d++){
    particles[d].display();
  }



 ground.display();

 getPlinko();




}

function getPlinko(){
  if (frameCount%90===0){
   var p =  new plinko(600, 10)

   p.display();
  }

}