const carPic = document.createElement('img');
const roadPic = document.createElement('img'), wallPic = document.createElement('img');

let picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	if (picsToLoad === 0) startGame();
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = fileName;
}

function loadImages() {
	const imageList = [
		{ varName: carPic, theFile: 'player1car.png' },
		{ varName: roadPic, theFile: 'track_road.jpg' },
		{ varName: wallPic, theFile: 'track_wall.jpg' }
	];

	picsToLoad = imageList.length;

	imageList.forEach(img => beginLoadingImage(img.varName, img.theFile));
}
