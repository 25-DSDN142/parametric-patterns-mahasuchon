//your parameter variables go here!
let rect_width  = 10;
let rect_height = 60;
let gradiant = 150;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);

  rectMode(CENTER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
//temp
function wallpaper_background() {
  background(0,0,0); //light honeydew green colour

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  temp();
  shadow(gradiant);
  shadow2(gradiant);
  shadow3(gradiant);
  shadow4(gradiant);
  shadow5(gradiant);
}

function temp() {
  strokeWeight(0);
  fill(255,255,0);
  rect(100 ,100, rect_width*2, rect_height);
}

function shadow(y) {
  strokeWeight(0)
  fill(255,255,0,(y*2))
  rect(100,y,y*0.7,(rect_height/2))
}

function shadow2(y) {
  y = y*0.8
  strokeWeight(0)
  fill(255,255,0,(y*2))
  rect(100,y,y*0.7,(rect_height/2))
}

function shadow3(y) {
  y = y*0.6
  strokeWeight(0)
  fill(255,255,0,(y*2))
  rect(100,y,y*0.7,(rect_height/2))
}

function shadow4(y) {
  y = y*0.4
  strokeWeight(0)
  fill(255,255,0,(y*2))
  rect(100,y,y*0.7,(rect_height/2))
}

function shadow5(y) {
  y = y*0.2
  strokeWeight(0)
  fill(255,255,0,(y*2))
  rect(100,y,y*0.7,(rect_height/2))
}