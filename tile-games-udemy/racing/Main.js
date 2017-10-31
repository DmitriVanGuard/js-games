let canvas, canvasContext;

window.onload = function() {
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	const framesPerSecond = 30;
	const framesUpdateInterval = 1000 / framesPerSecond;
	setInterval(updateAll, framesUpdateInterval);

	setupInput();

	trackLoadImages();
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
	drawTracks();
	drawCar();
}
