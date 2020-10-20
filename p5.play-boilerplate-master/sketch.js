const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0;

function preload() {
  getBackgroundImg();
}

function setup() {
  var canvas = createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  //ground
  ground = new Ground(600,height,1200,20);

  //walls
  wall1 = new Ground(580, 500, 320, 15);
  wall2 = new Ground(970, 320, 240, 15);

  //level4 of wall1
  box1 = new BlueBox(460, 470, 40, 50);
  box2 = new BlueBox(500, 470, 40, 50);
  box3 = new BlueBox(540, 470, 40, 50);
  box4 = new BlueBox(580, 470, 40, 50);
  box5 = new BlueBox(620, 470, 40, 50);
  box6 = new BlueBox(660, 470, 40, 50);
  box7 = new BlueBox(700, 470, 40, 50);

  //level3 of wall1
  box8 = new PinkBox(500, 420, 40, 50);
  box9 = new PinkBox(540, 420, 40, 50);
  box10 = new PinkBox(580, 420, 40, 50);
  box11 = new PinkBox(620, 420, 40, 50);
  box12 = new PinkBox(660, 420, 40, 50);

  //level2 of wall1
  box13 = new GreenBox(540, 370, 40, 50);
  box14 = new GreenBox(580, 370, 40, 50);
  box15 = new GreenBox(620, 370, 40, 50);

  //level1 of wall1
  box16 = new Box(580, 320, 40, 50);

  //level3 of wall2
  block1 = new BlueBox(890, 290, 40, 50);
  block2 = new BlueBox(930, 290, 40, 50);
  block3 = new BlueBox(970, 290, 40, 50);
  block4 = new BlueBox(1010, 290, 40, 50);
  block5 = new BlueBox(1050, 290, 40, 50);

  //level2 of wall2
  block6 = new GreenBox(930, 240, 40, 50);
  block7 = new GreenBox(970, 240, 40, 50);
  block8 = new GreenBox(1010, 240, 40, 50);

  //level1 of wall2
  block9 = new PinkBox(970, 190, 40, 50);

  //polygon
  hexagon = new Polygon(180, 380, 25);

  //slingShot
  slingShot = new SlingShot(hexagon.body, {x:180, y:380});
}

function draw() {
  if (backgroundImg){
    background(backgroundImg);
    }

    textSize(35);
    fill("white");
    text("Score :" + score, width-200, 40);

  Engine.update(engine);

   ground.display();

   wall1.display();
   wall2.display();

   //wall1 boxes
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   box7.display();

   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();
   box7.score();

   box8.display();
   box9.display(); 
   box10.display();
   box11.display();
   box12.display();

   box8.score();
   box9.score();
   box10.score();
   box11.score();
   box12.score();

   box13.display();
   box14.display();
   box15.display();

   box13.score();
   box14.score();
   box15.score();

   box16.display();
   box16.score();

   //wall2 blocks
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();

   block1.score();
   block2.score();
   block3.score();
   block4.score();
   block5.score();

   block6.display();
   block7.display();
   block8.display();

   block6.score();
   block7.score();
   block8.score();

   block9.display();
   block9.score();

   hexagon.display();

   slingShot.display();
   
}

function mouseDragged() {
  Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY })
}

function mouseReleased() {
slingShot.fly();
}

function keyPressed() {
  if(keyCode === 32)
{
 slingShot.attach(hexagon.body);
}
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
 
  if(hour>=06 && hour<=19){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.png";
  }

  backgroundImg = loadImage(bg);
}
