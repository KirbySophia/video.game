var currentScene;
var bg;
var createCanvas;

var lilly= { 
  y:10, 
  x:10
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
    }
    else {
     keyCode = 0;}
  //
};

// starting scene
var drawScene1  = function() {
    currentScene = 1;
      background(38, 25, 25);
    textSize(46);
    for(var i =0; i<8; i++){
        text("POLYBIUS",i+84,43*i+28,309,111);

}
};
var drawMap1 = function() {
  currentScene = 2;
   var background1 = function() {
  background(179, 234, 245);
 // conrtol bar
 fill(255, 217, 0);
rect(400,10,80,300);
fill(0, 0, 0);
text("MOVE UP",405,22);
text("up arrow",405,32);
text("MOVE DOWN",405,62);
text("down arrow",405,72);
text("MOVE LEFT",405,100);
text("left arrow",405,110);
text("MOVE RIGHT",405,130);
text("right arrow",405,140);
text("TO STOP",405,160);
text("press to keys",405,170);
//map 
 fill(255, 251, 3);
rect (94,10,42,14);
fill(3, 3, 0);
 text("start",103,21);
     fill(255, 251, 3);
   rect (349,341,42,14);
    fill(3, 3, 0);
     text("end",362,352);
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
    line(138,89,139,66);
    line(138,89,99,89);
    line(120,73,120,41);
    line(46,73,120,73);
    line(10,81,39,81);
    line(25,29,25,68);
    line(26,56,101,56);
    line(12,103,51,103);
    line(29,121,80,120);
    line(29,175,30,120);
    line(47,173,65,173);
    line(47,173,29,173);
    line(79,190,10,190);
    line(79,190,79,147);
    line(64,173,64,137);
    line(46,137,63,137);
    line(46,157,46,137);
//end of maze
    line(329,355,298,356);
    line(355,378,394,378);
    line(355,384,356,377);
    line(329,218,329,356);
    line(330,217,149,216);
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
    line(40,214,39,234);
    line(42,247,10,247);
    line(55,220,55,232);
    line(56,308,56,247);
    line(56,254,78,254);
    line(43,293,43,247);
    line(42,291,11,291);
    line(127,250,126,181);
    line(125,162,99,162);
   line(181,295,80,295);
   line(57,309,106,310);
   line(11,304,42,304); 
   line(57,320,106,321);
   line(57,331,106,332);
   line(44,304,44,388); 
};
};

var drawScene3 = function() {
    background(144, 240, 234);
// Draw the sun
noStroke();
fill(255, 140, 0);
ellipse(335, 66, 70, 70);

// Get images from library and remember in variables
var grass = getImage("cute/GrassBlock");
var tree = getImage("cute/TreeUgly");

// Draw the tree and grass once
var landscape = 0;
while(landscape<400){
    image(grass, landscape, 270);
    image(tree, landscape, 200);
    landscape+=101;

}

    currentScene = 3;
    fill(7, 14, 145);
    textSize(23);
    text("The kid was walking in the forest!", 10, 135);
    image(getImage("avatars/robot_male_2"), width/2, height/1.5);
   
};


var drawScene4 = function() {
    currentScene = 4;
    background(4, 7, 8);
    fill(167, 170, 209);
    textSize(39);
    text("The kid fell down a pit!", 10, 100);
    image(getImage("avatars/robot_male_2"), width/2, height/2);
};

var drawScene5 = function() {
    currentScene = 5;
     background(5, 5, 5);
    image(getImage("avatars/robot_male_1"),+177, +101,158, 123);
    text("The kid can't see anything and gets scared",10,100);
    
};

var drawScene6 = function() {
    currentScene = 6;
    background(189, 212, 217);
    fill(7, 14, 145);
    textSize(27);
    text("The kid have to escape before ", 10, 58);
    text("the dark comes and get eaten", 10, 81);
    text("by the monsters!", 10, 106);
    textSize(20);
    text("Make more keys and find the right key",10,143);
    text("Drag to make more keys", 10, 174);
    
    image(getImage("avatars/robot_male_3"), 21, 257);
    fill(71, 71, 71);
    rect(32, 257, 108, 15);
    rect(46, 197, 82, 60);
    
};


mouseDragged = function() {
    if (currentScene === 5) {
        image(getImage("avatars/aqualine-sapling"), mouseX-20, mouseY-20);
    }
    
};

draw = function() {
    if (currentScene === 4) {
        drawScene4();
    }
   
};
//gameover scene
var drawScene8 = function() {
    currentScene = 8;
background(220);
textSize(41);
for(var i =0; i<2; i++)

{  text("GAME OVER",i+97,36*i+52,319,111);
}

};
mouseClicked = function() {
    if (currentScene === 1) {
        drawMap1();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene4();
    } else if (currentScene === 4) {
        drawScene5();
    }  else if (currentScene === 5) {
        drawScene6();
    } else if (currentScene === 7) {
      drawScene8();
    }
 
};

drawScene1();
