var data = {
  direction: 'east',
  positionX: 0,
  positionY: 0,
}

var carContainer = document.querySelector('.car-container');
var carImage = document.querySelector('img');

data.positionX = carContainer.left;
data.positionY = carContainer.top;

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
    var num = 5;
    var interval = setInterval(function () {
      carContainer.style.left = (num.toString() + 'px');
      data.positionX = carContainer.left;
      carContainer.style.top = (num.toString() + 'px');
      data.positionY = carContainer.top;
      num++;
    }, 16);
  }
})
