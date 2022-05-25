var data = {
  direction: 'east',
  positionX: 0,
  positionY: 0,
  started: false,
}

var carContainer = document.querySelector('.car-container');
var carImage = document.querySelector('img');

var intervalID;

function startCar() {
  intervalID = setInterval(function () {
    if (data.direction === 'east') {
      var xLocation = data.positionX + 5;
      carContainer.style.left = (xLocation.toString() + 'px');
      data.positionX += 5;
    } else if (data.direction === 'west') {
      var xLocation = data.positionX - 5;
      carContainer.style.left = (xLocation.toString() + 'px');
      data.positionX -= 5;
    } else if (data.direction === 'north') {
      var yLocation = data.positionY - 5;
      carContainer.style.top = (yLocation.toString() + 'px');
      data.positionY -= 5;
    } else if (data.direction === 'south') {
      var yLocation = data.positionY + 5;
      carContainer.style.top = (yLocation.toString() + 'px');
      data.positionY += 5;
    }
  }, 16);
}

function stopCar() {
  clearInterval(intervalID);
}

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 37) {
    carImage.className = 'car-west';
    data.direction = 'west';
  } else if (event.keyCode === 38) {
    carImage.className = 'car-north';
    data.direction = 'north';
  } else if (event.keyCode === 39) {
    carImage.className = 'car-east';
    data.direction = 'east';
  } else if (event.keyCode === 40) {
    carImage.className = 'car-south';
    data.direction = 'south';
  } else if (event.keyCode === 32) {
    if (data.started === false) {
      data.started = true;
      startCar();
    } else {
      data.started = false;
      stopCar()
    }
  }
})
