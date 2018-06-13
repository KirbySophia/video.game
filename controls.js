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
