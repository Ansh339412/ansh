const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var pig1,pig2,log2
var engine, world;
var log1,bird1
var box1,box3,box4

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,340,70,70);
    ground = new Ground(600,height,1200,20)
 pig1=new Pig(810,350)
  log1=new Log(810,260,300,PI/2)
 box3=new Box(700,240,70,70)
 box4=new Box(920,240,70,70)
 pig2=new Pig(810,220)
 log2=new Log(810,180,300,PI/2)
bird1=new Bird(100,100)
 }  
  
function draw(){
    background(0);
     Engine.update(engine);
     
    box1.display();
    box2.display();
    ground.display();
pig1.display();
log1.display()
box3.display()
box4.display()
pig2.display()
log2.display()
bird1.display()
}