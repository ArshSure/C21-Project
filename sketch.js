
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
	

	var ball_options={
		restitution:0.9,
		density:1.2
	}

	ball = Bodies.circle(400,350,30, ball_options);
	World.add(world,ball);

	ground = new Ground(650, 700, 800, 50);
	leftSide = new Ground(600,700, 20, 300);
	rightSide = new Ground(750,700, 20, 300);



	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.show();
  leftSide.show();
  rightSide.show();
  ellipse(ball.position.x, ball.position.y, 30);
  drawSprites();
 
}

function keyPressed(){

if(keyCode === UP_ARROW) {

	Matter.Bodies.applyForce(ball.position.x=ball.position.x+5, ball.position.y=ball.position.y-5);
}
}
