//Travis Smith
//https://github.com/bently118/WebProjects/tree/master/TrafficLight

const redColorOff = "#4d0000";
const yellowColorOff = "#4d4d00";
const greenColorOff = "#0f3d0f";
const redColorOn = "red";
const yellowColorOn = "yellow";
const greenColorOn = "#00ff00";
let counter = 0;
let duration = 1000;

function updateLight(red, yellow, green) {
  document.getElementById("red-light").style.backgroundColor = red;
  document.getElementById("yellow-light").style.backgroundColor = yellow;
  document.getElementById("green-light").style.backgroundColor = green;
}

function turnRedOn() {
  updateLight(redColorOn, yellowColorOff, greenColorOff);
  duration = 3000;
}

function turnYellowOn() {
  updateLight(redColorOff, yellowColorOn, greenColorOff);
  duration = 1000;
}

function turnGreenOn() {
  updateLight(redColorOff, yellowColorOff, greenColorOn);
  duration = 5000;
}

function runStopLight() {
  let color = counter % 3;

  switch (color) {
    case 0:
      turnGreenOn();
      break;
    case 1:
      turnYellowOn();
      break;
    case 2:
      turnRedOn();
      break;
  }
  counter++;
  setTimeout(runStopLight, duration);
}

setTimeout(runStopLight, duration);
