//Create variables here
var happydog,dogimage,dog,database, foodS,foodstock;
var no_of_bottles;
function preload()
{
  //load images here
  happydog= loadImage("happydog.png");
  dogimage= loadImage("Dog.png");

}

function setup() {
	createCanvas(500, 500);
  dog= createSprite(250,250,20,20);
  
  dog.addImage(dogimage);
  dog.scale=0.3;

  database=firebase.database();
  var bottlenumber= database.ref("no_of_bottles");
  bottlenumber.on("value",readPosition,showerror);
}
function readPosition(data){
  no_of_bottles= data.val();
  console.log(no_of_bottles)
  
}

function draw() {  
  
  background(rgb (46, 139, 87));
  fill ("pink");
  text("Note : press UP_ARROW KEY TO FEED MILK TO Drago!!",100,30)
  drawSprites();
  if (no_of_bottles !==undefined){
  text("number of bottles left: "+no_of_bottles,300,450);
  //add styles here
  
  if (keyWentDown("UP_ARROW")){
    write((5 ));
    dog.addImage(happydog)
  }
}
}
function showerror(){
  console.log("error");
}

function write(x){
  database.ref('/').set({
    'no_of_bottles': no_of_bottles-1
  })
}


