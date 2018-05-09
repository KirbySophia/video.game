var currentScene;

var drawButton = function() {
    fill(81, 166, 31);
    rect(340, 10, 50, 25);
    fill(255, 255, 255);
    textSize(16);
    text("NEXT", 344, 29);
}; 
var titleScene = function() {
    currentScene = 0;
    background(108, 146, 171);
    fill(0, 85, 255);
    textSize(26);
    text("The Story of the kid in the maze", 15, height/2);
};
var drawScene1 = function() {
    currentScene = 1;
    background(108, 146, 171);
    fill(0, 85, 255);
    textSize(26);
    text("The Story of the kid in the maze", 15, height/2);
};

var drawScene2 = function() {
    currentScene = 2;
    background(129, 232, 25);
    fill(7, 14, 145);
    textSize(23);
    text("the kid was walking at the forest!", 10, 100);
    image(getImage("avatars/robot_male_2"), width/2, height/2);
   
};

var drawScene3 = function() {
    currentScene = 3;
    background(4, 7, 8);
    fill(167, 170, 209);
    textSize(39);
    text("He fell down a pit!", 10, 100);
    image(getImage("avatars/robot_male_2"), width/2, height/2);
};

var drawScene4 = function() {
    currentScene = 4;
    
    // Based on https://www.khanacademy.org/cs/drums/6586586242744320
    background(194, 255, 222);
    
    
    
    // face
    image(getImage("avatars/robot_male_1"),+177, +101,158, 123);
    
    
};

var drawScene5 = function() {
    currentScene = 5;
    background(189, 212, 217);
    fill(7, 14, 145);
    textSize(39);
    text("he have to escape befor the dar comes and get eaten!", 10, 47);
    textSize(17);
    text("Drag to make more gems", 10, 78);
    
    image(getImage("avatars/robot_male_3"), 21, 183);
    fill(71, 71, 71);
    rect(32, 185, 108, 15);
    rect(46, 126, 82, 60);
    
    image(getImage("cute/GemOrange"), 195, 250);
};

mouseDragged = function() {
    if (currentScene === 5) {
        image(getImage("cute/GemOrange"), mouseX-20, mouseY-20);
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
    else if (currentScene === 1) {
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
