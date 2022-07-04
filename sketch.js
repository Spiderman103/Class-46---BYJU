//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;



var spidermanImg, spiderman, GreenGobImg, GreenGob;
var bg, bg_image;
var webs, websImg, webGroup;
//var engine, world, angle;

var GreenGoblinsGroup;
var score = 0;
var angle;



function preload(){

    spidermanImg = loadImage("assets/Spiderman.png");
    GreenGobImg = loadImage("assets/GreenGoblin.png");
    bg_image = loadImage("assets/Background.png");
    websImg = loadImage("assets/SpiderWebs.png");

}



function setup(){

    createCanvas(1200, 700);
    //engine = Engine.create();
    //world = engine.world;
 
    bg = createSprite(600, 350);
    bg.addImage( bg_image);
    bg.scale = 0.5;
    
    angleMode(DEGREES);
    angle = 15;
 
    webGroup = new Group;

    GreenGoblinsGroup = new Group;
    spiderman = createSprite(150,350,angle);
    spiderman.addImage(spidermanImg);
    spiderman.scale = 0.05;

    //GreenGob = createSprite(900,500);
    //GreenGob.addImage(GreenGobImg);
    //GreenGob.scale = 0.25;
    
    
}




function draw(){

    background(0);
/*  */
   spiderman.visible = true;
    //GreenGob.visible = true;
    
    text("Score: "+score, 1100,600);

    if(keyIsDown(LEFT_ARROW)){
        spiderman.x -= 0.5;
    }

    if(keyIsDown(RIGHT_ARROW)){
        spiderman.x += 0.5;
    }
    if(keyIsDown(UP_ARROW)){
        spiderman.y -=0.5;
    }
    if(keyIsDown(DOWN_ARROW)){
        spiderman.y += 0.5;
    }
    
    spawnGoblins();
    shootWebs();

    drawSprites();
}

function spawnGoblins(){
    
    if(World.frameCount % 150 === 0){
        GreenGob = createSprite(1200,600);
        GreenGob.y = Math.round(random(600,400));
        GreenGob.addImage(GreenGobImg);
        GreenGob.velocityX = -3;
        GreenGoblinsGroup.add(GreenGob);
        GreenGob.scale = 0.25;
        GreenGob.lifetime = 400;
    }



}
function shootWebs(){
    
    if(keyCode == 32){
        if(frameCount % 30 === 0){

        
        webs = createSprite(spiderman.x,spiderman.y);
        webs.addImage(websImg);
        webs.velocityX = 6;
        webs.scale = 0.15;
        webGroup.add(webs);
        }
    }
    /*
    var newAngle = spiderman.angle - 20;
    newAngle = newAngle *(3.14/180);
    var velocity = p5.Vector.fromAngle(newAngle);
    velocity.mult(0.5);
    Matter.Body.setStatic(this.body, false);
    Matter.Body.setVelocity(this.body, { x: velocity.x * (180/3.14), y:velocity.y * (180/3.14)});*/


}