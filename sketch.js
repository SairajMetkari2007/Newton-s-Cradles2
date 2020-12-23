const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var ball, rope;

function setup() {
  createCanvas(1450, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(725, 100, 1450, 20);
  bob1=new Bob(400,350,50);
  bob2=new Bob(450,350,50);
  bob3=new Bob(500,350,50);
  bob4=new Bob(550,350,50);
  bob5=new Bob(600,350,50);
  sling1= new Rope(bob1.body,ground.body,-50*2,0);
  sling2= new Rope(bob2.body,ground.body,-25*2,0);
  sling3= new Rope(bob3.body,ground.body,-0*2,0);
  sling4= new Rope(bob4.body,ground.body,25*2,0);
  sling5= new Rope(bob5.body,ground.body,50*2,0);
}
function draw() {
  background(0);
  Engine.update(engine);
  bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	ground.display();
	sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
	
}

function keyPressed() { 
//	if (keyCode === UP_ARROW) 
//	{ Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-100,y:-100}); } 
} 

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});

}