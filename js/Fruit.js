class Fruit {
    constructor() {
        this.roseimg=loadImage("Images/fruit.jpg");
        
      
    }
  
    display(){
    image(this.roseimg,1,1,displayWidth/1 , displayHeight/1);
    fill(255, 51, 0);
    textSize(33);
    text("Pineapple",10,50);
    fill(102, 255, 255);
    textSize(20);
    text("The pineapple (Ananas comosus) is a tropical plant with an edible fruit and the most economically significant plant in the family Bromeliaceae.",1.5,110)
    text("The pineapple is indigenous to South America, where it has been cultivated for many centuries.",1.5,130)
    text("The introduction of the pineapple to Europe in the 17th century made it a significant cultural icon of luxury.",1.5,150)
    text("Since the 1820s, pineapple has been commercially grown in greenhouses and many tropical plantations.",1.5,170)
    text("Further, it is the third most important tropical fruit in world production.",1.5,190)
    text("In the 20th century, Hawaii was a dominant producer of pineapples, especially for the US; however, by 2016, Costa Rica, Brazil",1.5,210)
    text("and the Philippines accounted for nearly one-third of the world's production of pineapples. ",1.5,230)
   
}
}