var currentScene;
var bg;
var createCanvas;

var drawButton = function() {
    fill(81, 166, 31);
    rect(340, 10, 50, 25);
    fill(255, 255, 255);
    textSize(16);
    text("NEXT", 344, 29);
}; 
var titleScene = function() {
    currentScene = 0;
      background(38, 25, 25);
    textSize(46);
    for(var i =0; i<8; i++){
        text("POLYBIUS",i+97,43*i+22,309,111);

}
};
var drawScene1 = function() {
    currentScene = 1;
    background(108, 146, 171);
    fill(0, 85, 255);
    textSize(26);
    text("The kid in the maze", 15, height/2);
};

var drawScene2 = function() {
 var setup = function() {
    bg = loadImage("6-vector-game-backgrounds-8003_imgs_8003_2.png");
  createCanvas(720, 400); 
  };
    currentScene = 2;
    fill(7, 14, 145);
    textSize(23);
    text("The kid was walking at the forest!", 10, 100);
    image(getImage("avatars/robot_male_2"), width/2, height/2);
   
};

var drawScene3 = function() {
    currentScene = 3;
    background(4, 7, 8);
    fill(167, 170, 209);
    textSize(39);
    text("The kid fell down a pit!", 10, 100);
    image(getImage("avatars/robot_male_2"), width/2, height/2);
};

var drawScene4 = function() {
    currentScene = 4;
     background(5, 5, 5);
    image(getImage("avatars/robot_male_1"),+177, +101,158, 123);
    text("The kid can't see anything and gets scared",10,100);
    
};

var drawScene5 = function() {
    currentScene = 5;
    background(189, 212, 217);
    fill(7, 14, 145);
    textSize(39);
    text("Thd kid have to escape befor the dark comes and get eaten by the monsters!", 10, 47);
    text("make more keys and find the right key",15,47);
    textSize(17);
    text("Drag to make more keys", 10, 78);
    
    image(getImage("avatars/robot_male_3"), 21, 183);
    fill(71, 71, 71);
    rect(32, 185, 108, 15);
    rect(46, 126, 82, 60);
    
    image(getImage("cute/Key"), 195, 250);
};

mouseDragged = function() {
    if (currentScene === 5) {
        image(getImage("avatars/aqualine-sapling"), mouseX-20, mouseY-20);
    }
    drawButton();
};

draw = function() {
    if (currentScene === 4) {
        drawScene4();
    }
    drawButton();
};

mouseClicked = function() {
    if (currentScene === 0) {
        drawScene1();
    } else if (currentScene === 1) {
        drawScene2();
    } else if (currentScene === 2) {
        drawScene3();
    } else if (currentScene === 3) {
        drawScene4();
    }  else if (currentScene === 4) {
        drawScene5();
    } else if (currentScene === 5) {
        drawScene1();
    }
    drawButton();
};

drawScene1();
drawButton();
