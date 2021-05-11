class Planter  {
    constructor() {
      this.bg=loadImage("Images/Bg.jpg.jpg");
      this.BGimg=loadImage("Images/Background.jpg")
     this.menu=null;
  
      
    }
  
    display(){
        if (gameState===1){
          image(this.BGimg,0,0,displayWidth/1 , displayHeight/1);
this. menu = createSprite(80,100,100,100);
this.menu.addImage("menu",menu_img);
this.menu.scale=0.2;
     
      image(this.bg,0,0,displayWidth/1 , displayHeight/1 );
      
      drawSprites();
      
     {
       {if(mousePressedOver(this.menu)){
            textAlign(CENTER);
            background(200);
            sel = createSelect();
            sel.position(70,15);
            sel.option('Plant :');
            sel.option('Rose');
            sel.option('Fruit');
            sel.option('ornamenatal');
            sel.option('Vegetable');
          
            sel.changed( ()=>{var choice=sel.value()  
            if(choice==="Rose"){
              gameState=2
            }
            else if(choice==="Pineapple"){
              gameState=3
            }
            else if(choice==="ornamental"){
              gameState=4
            }
            else if (choice==="Vegetable"){
              gameState=5
            }

          })
          
         
       }
        }

        
          }

}
     

    
    }
   

  }