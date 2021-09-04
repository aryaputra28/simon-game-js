// MY SOLUTION 

var buttonColors = ["red","green","yellow","blue"];
var gamePattern = [];
var gameMulai = true;
var level = 1;

function gameStart() {
    $("body").css("background-color", "#011F3F");
    var choosenNumber = newSequence();
    gamePattern.push(buttonColors[choosenNumber]);
    console.log("pattern game = " + gamePattern);
    var audioPlay = new Audio("sounds/" + buttonColors[choosenNumber] +".mp3" );
    setTimeout(function(){ 
        $("#"+ buttonColors[choosenNumber]).fadeOut(50).fadeIn(50);
        audioPlay.play();
    }, 1000)
    $("h1").text("Level " + level);
    level++;
}

$(document).keydown(function () { 
    if (gameMulai) {
        gameStart();
        gameMulai = false;
       
    }
});

function newSequence() {
    var randomNumber = Math.floor(Math.random()*4);
    console.log("RANDOM NUMBER = " + randomNumber )
    return randomNumber;
}

function gameOver() {
    $(".badan").css("background-color","red");
    setTimeout(() => {
        $(".badan").css("background-color","#011F3F");
    }, 100);
    var wrongAudio = new Audio("sounds/wrong.mp3");
    wrongAudio.play();
    jawaban = false;
    gamePattern = [];
    colorListUser = [];
    gameMulai = true;
    level = 1;
    $(document).keydown(function () { 
        if (gameMulai) {
            gameStart();
            gameMulai = false;
           
        }
    });
}

var choosenColor;
var colorListUser = [];
var jawaban = true;
var i = 0;
$(".btn").click(function(e) {
    $("#"+ e.target.id).fadeOut(50).fadeIn(50);
    if (e.target.id == "green") {
        var greenAudio = new Audio("sounds/green.mp3");
        greenAudio.play();
        colorListUser.push(e.target.id);
        console.log("USER = " + colorListUser);
        if (colorListUser[i] != gamePattern[i]) {
            gameOver();
            console.log(i);
        } else {
            i++;
            console.log(i);
        }
    } else if (e.target.id == "red") {
        var redAudio = new Audio("sounds/red.mp3");
        redAudio.play();
        colorListUser.push(e.target.id);
        console.log("USER = " + colorListUser);
        if (colorListUser[i] != gamePattern[i]) {
            gameOver();
            console.log(i);
        } else {
            i++;
            console.log(i);
        }
    } else if (e.target.id == "yellow") {
        var yellowAudio = new Audio("sounds/yellow.mp3");
        yellowAudio.play();
        colorListUser.push(e.target.id);
        console.log("USER = " + colorListUser);
        if (colorListUser[i] != gamePattern[i]) {
            gameOver();
            console.log(i);
        } else {
            i++;
            console.log(i);
        }
    } else {
        var blueAudio = new Audio("sounds/blue.mp3");
        blueAudio.play();
        colorListUser.push(e.target.id);
        console.log("USER = " + colorListUser);
        if (colorListUser[i] != gamePattern[i]) {
            gameOver();
            console.log(i);
        } else {
            i++;
            console.log(i);
        }
    }
    if (i == gamePattern.length && jawaban) {
        colorListUser = [];
        gameStart();
        i = 0;
    } else if (jawaban == false) {
        jawaban = true;
        $("#level-title").text("Game Over, Press Any Key to  Restart");
    }
});

