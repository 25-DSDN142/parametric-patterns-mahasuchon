//your parameter variables go here!
let rect_width  = 50;
let rect_height = 50;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}
//temp
function wallpaper_background() {
  background(255,255,255); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  ellipse(100 ,100, rect_width, rect_height);
}

function temp() {

}