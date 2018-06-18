var currentScene;
var bg;
var createCanvas;

function setup() {
  createCanvas(400, 400);
  drawScene1();
};
var start = 
 { x:-10,
   y:-10
 }


var lilly= { 
  x: start.x, 
  y: start.y
  };
  
 
function draw () {
   //startLilly();
  showCharacter();
  moveCharacter();
};

var showCharacter = function() {
  if (currentScene === 1) {
    drawScene1();
  } else if (currentScene === 2) {
    drawScene2();
  } else if (currentScene === 3) {
    drawScene3();
  } else if (currentScene === 4) {
    drawScene4();
  } else if (currentScene === 5) {
    drawScene5();
  } else if (currentScene === 6) {
    drawScene6();
  } else if (currentScene === 7) {
    drawScene7();
  } else if (currentScene === 8) {
    drawMap1();
  } else if (currentScene === 9) {
    drawMap2();
  } else if (currentScene === 10) {
    drawMap3();
  } else if (currentScene === 11) {
    drawScene8();
  } 
  rect(lilly.x, lilly.y, 10, 10);
};

var moveCharacter = function() {
  //Control Player 
  
  if (keyIsPressed && keyCode === 38) { 
    lilly.y--;
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
  } else if (currentScene === 2) {
     lilly.x = -10;
     lilly.y = -10;
  } else if (currentScene === 3) {
     lilly.x = -10;
     lilly.y = -10;
  } else if (currentScene === 4) {
     lilly.x = -10;
     lilly.y = -10;
  } else if (currentScene === 5) {
     lilly.x = -10;
     lilly.y = -10;
  } else if (currentScene === 6) {
     lilly.x = -10;
     lilly.y = -10;
  } else if (currentScene === 7) {
     lilly.x = -10;
     lilly.y = -10;
  } else if (currentScene === 8) {
    lilly.x = 60;
    lilly.y = 15;
  } else if (currentScene === 9) {
    lilly.x = 60;
    lilly.y = 10;
  } else if (currentScene === 10) {
    lilly.x = 40;
    lilly.y = 30;
  } else if (currentScene === 11) {
     lilly.x = -10;
     lilly.y = -10;
  } 
};



function mouseClicked() {
  if (currentScene === 1) {
    drawScene2();
     startLilly();
  } else if (currentScene === 2) {
   drawScene3();
    startLilly();
  } else if (currentScene === 3) {
    drawScene4();
     startLilly();
  } else if (currentScene === 4) {
    drawScene5();
     startLilly();
  } else if (currentScene === 5) {
    drawScene6();
     startLilly();
  } else if (currentScene === 6) {
    drawScene7();
     startLilly();
  } else if (currentScene === 7) {
    drawMap1();
     startLilly();
  } else if (currentScene === 8) {
    drawMap2();
     startLilly();
  } else if (currentScene === 9) {
    drawMap3();
     startLilly();
  } else if (currentScene === 10) {
    drawScene8();
     startLilly();
  } 
};

// starting scene
var drawScene1  = function() {
  currentScene = 1;
  background(38, 25, 25);
  textSize(46);
  fill(255, 255, 255);
  for (var i =0; i<8; i++) {
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
    text("Controls:", 145, 170, 400, 400);
    fill(54, 94, 5);
    textSize(16);
    fill(255, 255, 255);
    rect(179, 226, 50, 50); 
    fill(255, 255, 255);
    line(205,267,204,237);
    line(191,254,203,237);
    line(219,254,203,237);
    fill(255, 255, 255);
    rect(179, 276, 50, 50); 
    fill(255, 255, 255);
    line(205,314,204,286);
    line(204,313,217,300);
    line(204,313,192,300);
    fill(255, 255, 255);
    rect(129, 276, 50, 50); 
    fill(255, 255, 255);
    line(141,303,168,303);
    line(142,304,158,316);
    line(142,303,158,293);
    fill(255, 255, 255);
    rect(229, 276, 50, 50); 
    fill(255, 255, 255);
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
  background(219, 255, 255);
  currentScene = 3;

fill(255, 255, 255);
rect(60, 150, 275, 210);

for (var x = 61; x <319; x+=29) {
    for (var y = 143; y <264; y +=12){
        fill(82, 11, 11);
        rect(x,y,41,13);
    } 
}

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(120, 80, 19);
rect(178, 275, 39, 84);

for (var x = 61; x <160; x+=29) {
    for (var y = 275; y <351; y +=12){
        fill(82, 11, 11);
        rect(x,y,29,12);
    } 
}

for (var x = 218; x <311; x+=29) {
    for (var y = 275; y <351; y +=12){
        fill(82, 11, 11);
        rect(x,y,29,12);
    } 
}

for (var x = 72; x<341;x+=94) {
    fill(230, 237, 237);
    rect(x,191,63,56);
}

for (var x = 72; x<341;x+=179) {
    fill(230, 237, 237);
    rect(x,284,71,58);
}

fill(15, 153, 33);
rect(0, 358, 400, 400);

fill(255, 247, 0);
ellipse(340,49,68,68);

fill(8, 84, 24);
triangle(4, 316, 76, 316, 36, 263);
triangle(4, 277, 76, 277, 34, 228);
triangle(8, 240, 68, 240, 34, 202);

fill(48, 6, 6);
rect(29, 316, 16, 42);
  
  fill(232, 227, 153);
ellipse(368, 275, 27, 30);
fill(0, 0, 0);
ellipse(362, 273, 3, 3);
ellipse(373, 273, 3, 3);
line(363, 282, 372, 282);
fill(255, 0, 0);
ellipse(369, 309, 26, 40);
rect(346, 296, 11, 30);
rect(381, 296, 11, 30);
fill(58, 85, 128);
rect(361, 327, 6, 30);
rect(370, 327, 6, 30);

  fill(255, 255, 255);
  textSize(35);
  text("The kid at home", 67, 190);
};

var drawScene4 = function() {
  background(144, 240, 234);
  // Draw the sun
  fill(255, 140, 0);
  ellipse(335, 75, 70, 70);
  fill(15, 153, 33);
rect(0, 358, 400, 400);


fill(8, 84, 24);
triangle(4, 316, 76, 316, 36, 263);
triangle(4, 277, 76, 277, 34, 228);
triangle(8, 240, 68, 240, 34, 202);

triangle(92, 316, 147, 316, 116, 263);
triangle(92, 277, 147, 277, 116, 228);
triangle(92, 240, 147, 240, 116, 202);

triangle(134, 316, 200, 316, 168, 263);
triangle(134, 277, 200, 277, 168, 228);
triangle(134, 240, 200, 240, 168, 202);

triangle(208, 316, 282, 316, 240, 263);
triangle(208, 277, 282, 277, 240, 228);
triangle(208, 240, 282, 240, 240, 202);

triangle(4, 316, 76, 316, 36, 263);
triangle(4, 277, 76, 277, 34, 228);
triangle(8, 240, 68, 240, 34, 202);

triangle(329, 316, 397, 316, 361, 263);
triangle(329, 277, 397, 277, 361, 228);
triangle(329, 240, 397, 240, 361, 202);


fill(48, 6, 6);
rect(29, 316, 16, 42);
rect(111, 316, 16, 42);
rect(158, 316, 16, 42);
rect(234, 316, 16, 42);
rect(354, 316, 16, 42);
  
  fill(232, 227, 153);
ellipse(310, 275, 27, 30);
fill(0, 0, 0);
ellipse(305, 273, 3, 3);
ellipse(316, 273, 3, 3);
line(306, 282, 314, 282);
fill(255, 0, 0);
ellipse(311, 309, 26, 40);
rect(286, 296, 11, 30);
rect(324, 296, 11, 30);
fill(58, 85, 128);
rect(303, 327, 6, 30);
rect(313, 327, 6, 30);

  currentScene = 4;
  fill(7, 14, 145);
  textSize(23);
  text("The kid was walking in the forest!", 10, 135);
};

var drawScene5 = function() {
  currentScene = 5;
  background(144, 240, 234);
  // Draw the sun
  fill(255, 140, 0);
  ellipse(335, 75, 70, 70);
  fill(15, 153, 33);
rect(0, 358, 400, 400);


fill(8, 84, 24);
triangle(4, 316, 76, 316, 36, 263);
triangle(4, 277, 76, 277, 34, 228);
triangle(8, 240, 68, 240, 34, 202);

triangle(92, 316, 147, 316, 116, 263);
triangle(92, 277, 147, 277, 116, 228);
triangle(92, 240, 147, 240, 116, 202);

triangle(134, 316, 200, 316, 168, 263);
triangle(134, 277, 200, 277, 168, 228);
triangle(134, 240, 200, 240, 168, 202);

triangle(208, 316, 282, 316, 240, 263);
triangle(208, 277, 282, 277, 240, 228);
triangle(208, 240, 282, 240, 240, 202);

triangle(4, 316, 76, 316, 36, 263);
triangle(4, 277, 76, 277, 34, 228);
triangle(8, 240, 68, 240, 34, 202);

triangle(329, 316, 397, 316, 361, 263);
triangle(329, 277, 397, 277, 361, 228);
triangle(329, 240, 397, 240, 361, 202);


fill(48, 6, 6);
rect(29, 316, 16, 42);
rect(111, 316, 16, 42);
rect(158, 316, 16, 42);
rect(234, 316, 16, 42);
rect(354, 316, 16, 42);

fill(0, 0, 0);
ellipse(306, 359, 91, 13);
  fill(167, 170, 209);
  textSize(39);
  text("The kid fell down a pit!", 10, 150);
};

var drawScene6 = function() {
  currentScene = 6;
  background(50, 59, 59);
  textSize(20);
  text("The kid can't see anything and gets scared", 10, 100);
};

var drawScene7 = function() {
  currentScene = 7;
  background(189, 212, 217);
  fill(7, 14, 145);
  textSize(27);
  text("The kid have to escape so", 10, 58);
  text("he doesn't get eaten", 10, 81);
  text("by the monsters!", 10, 110);
  textSize(20);

  fill(71, 71, 71);
  rect(32, 257, 108, 15);
  rect(46, 197, 82, 60);
};

var drawMap1 = function() {
  currentScene = 8;
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
  text("start", 103, 23);
  fill(255, 251, 3);
  rect (349, 341, 42, 14);
  fill(3, 3, 0);
  textSize(13);
  text("end", 362, 352);
  //square
    line(90,10,393,10);
    line(10,10,46,10);
    line(10,10,10,386);
    line(11,387,395,386);
    line(393,356,395,10);
    line(394,385,394,377);
//start of maze
    line(46,10,46,40);
    line(90,10,89,26);
    line(46,42,218,42);
    line(89,25,143,25);
    line(140,26,140,11);
    line(205,25,164,25);
    line(239,25,375,25);
    line(239,25,239,66);
    line(138,66,239,66);
    line(139,89,139,66);
    line(138,89,99,89);
    line(120,73,120,41);
    line(46,73,120,73);
    line(10,81,39,81);
    line(25,29,25,68);
    line(26,56,101,56);
    line(12,103,51,103);
    line(29,121,80,121);
    line(30,175,30,120);
    line(47,173,65,173);
    line(47,173,29,173);
    line(79,190,10,190);
    line(79,190,79,147);
    line(64,173,64,137);
    line(46,137,63,137);
    line(46,157,46,137);
    
    
//end of maze

    line(329,355,298,355);
    line(355,378,394,378);
    line(355,384,355,377);
    line(329,218,329,356);
    line(330,217,149,217);
    line(350,200,350,357);
    line(350,199,174,199);
    line(148,218,148,180);
    line(174,163,174,200);
    
    line(125,162,174,162);
    line(148,180,126,180);
    line(79,90,79,232);
    line(99,90,99,198);
    line(79,89,46,89);
    line(78,294,99,294);
    line(100,294,100,220);
    line(79,248,79,295);
    line(56,247,79,247);
    line(40,232,80,232);
    line(40,214,40,232);
    line(42,247,10,247);
    line(55,220,55,232);
    line(56,308,56,247);
    line(56,254,78,254);
    line(43,293,43,247);
    line(42,291,11,291);
    line(127,250,127,181);
    line(125,162,99,162);
    line(181,295,80,295);
    line(57,309,133,309);
    line(11,304,44,304); 
    line(57,320,149,320);
    line(57,332,106,332);
    line(44,304,44,388);
    line(378,25,378,112);
    line(170,112,356,112);
               strokeWeight(5);
    line(141,68,375,68);
    line(48,334,128,334);
                  strokeWeight(5);
    line(390,385,49,385);
                 strokeWeight(1);
    line(167,131,167,96);
    line(366,132,168,132);
    line(129,378,390,378);
    line(130,377,130,333);
    line(149,321,149,360);  
    line(60,309,167,309);
    line(182,295,182,258);
    line(127,269,127,243);
    line(128,270,160,270);
    line(182,258,229,258);
    line(160,269,160,235);                          
    line(159,235,250,235);
    line(175,320,230,320);
    line(231,323,231,258);
    line(250,304,250,235);
    line(305,304,250,304);
    line(305,324,263,324);
    line(145,322,225,322);
    line(149,360,233,360);
    line(145,320,231,320);
    line(231,360,231,320);
    line(262,355,307,355);
    line(262,355,262,324);
    line(306,324,306,304);
    //box 
    fill(179, 234, 245);
    rect(180,100,194,95);
    fill(0, 0, 0);
};

var drawMap2 = function() {
  currentScene = 9;
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
  currentScene = 10;
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
  line(124, 68, 397, 67);//3
  fill(36, 36, 31);
  triangle(100, 100, 300, 100, 200, 227);
  ellipse(308, 202, 75, 69);
  ellipse(119, 202, 51, 53);
};  
  

var drawScene8 = function() {
  currentScene = 11;
  background(220);
  textSize(41);
  for (var i =0; i<2; i++) {  
    text("GAME OVER", i+97, 36*i+52, 319, 111);
  }
};
