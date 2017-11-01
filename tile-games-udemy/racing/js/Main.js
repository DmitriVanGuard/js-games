let canvas, canvasContext;

const blueCar = new carClass();
const greenCar = new carClass();

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	colorRect(0, 0, canvas.width, canvas.height, 'black');
	colorText('Loading iamges', canvas.width / 2, canvas.height / 2, 'red');

	loadImages();
};

function startGame() {
	const framesPerSecond = 30;
	const framesUpdateInterval = 1000 / framesPerSecond;
	setInterval(updateAll, framesUpdateInterval);

	setupInput();

	loadLevel();
}

function loadLevel() {
	trackGrid = levelOne.concat();

	greenCar.reset(otherCarPic, 'Green');
	blueCar.reset(carPic, 'Blue');
}

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	blueCar.move();
	greenCar.move();
}

function drawAll() {
	drawTracks();
	blueCar.draw();
	greenCar.draw();
}
