let canvas, canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	const framesPerSecond = 30;
	const framesUpdateInterval = 1000 / framesPerSecond;
	setInterval(updateAll, framesUpdateInterval);

	setupInput();

	carImageLoad();
	carReset();
};

function updateAll() {
	moveAll();
	drawAll();
}

function moveAll() {
	carMove();
	carTrackHandling();
}

function drawAll() {
	clearScreen();
	drawCar();
	drawTracks();
}

function clearScreen() {
	colorRect(0, 0, canvas.width, canvas.height, 'black'); // clear screen
}