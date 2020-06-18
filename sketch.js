const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;
    ground= new Ground(400,380,800,20);

    edge1= new box(600,365,110,10);
    edge2= new box(550,345,10,50);
    edge3= new box(650,345,10,50);
    paper_ball=new ball(200,350,20,20);
    
    
}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();

    edge1.display();
    edge2.display();
    edge3.display();
    paper_ball.display();
 
    
}
function keyPressed(){
    if(keyCode===UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.pos,{x:80,y:-50})
    }
}
