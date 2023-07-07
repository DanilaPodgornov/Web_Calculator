"use strict";

let argument1;
let argument2;
let result;
let currentOperation;

let click = new Audio("audio/click.mp3")
click.volume = 0.5;

function clearDisplay() {

    document.getElementById("display").innerHTML = "0";
    document.getElementById("AC").innerHTML = "AC";

    click.play();

}


function setNumber(i) {

    let number = document.getElementById("display");

    if (number.textContent == "0") {
    number.innerHTML = i;
    } else {
    number.innerHTML += i;
    }

    document.getElementById("AC").innerHTML = "C";

    click.play();

}

function setPoint() {

    let number = document.getElementById("display");

    if (!number.textContent.includes(".")) {
        number.innerHTML += ".";
    }

    click.play();

}

function setOperation(operation) {

    currentOperation = operation;
    let number = document.getElementById("display");
    argument1 = parseFloat(number.textContent);
    number.innerHTML = "0";

    document.getElementById(currentOperation).style = "color: #F1A33B; background: #FFFFFF";

    click.play();

}

function equal() {

    let number = document.getElementById("display");

    argument2 = parseFloat(number.textContent);

    if (currentOperation == "division") {
        result = argument1 / argument2;
    } else if (currentOperation == "multiplication") {
        result = argument1 * argument2;
    } else if (currentOperation == "subtraction") {
        result = argument1 - argument2;
    } else if (currentOperation == "addition") {
        result = argument1 + argument2;
    }

    number.innerHTML = result;

    document.getElementById(currentOperation).style = "color: #FFFFFF; background: #F1A33B";

    click.play();

}