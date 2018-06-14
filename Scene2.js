var currentScene;
var bg;
var createCanvas;

function setup() {
  createCanvas(400, 400);
   drawScene1();
};
var drawButton = function() {
  fill(81, 166, 31);
  rect(340, 10, 50, 25);
  fill(255, 255, 255);
  textSize(16);
  text("NEXT", 344, 29);
}; 
// starting scene
var drawScene1  = function() {
  currentScene = 1;
  background(38, 25, 25);
  textSize(46);
  for (var i =0; i<8; i++) {
    fill(255, 255, 255);
    text("POLYBIUS", i+84, 43*i+28, 309, 111);
  }
};

var drawScene2 = function() {
   currentScene = 2;
   background(201, 123, 22);
    textSize(77);
    text("Instructions", 3, 27, 425, 96);
    textSize(30);
    fill(32, 84, 82);
    text("Goal: Escape Each Maze!", 24, 114, 373, 190);
    fill(128, 78, 128);
    text("Controls:", 145, 155, 400, 400);
    fill(54, 94, 5);
    textSize(16);
    text("If you want to stop the character from moving, then", 18, 198);
    text("simultaneously press any two of the arrow keys", 27, 218);
    fill(13, 3, 3);
    stroke(255, 255, 255);
    rect(179, 226, 50, 50); 
    line(205,267,204,237);
    line(191,254,203,237);
    line(219,254,203,237);
    rect(179, 276, 50, 50); 
    line(205,314,204,286);
    line(204,313,217,300);
    line(204,313,192,300);
    rect(129, 276, 50, 50); 
    line(141,303,168,303);
    line(142,304,158,316);
    line(142,303,158,293);
    rect(229, 276, 50, 50); 
    line(267,303,238,303);
    line(268,304,250,293);
    line(266,304,253,318);
    fill(99, 56, 56);
    textSize(20);
    text("Move Up", 242, 237, 161, 118);
    text("Move", 180, 336, 161, 118);
    text("Down", 180, 358, 161, 118);
    text("Move Right", 286, 297, 400, 400);
    text("Move Left", 33, 297, 400, 400);
  
};

var drawScene3 = function() {
  background(20,70,100);
  currentScene = 3;
  for (var j = -3; j < 13; j++) {
    for (var i = 0; i < 22; i++) {
     fill(207, 195, 162);
     rect(i*63, j*34, 70, 132);
    }
  }

  fill(255, 255, 255);
  textSize(35);
  text("The kid in the maze", 47, height/2);
  //image(getImage("avatars/robot_male_2"), 216, 266);
};

var drawScene4 = function() {
  background(144, 240, 234);
  // Draw the sun
  noStroke();
  fill(255, 140, 0);
  ellipse(335, 75, 70, 70);

  // Get images from library and remember in variables
 // var grass = getImage("cute/GrassBlock");
 // var tree = getImage("cute/TreeUgly");

  // Draw the tree and grass once
  var landscape = 0;
  while (landscape<400) {
   // image(grass, landscape, 270);
    //image(tree, landscape, 200);
    landscape+=101;
  }

  currentScene = 4;
  fill(7, 14, 145);
  textSize(23);
  text("The kid was walking in the forest!", 10, 135);
  //image(getImage("avatars/robot_male_2"), width/2, height/1.5);
};

//    currentScene = 3;
//    fill(7, 14, 145);
//    textSize(23);
//    text("The kid was walking at the forest!", 10, 100);
//    image(getImage("avatars/robot_male_2"), width/2, height/2);

//};

var drawScene5 = function() {
  currentScene = 5;
  background(0, 0, 0);
  fill(167, 170, 209);
  textSize(39);
  text("The kid fell down a pit!", 10, 100);
  //image(getImage("avatars/robot_male_2"), width/2, height/2);
};

var drawScene6 = function() {
  currentScene = 6;
  background(50, 59, 59);
 // image(getImage("avatars/robot_male_1"), +177, +101, 158, 123);
  text("The kid can't see anything and gets scared", 10, 100);
};

var drawScene7 = function() {
  currentScene = 7;
  background(189, 212, 217);
  fill(7, 14, 145);
  textSize(27);
  text("The kid have to escape before ", 10, 58);
  text("the dark comes and get eaten", 10, 81);
  text("by the monsters!", 10, 106);
  textSize(20);

  //image(getImage("avatars/robot_male_3"), 21, 257);
  fill(71, 71, 71);
  rect(32, 257, 108, 15);
  rect(46, 197, 82, 60);
};



function mouseDragged() {
  if (currentScene === 5) {
    //image(getImage("avatars/aqualine-sapling"), mouseX-20, mouseY-20);
  }
  drawButton();
};

//end scene
var drawScene8 = function() {
  currentScene = 8;
  background(220);
  textSize(41);
  for (var i =0; i<2; i++)

  {  
    text("YOU WIN", i+97, 36*i+52, 319, 111);
  }
};

function mouseClicked() {

  if (currentScene === 1) {
    drawScene2();
  } else if (currentScene === 2) {
    drawScene3();
  } else if (currentScene === 3) {
    drawScene4();
  } else if (currentScene === 4) {
    drawScene5();
  } else if (currentScene === 5) {
    drawScene6();
  } else if (currentScene === 6) {
    drawScene7();
  } else if (currentScene === 7) {
    drawScene8();
  }
  drawButton();
};

function draw() {
  drawButton();
};
