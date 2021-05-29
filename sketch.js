const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
function setup() {
  createCanvas(400,400);
  engine=Engine.create()
 world=engine.world
 var options={
   isStatic : true
 }
 ground= Bodies.rectangle(200,380,400,20,options)
 World.add(world,ground)
 console.log(ground)
 var options1 = {
   restitution : 1
 }
 ball=Bodies.circle(200,100,20,options1)
 World.add(world,ball)
}

function draw() {
  background("cyan");  
  Engine.update(engine)
  rectMode(CENTER)
rect(ground.position.x,ground.position.y,400,20)
ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20)

}