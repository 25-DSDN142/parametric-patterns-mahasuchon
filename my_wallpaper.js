//your parameter variables go here!

let scaleVar = 200   //Scale variable. Recommended 100-300, default 200.

let borderSizeEntry = 95 //Controls border size. Limit between 50 and 100, default is 92
let sideBorder = true //Needs to be true or false. Controls if there are vertical borders or not
let borderTransparencyEntry = 100 //Transparency of the border. Limit between 0 and 100, default is 55.


let rightSlopeBSize = 0 //Adjust the right side of the right slope in pixels. Limit depends on scale.
let leftSlopeBSize = 0 //Adjust the left side of the right slope in pixels. Limit depends on scale.
let transparencySlopeBEntry = 100 //Controls transparency of the right slope. Limit between 0 and 100, default is 100.

let rightSlopeASize = 0 //Adjust the right side of the right slope in pixels. Limit depends on scale.
let leftSlopeASize = 0 //Adjust the left side of the right slope in pixels. Limit depends on scale.
let transparencySlopeAEntry = 100 //Controls transparency of the right slope. Limit between 0 and 100, default is 100.

let slopeLayerPriority = true //Needs to be true or false. Controls whether the slope is above or below the border line

let backgroundSquareSize = 0.6 //Size of the background square. Limit between 0 and 1.1, default is 0.6

//let TEMPCOLOURl;
//color(204, 48, 0,transparencySlopeB);

//colour section!

let slopeBColor = [204,48,0]







let borderTransparency = borderTransparencyEntry * (256/100)
let transparencySlopeB = transparencySlopeBEntry * (256/100)
let transparencySlopeA = transparencySlopeAEntry * (256/100)
let borderSize = borderSizeEntry / 100

// let sideBorderVal = 0 //do you want the vertical borders? DEPRECATED

/*if (sideBorder = True){
  sideBorderVal = 1;
} else{
  sideBorderVal = 0;
  } */ //DEPRECATED

  //COLOUR VARIABLES INSIDE OF HERE

function setup_wallpaper(pWallpaper) { // setup function


  //TEMPCOLOURl  = color(204, 48, 0,transparencySlopeB);

  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = scaleVar;
  pWallpaper.grid_settings.cell_height = scaleVar;
  pWallpaper.grid_settings.row_offset  = scaleVar/2;

  //misc settings
  rectMode(CENTER);
  ellipseMode(CENTER)


}

function wallpaper_background() {
  background(112, 0, 0);
}

function my_symbol() { 
  if (slopeLayerPriority == true){
    strokeWeight(0);
    fill(0,0,0);
    backgroundSquare()
    border();
    slopeB();
    slopeA();
  } else {
    strokeWeight(0);
    fill(0,0,0);
    backgroundSquare()
    slopeB();
    slopeA();
    border();
  }

}














function backgroundSquare(){
  fill(0,0,0)
  if (sideBorder == true){
    rect(scaleVar/2,scaleVar/2,(scaleVar*borderSize)*backgroundSquareSize,(scaleVar*borderSize)*backgroundSquareSize); //base background
  } else{

    rect(scaleVar/2,(scaleVar/2),scaleVar,(scaleVar*borderSize)*backgroundSquareSize);
    
    //ect(scaleVar/2, scaleVar-(1-borderSize), scaleVar, scaleVar*borderSize)
  } 
}


function slopeB (){
  strokeWeight(0);
  color(slopeBColor,transparencySlopeB);
  color(255,255,255);
  beginShape();
    vertex((scaleVar/2)-rightSlopeBSize,0) //top right corner
    vertex((scaleVar/4)-leftSlopeBSize,0) //top left corner
    vertex(((scaleVar/4)*3)-leftSlopeBSize,scaleVar) //bottom left corner
    vertex(scaleVar-rightSlopeBSize,scaleVar) //bottom right corner
  endShape(CLOSE);
}

function slopeA (){

  fill(235, 106, 0,transparencySlopeA);
  beginShape();
    vertex((scaleVar/2)-leftSlopeASize,scaleVar);//bottom left corner
    vertex(((scaleVar/4)*3)-rightSlopeASize, scaleVar); //bottom right corner
    vertex((scaleVar/4)-rightSlopeASize,0); //top right corner
    vertex(0-leftSlopeASize,0); //top left corner
  endShape(CLOSE);

}

function border() {
  fill(117, 0, 104,borderTransparency);

  if (sideBorder == true){ //all around border
    beginShape();
      vertex(scaleVar*(1-borderSize),scaleVar*(1-borderSize)); //marking inner border
      vertex(scaleVar*borderSize,scaleVar*(1-borderSize));
      vertex(scaleVar*borderSize,scaleVar*borderSize);
      vertex(scaleVar*(1-borderSize),scaleVar*borderSize);
      vertex(scaleVar*(1-borderSize),scaleVar*(1-borderSize)); //joined back up
      vertex(0,0)
      vertex(0,scaleVar)
      vertex(scaleVar,scaleVar)
      vertex(scaleVar,0)
      vertex(0,0)
    endShape(CLOSE);
    } else{
    //rect(scaleVar/2, scaleVar*borderSize,scaleVar,scaleVar*(1-borderSize))

    beginShape();     //only top and bottom border
    vertex(0,0)
    vertex(scaleVar,0)
    vertex(scaleVar, scaleVar*(1-borderSize))
    vertex(0,scaleVar*(1-borderSize))
    endShape(CLOSE);

    beginShape();
    vertex(0,scaleVar)
    vertex(scaleVar,scaleVar)
    vertex(scaleVar, scaleVar*borderSize)
    vertex(0,(scaleVar*borderSize))
    endShape(CLOSE);
    //rect(scaleVar/2, scaleVar,scaleVar,scaleVar*(1-borderSize))
  }
}












/* 
fill(99, 0, 191);
rect(scaleVar/2,scaleVar/2,scaleVar*1,scaleVar*0.5); //base 

fill(125, 0, 209,150); 
rect(scaleVar/2, scaleVar/4, scaleVar, scaleVar/2); //top rect

fill(181, 0, 209,150);
rect(scaleVar/2, (scaleVar/4)*3, scaleVar, scaleVar/2);//bottom rect

fill(160, 0, 209,100);
rect(scaleVar/4, scaleVar/2, scaleVar/2, scaleVar);// left rect

fill(174, 0, 209,150);  
rect((scaleVar/4)*3, scaleVar/2, scaleVar/2, scaleVar);//right rect


fill(108, 0, 209, 80);
rect(scaleVar/8, scaleVar/4, scaleVar/4, scaleVar/2);//top left rect

fill(157, 0, 209, 80);
rect((scaleVar/8)*7, scaleVar/4, scaleVar/4, scaleVar/2);//top right rect

fill(164, 0, 209,80);
rect(scaleVar/8, (scaleVar/4)*3, scaleVar/4, scaleVar/2);//bottom left rect

fill(209, 0, 195,80);
rect((scaleVar/8)*7, (scaleVar/4)*3, scaleVar/4, scaleVar/2);//bottom right rect //DEPRECATED BACKGROUND FUNCTION

*/


  /*if (temp < 255) {
    temp = temp + 3
  }
  else {
    temp = 0
  }
  fill(240,50,temp);
  rect(scaleVar/2, scaleVar/2, scaleVar*0.98, scaleVar*0.98);*/ //DEPRECATED GRADIANT FUNCTION