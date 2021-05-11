class Rose  {
    constructor() {
        this.roseimg=loadImage("Images/garden-rose-red-pink-56866.jpeg");
        
      
    }
  
    display(){
    image(this.roseimg,450,1,900,900);
    fill(255,192,203)
    textSize(33);
       text("Rose",10,50);

       fill(160,32,240)
      textSize(9.3);
    text("A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears.",1.5,110)
    textSize(10);
    text(" There are over three hundred species and tens of thousands of cultivars.",1,120);
    textSize(8)
    text(" They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.",1,130)
    textSize(8.3)
    text("Flowers vary in size and shape and are usually large and showy, in colours ranging from white through yellows and reds. ",1,140)
    textSize(9)
     text("Most species are native to Asia, with smaller numbers native to Europe, North America, and northwestern Africa.",1.5,150)  
     textSize(10.5)
     text(" Species, cultivars and hybrids are all widely grown for their beauty and often are fragrant",1,160);
     textSize(10.5)
     text(" Roses have acquired cultural significance in many societies.",1,170);
     textSize(9)
     text(" Rose plants range in size from compact, miniature roses, to climbers that can reach seven meters in height.",1,180)
     textSize(9)
     text(" Different species hybridize easily, and this has been used in the development of the wide range of garden roses.",1,190);

          
      
      
     
     
       
       
      
  
    }
}
