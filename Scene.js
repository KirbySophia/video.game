var currentScene;
var bg;
var createCanvas;
function setup() {
  createCanvas(500, 400);
  drawScene1();
};
var start = 
 { y:23,
   x:103
 }


var lilly= { 
  y:
start.x, 
  x:
start.y
  };
  
 
function draw () {
   //startLilly();
  moveCharacter();
    showCharacter();

 
};
var showCharacter = function() {
  rect(lilly.x, lilly.y, 10, 10);
};

var moveCharacter = function() {
  //Control Player 
  // if (keyIsPressed) {
  if (keyIsPressed &&keyCode === 38) { 
    lilly.y--;
    //lilly.Up();
  } else if (keyIsPressed && keyCode === 40) {
    lilly.y++;
  } else if (keyIsPressed && keyCode=== 37) {
    lilly.x--;
  } else if (keyIsPressed && keyCode === 39) {
    lilly.x++;
  } else {
    keyCode = 0;
  }
  //
};

function startLilly (){
if (currentScene === 1){
  lilly.x = start.x;
  lilly.y = start.y; 
} else if (current === 2) {
    lilly.x = 50;
  lilly.y = 50;
  } else if (current === 3) {
     lilly.x = 20;
  lilly.y = 20;
  }
};



function mouseClicked() {
  if (currentScene === 1) {
    drawMap1(); 
  } else if (currentScene === 2) {
   drawMap2();
    startLilly();
  } else if (currentScene === 3) {
    drawMap3();
     startLilly();
  } else if (currentScene === 4) {
    drawScene8();
     startLilly();
  } else if (currentScene === 8) {
   }
};

// starting scene
var drawScene1  = function() {
  currentScene = 1;
  background(38, 25, 25);
  textSize(46);
  for (var i =0; i<8; i++) {
    text("POLYBIUS", i+84, 43*i+28, 309, 111);
  }
};

var drawMap1 = function() {
       startLilly();
  currentScene = 2;
  background(179, 234, 245);
  // conrtol bar
  fill(255, 217, 0);
  rect(400, 10, 80, 300);
  fill(0, 0, 0);
  textSize(13);
  text("MOVE UP", 405, 22);
  text("up arrow", 405, 32);
  text("MOVE DOWN", 405, 62);
  text("down arrow", 405, 72);
  text("MOVE LEFT", 405, 100);
  text("left arrow", 405, 110);
  text("MOVE RIGHT", 405, 130);
  text("right arrow", 405, 140);
  text("TO STOP", 405, 160);
  text("press to keys", 405, 170);
  //map 
  fill(255, 251, 3);
  rect (94, 10, 42, 14);
  fill(3, 3, 0);
   textSize(13);
  text("start", start.x,start.y);
  fill(255, 251, 3);
  rect (349, 341, 42, 14);
  fill(3, 3, 0);
  textSize(13);
  text("end", 362, 352);
  //square
  line(90, 10, 393, 10);
  line(10, 10, 46, 10);
  line(10, 10, 10, 386);
  line(11, 387, 395, 386);
  line(393, 356, 395, 10);
  line(394, 385, 394, 377);
  //start of maze
  line(46, 10, 46, 40);
  line(90, 10, 89, 26);
  line(46, 42, 218, 42);
  line(89, 25, 143, 25);
  line(140, 26, 140, 11);
  line(205, 25, 164, 25);
  line(239, 25, 375, 25);
  line(239, 25, 239, 66);
  line(138, 66, 239, 66);
  line(138, 89, 139, 66);
  line(138, 89, 99, 89);
  line(120, 73, 120, 41);
  line(46, 73, 120, 73);
  line(10, 81, 39, 81);
  line(25, 29, 25, 68);
  line(26, 56, 101, 56);
  line(12, 103, 51, 103);
  line(29, 121, 80, 120);
  line(29, 175, 30, 120);
  line(47, 173, 65, 173);
  line(47, 173, 29, 173);
  line(79, 190, 10, 190);
  line(79, 190, 79, 147);
  line(64, 173, 64, 137);
  line(46, 137, 63, 137);
  line(46, 157, 46, 137);
  //end of maze
  line(329, 355, 298, 356);
  line(355, 378, 394, 378);
  line(355, 384, 356, 377);
  line(329, 218, 329, 356);
  line(330, 217, 149, 216);
  line(350, 200, 350, 357);
  line(350, 199, 174, 199);
  line(148, 218, 148, 180);
  line(174, 163, 174, 200);
  line(125, 162, 174, 162);
  line(148, 180, 126, 180);
  line(79, 90, 79, 232);
  line(99, 90, 99, 198);
  line(79, 89, 46, 89);
  line(78, 294, 99, 294);
  line(100, 294, 100, 220);
  line(79, 248, 79, 295);
  line(56, 247, 79, 247);
  line(40, 232, 80, 232);
  line(40, 214, 39, 234);
  line(42, 247, 10, 247);
  line(55, 220, 55, 232);
  line(56, 308, 56, 247);
  line(56, 254, 78, 254);
  line(43, 293, 43, 247);
  line(42, 291, 11, 291);
  line(127, 250, 126, 181);
  line(125, 162, 99, 162);
  line(181, 295, 80, 295);
  line(57, 309, 106, 310);
  line(11, 304, 42, 304); 
  line(57, 320, 106, 321);
  line(57, 331, 106, 332);
  line(44, 304, 44, 388);
};

var drawMap2 = function() {
  currentScene =3;
  background(222, 104, 104);
  strokeWeight(3);

  //map
  fill(255, 251, 3);
  rect (93, 10, 42, 14);
  fill(3, 3, 0);
  text("start", 103, 21);
  fill(255, 251, 3);
  rect (43, 376, 42, 14);
  fill(3, 3, 0);
  text("end", 48, 387);
  //square
  line(89, 10, 393, 10);
  line(10, 10, 46, 10);
  line(10, 10, 10, 386);
  line(43, 390, 395, 391);
  line(395, 389, 395, 11);

  //horizental lines layer 1
  line(45, 45, 77, 45);
  line(156, 45, 109, 45);
  line(226, 45, 194, 45);
  line(258, 45, 279, 45);
  line(357, 45, 333, 45);

  //horizental lines layer 2
  line(10, 75, 40, 75);
  line(331, 75, 197, 75);

  //horizental lines layer 3
  line(131, 105, 79, 105);
  line(228, 105, 283, 105);
  line(333, 105, 357, 105);

  //horizental lines layer 4
  line(44, 135, 104, 135);
  line(286, 135, 330, 135);
  line(360, 135, 391, 135);

  //horizental lines layer 5
  line(13, 165, 40, 165);
  line(107, 165, 132, 165);
  line(195, 165, 227, 165);
  line(357, 165, 334, 165);

  //horizental lines layer 6
  line(43, 195, 76, 195);
  line(109, 195, 154, 195);
  line(196, 195, 227, 195);
  line(312, 195, 332, 195);
  line(361, 195, 391, 195);

  //horizental lines layer 7
  line(74, 225, 103, 225);
  line(133, 225, 193, 225);
  line(284, 225, 308, 225);
  line(335, 225, 358, 225);

  //horizental lines layer 8
  line(42, 255, 193, 255);
  line(231, 255, 309, 255);

  //horizental lines layer 9
  line(77, 281, 133, 281);
  line(196, 281, 230, 281);
  line(286, 281, 332, 281);

  //horizental lines layer 10
  line(13, 308, 40, 308);
  line(78, 308, 197, 308);
  line(231, 308, 281, 308);

  //horizental lines layer 11
  line(42, 333, 136, 333);
  line(204, 333, 228, 333);
  line(268, 333, 332, 333);

  //horizental lines layer 12
  line(42, 355, 157, 355);
  line(191, 355, 228, 355);
  line(312, 355, 358, 355);

  //vertical lines layer 1
  line(42, 106, 42, 164);
  line(42, 197, 42, 307);
  line(42, 356, 42, 386);

  //vertical lines layer 2
  line(77, 46, 77, 104);
  line(77, 167, 77, 194);
  line(77, 311, 77, 332);

  //vertical lines layer 3
  line(106, 79, 106, 104);
  line(106, 167, 106, 253);

  //vertical lines layer 4
  line(134, 46, 134, 75);
  line(134, 106, 134, 164);
  line(134, 257, 134, 279);

  //vertical lines layer 5
  line(157, 47, 157, 194);
  line(157, 282, 157, 354);

  //vertical lines layer 6
  line(194, 13, 194, 42);
  line(194, 76, 194, 136);
  line(194, 226, 194, 280);

  //vertical lines layer 7
  line(230, 135, 230, 255);
  line(230, 283, 230, 353);

  //vertical lines layer 8
  line(257, 46, 257, 73);
  line(257, 108, 257, 227);
  line(257, 257, 257, 281);
  line(257, 358, 257, 387);

  //vertical lines layer 9
  line(283, 106, 283, 224);
  line(283, 282, 283, 330);
  line(283, 358, 283, 390);

  //vertical lines layer 10
  line(310, 12, 310, 106);
  line(310, 167, 310, 194);
  line(310, 227, 310, 253);
  line(310, 283, 310, 308);
  line(310, 335, 310, 354);

  //vertical lines layer 11
  line(333, 136, 333, 164);
  line(333, 196, 333, 225);
  line(333, 255, 333, 280);
  line(333, 307, 333, 331);

  //vertical lines layer 12
  line(358, 46, 358, 134);
  line(358, 167, 358, 194);
  line(358, 167, 358, 194);
  line(358, 228, 358, 352);

  //end of maze
};


var drawMap3 = function() {
  currentScene = 3;

  background(158, 120, 120);
  strokeWeight(23);
  text("Start", 29, 43, 81, 215);
  line(12, 387, 12, 71);//right
  line(439, 12, 6, 12);//top
  line(3328, 375, -22, 390);//bottom
  line(390, -77, 390, 339);//left
  text("END", 352, 360, 81, 215);
  strokeWeight(10);
  //inside maze
  rect(70, 270, 261, 80);
  line(69, 65, 21, 65);//1
  line(67, 220, 71, 65);//2
  image(getImage("cute/WaterBlock"), 69, 52, -46, 59);
  line(124, 68, 397, 67);//3
  image(getImage("cute/WaterBlock"), 384, 6, -75, 58);
  fill(36, 36, 31);
  triangle(100, 100, 300, 100, 200, 227);
  ellipse(308, 202, 75, 69);
  ellipse(119, 202, 51, 53);
};
 
  
 var drawScene8 = function() {
  currentScene = 8;
  background(220);
  textSize(41);
  for (var i =0; i<2; i++) {  
    text("GAME OVER", i+97, 36*i+52, 319, 111);
  }
};
