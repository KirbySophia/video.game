function setup() {
  createCanvas(400, 400);
};
var lilly= { 
  y:
10, 
  x:
10
  }

var showCharacter = function() {
  rect(lilly.x, lilly.y, 10, 10);
}

var moveCharacter = function() {
  //Control Player 
 // if (keyIsPressed) {
    if (keyIsPressed &&keyCode === 38) { 
      lilly.y--;
      //lilly.Up();
    } else if (keyIsPressed && keyCode === 40) {
      lilly.y++;
    } else if (keyIsPressed && keyCode=== 39) {
      lilly.x--;
    } else if (keyIsPressed && keyCode === 37) {
      lilly.x++;
    }
    else {
     keyCode = 0;}
  //}
};
var background1 = function() {
  background(179, 234, 245);
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
      
//brushes 
noStroke();
fill(63, 140, 54);
rect(240,26,138,41);
rect(11,305,32,81);
rect(101,90,39,72);
rect(59,333,45,53);
rect(127,216,23,-35);


function draw() {
  background1();
  if (keyIsPressed) { 
    moveCharacter();
  }
  showCharacter();
} 

