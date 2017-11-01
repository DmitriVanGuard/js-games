const carPic = document.createElement('img');
const otherCarPic = document.createElement('img');

const trackPics = [];

let picsToLoad = 0;

function loadImageForTrackCode(trackCode, fileName) {
	trackPics[trackCode] = document.createElement('img');
	beginLoadingImage(trackPics[trackCode], fileName);
}

function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	if (picsToLoad === 0) startGame();
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = `images/${fileName}`;
}

function loadImages() {
	const imageList = [
		{ varName: carPic, theFile: 'player1car.png' },
		{ varName: otherCarPic, theFile: 'player2car.png' },
		{ trackType: TRACK_ROAD, theFile: 'track_road.jpg' },
		{ trackType: TRACK_GOAL, theFile: 'track_goal.jpg' },
		{ trackType: TRACK_TREE, theFile: 'track_tree.jpg' },
		{ trackType: TRACK_FLAG, theFile: 'track_flag.jpg' },
		{ trackType: TRACK_WALL, theFile: 'track_wall.jpg' }
	];

	picsToLoad = imageList.length;

	imageList.forEach(img => {
		if (img.varName != undefined) {
			beginLoadingImage(img.varName, img.theFile);
		} else {
			loadImageForTrackCode(img.trackType, img.theFile);
		}
	});
}
