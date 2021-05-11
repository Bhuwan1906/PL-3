class Welcome  {
  constructor() {
    this.roseimg=loadImage("Images/PicsArt_05-08-09.11.06.jpg");
    this.Letsplant = createSprite(880,500);
    
  }

  display(){
    if (gameState===0){
      
      this.Letsplant.addImage("Letsplant",Letsplant_img);
      this.Letsplant.scale=0.2;
      
   
      if(mousePressedOver(this.Letsplant)) {
        this.Letsplant.destroy();
       gameState=1
      
    }
   

    
    
    image(this.roseimg,0,0,displayWidth/1 , displayHeight/1 );
    
    drawSprites();
  }
   

    
     

      
     
  
   
      
    
    
    
  }
}

