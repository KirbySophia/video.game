background(222, 104, 104);
strokeWeight(3);

fill(20, 212, 222);
var lilly=  rect(63,1,10,10);
var lilly = {
 x:63,
 y:1
};

  var moveCharacter = function() {
    //Control Player 
    if (keyIsPressed) {
      if (keyCode === 38) { 
        lilly.y--;
        //lilly.Up();
      } else if (keyCode === 40) {
        lilly.y++;
      
      }
    }
  };
  var background1 = function() {
    //map
  fill(255, 251, 3);
  rect (93, 10, 42, 14);
  fill(3, 3, 0);
  text("start", 103, 21);
  fill(255, 251, 3);
  rect (315, 371, 42, 14);
  fill(3, 3, 0);
  text("end", 327, 383);
  //square
  line(89, 10, 393, 10);
  line(10, 10, 46, 10);
  line(10, 10, 10, 386);
  line(11, 386, 356, 386);
  line(393, 386, 395, 11);
  
  //horizental lines layer 1
  line(45,45,77,45);
  line(156,45,109,45);
  line(226,45,194,45);
  line(267,45,296,45);
  line(357,45,333,45);
  
  //horizental lines layer 2
  line(10,78,40,78);
  line(331,78,197,78);
  
  //horizental lines layer 3
  
    
  //end of maze

  
};
  
 moveCharacter();
    rect(lilly.x,lilly.y,10,10);
 background1(); 
