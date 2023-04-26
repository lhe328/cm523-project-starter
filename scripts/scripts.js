/* WRITE YOUR JS HERE... YOU MAY REQUIRE MORE THAN ONE JS FILE. IF SO SAVE IT SEPARATELY IN THE SCRIPTS DIRECTORY */

const startBtn = document.querySelector(".start-btn");
startBtn.addEventListener("click", function() {
    document.getElementById("bodypage").style = "display: grid;";
    document.querySelector(".welcome").style = "display: none;";
});

const menu1 = document.querySelector("#menu_bg");
const menu2 = document.querySelector("#menu_theme");
const menu3 = document.querySelector("#menu_message");
const menu4 = document.querySelector("#menu_stickers");

menu1.addEventListener("click", function() {
    document.querySelector(".options_bg").style = "display: flex;";
    document.querySelector(".options_theme").style = "display: none;";
    document.querySelector(".options_message").style = "display: none;";
    document.querySelector(".options_stickers").style = "display: none;";
});

menu2.addEventListener("click", function() {
    document.querySelector(".options_bg").style = "display: none;";
    document.querySelector(".options_theme").style = "display: flex;";
    document.querySelector(".options_message").style = "display: none;";
    document.querySelector(".options_stickers").style = "display: none;";
});

menu3.addEventListener("click", function() {
    document.querySelector(".options_bg").style = "display: none;";
    document.querySelector(".options_theme").style = "display: none;";
    document.querySelector(".options_message").style = "display: flex;";
    document.querySelector(".options_stickers").style = "display: none;";
});

menu4.addEventListener("click", function() {
    document.querySelector(".options_bg").style = "display: none;";
    document.querySelector(".options_theme").style = "display: none;";
    document.querySelector(".options_message").style = "display: none;";
    document.querySelector(".options_stickers").style = "display: flex;";
});

// background start

var background = {
    "background1": new Image(),
    "background2": new Image(),
    "background3": new Image(),
    "background4": new Image(),
    "background5": new Image(),
    "background6": new Image(),
};

background.background1.src = "images/background/bg_1.png";
background.background2.src = "images/background/bg_2.png";
background.background3.src = "images/background/bg_3.png";
background.background4.src = "images/background/bg_4.png";
background.background5.src = "images/background/bg_5.png";
background.background6.src = "images/background/bg_6.png";

var canvas = document.getElementById("myCanvas");
var context = canvas. getContext("2d");

var currentImage = null;

document.getElementById("b_1").addEventListener("click", function() {
    currentImage = background.background1;
    drawcurrentImage();
});

document.getElementById("b_2").addEventListener("click", function() {
    currentImage = background.background2;
    drawcurrentImage();
});

document.getElementById("b_3").addEventListener("click", function() {
    currentImage = background.background3;
    drawcurrentImage();
});

document.getElementById("b_4").addEventListener("click", function() {
    currentImage = background.background4;
    drawcurrentImage();
});

document.getElementById("b_5").addEventListener("click", function() {
    currentImage = background.background5;
    drawcurrentImage();
});

document.getElementById("b_6").addEventListener("click", function() {
    currentImage = background.background6;
    drawcurrentImage();
});

function drawcurrentImage() {
    context.clearRect(0, 0, 600, 400);
    context.drawImage(currentImage, 0, 0, 600, 400);
    context.drawImage(currentTheme, 0, 0, 600, 400);
    context.drawImage(currentSticker, 0, 0, 600, 400);
}


// theme start

var theme = {
    "theme1": new Image(),
    "theme2": new Image(),
    "theme3": new Image(),
    "theme4": new Image(),
    "theme5": new Image(),
    "theme6": new Image(),
};

theme.theme1.src = "images/themes/theme_1.png";
theme.theme2.src = "images/themes/theme_2.png";
theme.theme3.src = "images/themes/theme_3.png";
theme.theme4.src = "images/themes/theme_4.png";
theme.theme5.src = "images/themes/theme_5.png";
theme.theme6.src = "images/themes/theme_6.png";

var currentTheme = null;

document.getElementById("t_1").addEventListener("click", function() {
    currentTheme = theme.theme1;
    drawcurrentTheme();
});

document.getElementById("t_2").addEventListener("click", function() {
    currentTheme = theme.theme2;
    drawcurrentTheme();
});

document.getElementById("t_3").addEventListener("click", function() {
    currentTheme = theme.theme3;
    drawcurrentTheme();
});

document.getElementById("t_4").addEventListener("click", function() {
    currentTheme = theme.theme4;
    drawcurrentTheme();
});

document.getElementById("t_5").addEventListener("click", function() {
    currentTheme = theme.theme5;
    drawcurrentTheme();
});

document.getElementById("t_6").addEventListener("click", function() {
    currentTheme = theme.theme6;
    drawcurrentTheme();
});

function drawcurrentTheme() {
    context.clearRect(0, 0, 600, 400);
    context.drawImage(currentImage, 0, 0, 600, 400);
    context.drawImage(currentTheme, 0, 0, 600, 400);
    context.drawImage(currentSticker, 0, 0, 600, 400);
}

// sticker start

var sticker = {
    "sticker1": new Image(),
    "sticker2": new Image(),
    "sticker3": new Image(),
    "sticker4": new Image(),
    "sticker5": new Image(),
    "sticker6": new Image(),
    "sticker7": new Image(),
    "sticker8": new Image(),
    "sticker9": new Image(),
};

sticker.sticker1.src = "images/stickers/sticker_1.png";
sticker.sticker2.src = "images/stickers/sticker_2.png";
sticker.sticker3.src = "images/stickers/sticker_3.png";
sticker.sticker4.src = "images/stickers/sticker_4.png";
sticker.sticker5.src = "images/stickers/sticker_5.png";
sticker.sticker6.src = "images/stickers/sticker_6.png";
sticker.sticker7.src = "images/stickers/sticker_7.png";
sticker.sticker8.src = "images/stickers/sticker_8.png";
sticker.sticker9.src = "images/stickers/sticker_9.png";

var currentSticker = null;

document.getElementById("s_1").addEventListener("click", function() {
    currentSticker = sticker.sticker1;
    drawcurrentSticker();
});

document.getElementById("s_2").addEventListener("click", function() {
    currentSticker = sticker.sticker2;
    drawcurrentSticker();
});

document.getElementById("s_3").addEventListener("click", function() {
    currentSticker = sticker.sticker3;
    drawcurrentSticker();
});

document.getElementById("s_4").addEventListener("click", function() {
    currentSticker = sticker.sticker4;
    drawcurrentSticker();
});

document.getElementById("s_5").addEventListener("click", function() {
    currentSticker = sticker.sticker5;
    drawcurrentSticker();
});

document.getElementById("s_6").addEventListener("click", function() {
    currentSticker = sticker.sticker6;
    drawcurrentSticker();
});

document.getElementById("s_7").addEventListener("click", function() {
    currentSticker = sticker.sticker7;
    drawcurrentSticker();
});

document.getElementById("s_8").addEventListener("click", function() {
    currentSticker = sticker.sticker8;
    drawcurrentSticker();
});

document.getElementById("s_9").addEventListener("click", function() {
    currentSticker = sticker.sticker9;
    drawcurrentSticker();
});

function drawcurrentSticker() {
    context.clearRect(0, 0, 600, 400);
    context.drawImage(currentImage, 0, 0, 600, 400);
    context.drawImage(currentTheme, 0, 0, 600, 400);
    context.drawImage(currentSticker, 0, 0, 600, 400);
}


// message start 

function addTextToCanvas(text) {
    context.clearRect(0, 0, 600, 400);
    context.drawImage(currentImage, 0, 0, 600, 400);
    context.drawImage(currentTheme, 0, 0, 600, 400);
    context.drawImage(currentSticker, 0, 0, 600, 400);
    context.font = '30px Arial Rounded MT Bold';
    context.fillText(text, 430, 130, 600, 400);
}

// save postcard

document.getElementById("save-big-btn").addEventListener("click", function(saveCanvas){
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'postcard.png'
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

});

// send postcard

document.getElementById("send-big-btn").addEventListener("click", function(sendEmail) {
    const dataUrl = canvas.toDataURL();
    const mailtoLink = `mailto:recipient@example.com?subject=Someone send you a postcard&attachment=${encodeURIComponent(dataUrl)}`;
        window.open(mailtoLink);
});
