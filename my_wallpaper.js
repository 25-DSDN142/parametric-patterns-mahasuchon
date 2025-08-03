  //Adjustable parameters 

let scaleVar = 700   //Scale variable. Recommended 100-300, default 200.

let borderSizeEntry = 95 //Controls border size. Limit between 50 and 100, default is 92
let sideBorder = true //Needs to be true or false. Controls if there are vertical borders or not
let borderTransparencyEntry = 100 //Transparency of the border. Limit between 0 and 100, default is 55.

let rightSlopeASize = 0 //Adjust the right side of the right slope in pixels. Positive to move left, negative to move right, default is 0
let leftSlopeASize = 0 //Adjust the left side of the right slope in pixels. Positive to move left, negative to move right, default is 0
let transparencySlopeAEntry = 100 //Controls transparency of the right slope. Limit between 0 and 100, default is 100.

let rightSlopeBSize = 0 //Adjust the right side of the right slope in pixels. Positive to move left, negative to move right, default is 0
let leftSlopeBSize = 0 //Adjust the left side of the right slope in pixels. Positive to move left, negative to move right, default is 0
let transparencySlopeBEntry = 100 //Controls transparency of the right slope. Limit between 0 and 100, default is 100.


let slopeHasHigherPriority = true //Needs to be true or false. Controls whether the slope is above or below the border line

let backgroundSquareSize = 0.6 //Size of the background square. Limit between 0 and 1.1, default is 0.6

  //Adjustable colours

let slopeBColor = [117,0,104] //Colour of right side slope in RGB. Default is [117,0,104]
let slopeAColor = [235,106,0] //Colour of left side slope in RGB. Default is [235,106,0]
let backgroundColor = [36,0,59] //Colour of space between cubes in RGB. Default is [36,0,59]
let backgroundSquareColor = [0,0,0] //Colour of background square in RGB. Default is [0,0,0] 
let borderColor = [85, 4, 135] //Colour of the border in RGB. Default is [85, 4, 135]

  //Conversion from 0-100 scale to 0-256 scale

let borderTransparency = borderTransparencyEntry * (256/100)
let transparencySlopeB = transparencySlopeBEntry * (256/100)
let transparencySlopeA = transparencySlopeAEntry * (256/100)
let borderSize = borderSizeEntry / 100

function setup_wallpaper(pWallpaper) { // Setup code, runs once
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  //pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = scaleVar;
  pWallpaper.grid_settings.cell_height = scaleVar;
  pWallpaper.grid_settings.row_offset  = scaleVar/2;

  //P5js settings
  rectMode(CENTER);
  ellipseMode(CENTER)
}

function wallpaper_background() { //Sets background colour. Not to be confused with background square colour
  background(backgroundColor);
}

function my_symbol() { 
  if (slopeHasHigherPriority == true){ //Checks if slope has a higher priority. if it does, it draws the border before the slope, puttingthe slope on top
    strokeWeight(0);
    fill(0,0,0);
    backgroundSquare()
    border();
    slopeB();
    slopeA();
  } else { //Drawing the slope before the border
    strokeWeight(0);
    fill(0,0,0);
    backgroundSquare()
    slopeB();
    slopeA();
    border();
  }
}

function backgroundSquare(){ //Square behind the slopes
  fill(backgroundSquareColor)
  if (sideBorder == true){ //Checks sideBorder to see whether to adjust square to make vertical border disappear
    rect(scaleVar/2,scaleVar/2,(scaleVar*borderSize)*backgroundSquareSize,(scaleVar*borderSize)*backgroundSquareSize);
  } else{ //This rect() is wider than the last one
    rect(scaleVar/2,(scaleVar/2),scaleVar,(scaleVar*borderSize)*backgroundSquareSize);
  } 
}

function slopeB (){ //Right side slope
  strokeWeight(0);
  fill(slopeBColor,transparencySlopeB); //Calls values
  beginShape(); //custom shape
    vertex((scaleVar/2)-rightSlopeBSize,0) //top right corner
    vertex((scaleVar/4)-leftSlopeBSize,0) //top left corner
    vertex(((scaleVar/4)*3)-leftSlopeBSize,scaleVar) //bottom left corner
    vertex(scaleVar-rightSlopeBSize,scaleVar) //bottom right corner
  endShape(CLOSE);
}

function slopeA (){ //Left side slope
  fill(slopeAColor,transparencySlopeA); //Calls colour values
  beginShape(); //custom shape
    vertex((scaleVar/2)-leftSlopeASize,scaleVar);//bottom left corner
    vertex(((scaleVar/4)*3)-rightSlopeASize, scaleVar); //bottom right corner
    vertex((scaleVar/4)-rightSlopeASize,0); //top right corner
    vertex(0-leftSlopeASize,0); //top left corner
  endShape(CLOSE);
}

function border() { //Border setting
  fill(borderColor,borderTransparency); //Calls colour values
  if (sideBorder == true){ //Border on every side
    beginShape();
      vertex(scaleVar*(1-borderSize),scaleVar*(1-borderSize)); //marking inner edge, top left
      vertex(scaleVar*borderSize,scaleVar*(1-borderSize)); //top right corner
      vertex(scaleVar*borderSize,scaleVar*borderSize); //bottom right corner
      vertex(scaleVar*(1-borderSize),scaleVar*borderSize); //bottom left corner
      vertex(scaleVar*(1-borderSize),scaleVar*(1-borderSize)); //joined back up
      vertex(0,0) //begins the outer edge, top left corner
      vertex(0,scaleVar) //top right corner
      vertex(scaleVar,scaleVar) //bottom right corner
      vertex(scaleVar,0) //bottom left corner
      vertex(0,0) //top left corner
    endShape(CLOSE); //closes it back up
    } else{ //Only the top and bottom border
      //rect(scaleVar/2, scaleVar*borderSize,scaleVar,scaleVar*(1-borderSize))
      beginShape();     //begins drawing top border (as a rectangle)
      vertex(0,0); //top left corner
      vertex(scaleVar,0);//top right corner
      vertex(scaleVar, scaleVar*(1-borderSize));//bottom right corner
      vertex(0,scaleVar*(1-borderSize)); //bottom left corner
      endShape(CLOSE); //end shape

      beginShape(); //Begins drawing bottom border (as a rectangle)
      vertex(0,scaleVar); //top left corner
      vertex(scaleVar,scaleVar); //top right corner
      vertex(scaleVar, scaleVar*borderSize); //bottom right corner
      vertex(0,(scaleVar*borderSize)); //bottom left corner
    endShape(CLOSE); //end shape
    //rect(scaleVar/2, scaleVar,scaleVar,scaleVar*(1-borderSize))
  }
}