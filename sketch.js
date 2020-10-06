
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var groundSprite;



function setup() {
	createCanvas(2000,700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	ball = new Ball(540,450,40);

	ball2 = new Ball(540,450,40);

	ball3 = new Ball(580,450,40);

	ball4 = new Ball(620,450,40);

	ball5 = new Ball(660,450,40);

	ground = new Ground(570,250,250,20);

	rope = new Rope(ball5.body,ground.body,90,0);

	rope2 = new Rope(ball4.body,ground.body,50,0);

	rope3 = new Rope(ball3.body,ground.body,10,0);

	rope4 = new Rope(ball2.body,ground.body,-30,0);

	rope5 = new Rope(ball.body,ground.body,-80,0);




	  

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("blue");
  ellipseMode(RADIUS)
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  ground.display();
  rope.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 

  
  drawSprites();

  keyPressed();

  
	
	
 
 
}
function keyPressed(){
if (keyCode === UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:1,y:10});
}
}



