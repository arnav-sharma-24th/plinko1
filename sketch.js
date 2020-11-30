var Engine =  Matter.Engine;
var World= Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

var engine, world;

function setup() {
  var canvas = createCanvas(800,800);
  engine = Engine.create();
  
  world = engine.world;
  ground1 = new Ground(width/2,height,width,20);

  
   
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 40; j <=width; j=j+50){

    plinkos.push (new Plinko(j, 75) ) ;
      }
    for (var j = 15; j <=width-10; j=j+50) {
    
    plinkos.push (new Plinko(j, 175) ) ;
    }

    
  for (var j = 40; j <=width; j=j+50){

    plinkos.push (new Plinko(j, 275) ) ;
      }

      
  for (var j = 15; j <=width; j=j+50){

    plinkos.push (new Plinko(j, 375) ) ;
      }
  
      
}

function draw() {
  background(0); 

  Engine.update(engine);
  ground1.display(); 
 
  
 for(var i =0; i< plinkos.length; i++){

  plinkos[i].display();

 }
 
 if( frameCount%30===0) {

  particles.push(new Particle(random(23,650),0,10,10));
  
}       
 
  for (var j = 0; j < particles.length; j++) {

    particles[j].display ( ) ;
  }
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }

}