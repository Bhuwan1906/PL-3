var gameState = 0;

var rose,welcome,buyinglink,app,background,fruit
var screen1;

var form, planter, game;
var Letsplant,menu,sel;
var Letsplant_img,menu_img;


function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
 

  rose= new Rose();
  app= new App();
  welcome=new Welcome();
  planter= new Planter();
  buyinglink= new Buyinglink();
  fruit= new Fruit();



}
function preload(){
Letsplant_img= loadImage("Images/Plantit.jpg")
menu_img= loadImage("Images/menu.png")

}

function draw(){
 if(gameState===0){
  welcome.display();
   
   }
   if(gameState===1){
     clear();
     planter.display();
 
   }
   if(gameState===2){
    clear();
   
    rose.display();
  

}
if(gameState===3){
  clear();
 
  fruit.display();

}
 

   

  
  
console.log(gameState);
}