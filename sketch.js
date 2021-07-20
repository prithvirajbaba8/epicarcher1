const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var computerbase;
var playerbase;
var player;
var computerPlayer;
var playerarcher;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  
computerbase=new ComputerBase(width-300,random(450,height-300),180,150);
playerbase=new PlayerBase(300,random(450,height-300),180,150);
player=new Player(285,playerbase.body.position.y-153,50,180);
computerPlayer=new ComputerPlayer(computerbase.body.position.x-10,computerbase.body.position.y-150,50,180);


 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerbase.display();
playerbase.display();
player.display();
computerPlayer.display();

   //display Player and computerplayer
  


}
