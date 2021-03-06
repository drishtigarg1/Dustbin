const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

var dustbinObj,groundObject,paperObject;	

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();
	world = engine.world;

	paperObject=new paper(100, 200, 50);
	groundObject=new ground(width/2,670,width,20);
    dustbinObj=new dustbin(1200,650);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  drawSprites();

}

function keyPressed(){

	if(keyCode === UP_ARROW){


		Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:120, y:-145});	

	}

}