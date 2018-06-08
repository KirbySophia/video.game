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
  rect (94, 10, 42, 14);
  fill(3, 3, 0);
  text("start", 103, 21);
  fill(255, 251, 3);
  rect (349, 341, 42, 14);
  fill(3, 3, 0);
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
  line(46, 42, 205, 42);
  line(89, 25, 141, 25);
  line(140, 26, 140, 11);
  line(205, 25, 163, 25);
  line(239, 25, 368, 25);
  line(239, 25, 239, 66);
  line(138, 66, 239, 66);
  line(138, 89, 138, 66);
  line(138, 89, 76, 89);
  line(120, 68, 120, 41);
  line(80, 68, 120, 67);

  //end of maze

  line(392, 357, 328, 357);
  line(355, 378, 394, 378);
  line(355, 384, 355, 377);
  line(329, 218, 329, 356);
  line(330, 217, 146, 216);
  line(350, 200, 350, 357);
  line(350, 199, 174, 199);
  line(148, 218, 146, 181);
  line(174, 161, 174, 198);
  line(125, 162, 174, 162);
  line(144, 181, 108, 181);
  line(126, 163, 126, 133);
  line(107, 180, 107, 132);
};

function draw() {
  background1();
  if (keyIsPressed) { 
    moveCharacter();
  }
  showCharacter();
} 

