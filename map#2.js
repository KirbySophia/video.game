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
      lilly.x++;
    } else if (keyIsPressed && keyCode === 37) {
      lilly.x--;
    }
    else {
     keyCode = 0;}
  //}
};
var background1 = function() {
  background(222, 104, 104);
  strokeWeight(3);
  
    //map
  fill(255, 251, 3);
  rect (46, 10, 42, 14);
  fill(3, 3, 0);
  text("start", 57, 21);
  fill(255, 251, 3);
  rect (43, 376, 42, 14);
  fill(3, 3, 0);
  text("end", 48, 387);
  //square
  line(48, 10, 393, 10);
  line(71, 10, 46, 10);
  line(10, 10, 10, 386);
  line(43, 390, 395, 391);
  line(395, 389, 395, 11);
  
  //horizental lines layer 1
  line(45,45,77,45);
  line(156,45,109,45);
  line(226,45,194,45);
  line(258,45,279,45);
  line(357,45,333,45);
  
  //horizental lines layer 2
  line(10,75,40, 75);
  line(331,75,197,75);
  
  //horizental lines layer 3
  line(131,105,79,105);
  line(228,105,283,105);
  line(333,105,357,105);
  
  //horizental lines layer 4
  line(44,135,104,135);
  line(286,135,330,135);
  line(360,135,391,135);
  
  //horizental lines layer 5
  line(13,165,40,165);
  line(107,165,132,165);
  line(195,165,227,165);
  line(357,165,334,165);
  
  //horizental lines layer 6
  line(43,195,76,195);
  line(109,195,154,195);
  line(196,195,227,195);
  line(312,195,332,195);
  line(361,195,391,195);
  
  //horizental lines layer 7
  line(74,225,103,225);
  line(133,225,193,225);
  line(284,225,308,225);
  line(335,225,358,225);
  
  //horizental lines layer 8
    line(42,255,193,255);
    line(231,255,309,255);

  //horizental lines layer 9
    line(77,281,133,281);
    line(196,281,230,281);
    line(286,281,332,281);
  
  //horizental lines layer 10
    line(13,308,40,308);
    line(78,308,197,308);
    line(231,308,281,308);
  
  //horizental lines layer 11
    line(42,333,136,333);
    line(204,333,228,333);
    line(268,333,332,333);

  //horizental lines layer 12
    line(42,355,157,355);
    line(191,355,228,355);
    line(312,355,358,355);
    
  //vertical lines layer 1
  line(42,106,42,164);
  line(42,197,42,307);
  line(42,356,42,386);
  
  //vertical lines layer 2
  line(77,46,77,104);
  line(77,167,77,194);
  line(77,311,77,332);
  
  //vertical lines layer 3
  line(106,79,106,104);
  line(106,167,106,253);
  
  //vertical lines layer 4
  line(134,46,134,75);
  line(134,106,134,164);
  line(134,257,134,279);
  
  //vertical lines layer 5
  line(157,47,157,194);
  line(157,282,157,354);
  
  //vertical lines layer 6
  line(194,13,194,42);
  line(194,76,194,136);
  line(194,226,194,280);
  
  //vertical lines layer 7
  line(230,135,230,255);
  line(230,283,230,353);
  
  //vertical lines layer 8
  line(257,46,257,73);
  line(257,108,257,227);
  line(257,257,257,281);
  line(257,358,257,387);
  
  //vertical lines layer 9
  line(283,106,283,224);
  line(283,282,283,330);
  line(283,358,283,390);
  
  //vertical lines layer 10
  line(310,12,310,106);
  line(310,167,310,194);
  line(310,227,310,253);
  line(310,283,310,308);
  line(310,335,310,354);
  
  //vertical lines layer 11
  line(333,136,333,164);
  line(333,196,333,225);
  line(333,255,333,280);
  line(333,307,333,331);
  
  //vertical lines layer 12
  line(358,46,358,134);
  line(358,167,358,194);
  line(358,167,358,194);
  line(358,228,358,352);
  
  //end of maze
};

function draw() {
  background1();
  if (keyIsPressed) { 
    moveCharacter();
  }
  showCharacter();
} 
