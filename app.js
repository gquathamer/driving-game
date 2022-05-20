var data = {
  direction: 'east'
}

var carContainer = document.querySelector('.car-container');
var carImage = document.querySelector('img');

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
  }
})
