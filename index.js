for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("click", handleClick);
}




function handleClick(event) {
    var sound = "";
    var buttonClick = this.innerHTML;
    switch (buttonClick) {
        case "w":
            sound = "/sounds/crash.mp3";
            break;
        case "a":
            sound = "/sounds/kick-bass.mp3";
            break;
        case "s":
            sound = "/sounds/snare.mp3";
            break;
        case "d":
            sound = "/sounds/tom-1.mp3";
            break;
        case "j":
            sound = "/sounds/tom-2.mp3";
            break;
        case "k":
            sound = "/sounds/tom-3.mp3";
            break;
        case "l":
            sound = "/sounds/tom-4.mp3";
            break;
        default:
            break;
    }
    var audio = new Audio(sound);
    audio.play();
    buttonAnimation(buttonClick);
}

for (let index = 0; index < document.querySelectorAll(".drum").length; index++) {

    document.querySelectorAll(".drum")[index].addEventListener("keypress", handleClick1);
    buttonAnimation(event);
}

function handleClick1(event) {
    var sound = "";
    var buttonClick = event.key;
    switch (buttonClick) {
        case "z":
            sound = "/sounds/crash.mp3";
            break;
        case "x":
            sound = "/sounds/kick-bass.mp3";
            break;
        case "c":
            sound = "/sounds/snare.mp3";
            break;
        case "v":
            sound = "/sounds/tom-1.mp3";
            break;
        case "b":
            sound = "/sounds/tom-2.mp3";
            break;
        case "n":
            sound = "/sounds/tom-3.mp3";
            break;
        case "m":
            sound = "/sounds/tom-4.mp3";
            break;
        default:
            break;
    }
    var audio = new Audio(sound);
    audio.play();
    buttonAnimation(buttonClick);
}

function buttonAnimation(event) {
    var activeButton = document.querySelector("." + event);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}