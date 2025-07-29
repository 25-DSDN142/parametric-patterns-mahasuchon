//your parameter variables go here!

let scaleVar = 200 //default 200
let temp = 1;
let rng = 0;

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = scaleVar;
  pWallpaper.grid_settings.cell_height = scaleVar;
  pWallpaper.grid_settings.row_offset  = 100;

  //misc settings
  rectMode(CENTER);
  ellipseMode(CENTER)
}

function wallpaper_background() {
  background(255,255,255);  
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  /*if (temp < 255) {
    temp = temp + 3
  }
  else {
    temp = 0
  }

  fill(240,50,temp);
  rect(scaleVar/2, scaleVar/2, scaleVar*0.98, scaleVar*0.98);*/

  strokeWeight(0);

  fill(0,0,0);
  rect(scaleVar/2,scaleVar/2,scaleVar*1,scaleVar); //base 
  
  fill(99, 0, 191);
  rect(scaleVar/2,scaleVar/2,scaleVar*1,scaleVar*0.5); //base 

  fill(125, 0, 209,150); 
  rect(scaleVar/2, scaleVar/4, scaleVar, scaleVar/2); //top rect

  fill(181, 0, 209,150);
  rect(scaleVar/2, (scaleVar/4)*3, scaleVar, scaleVar/2);//bottom rect

  fill(160, 0, 209,100);
  rect(scaleVar/4, scaleVar/2, scaleVar/2, scaleVar);// left rect

  fill(191, 0, 166,150);  
  rect((scaleVar/4)*3, scaleVar/2, scaleVar/2, scaleVar);//right rect


  fill(108, 0, 209, 80);
  rect(scaleVar/8, scaleVar/4, scaleVar/4, scaleVar/2);//top left rect

  fill(50,50,50, 80);
  rect((scaleVar/8)*7, scaleVar/4, scaleVar/4, scaleVar/2);//top right rect

  fill(50,50,50,80);
  rect(scaleVar/8, (scaleVar/4)*3, scaleVar/4, scaleVar/2);//bottom left rect

  fill(200,200,200,80);
  rect((scaleVar/8)*7, (scaleVar/4)*3, scaleVar/4, scaleVar/2);//bottom left rect
}
