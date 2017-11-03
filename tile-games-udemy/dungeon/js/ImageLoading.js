const LEVEL_BLOCK_IMAGES = [];
let picsToLoad = 0;

const playerPic = document.createElement('img');

function loadImages() {
	const imageList = [
		{ file: 'hero.png', img: playerPic },
		{ file: 'level_ground.png', tileType: LEVEL_BLOCK_GROUND },
		{ file: 'level_wall.png', tileType: LEVEL_BLOCK_WALL },
		{ file: 'level_key.png', tileType: LEVEL_BLOCK_KEY },
		{ file: 'level_door.png', tileType: LEVEL_BLOCK_DOOR },
		{ file: 'level_end.png', tileType: LEVEL_BLOCK_END }
	];

	picsToLoad = imageList.length;

	imageList.forEach(
		pic =>
			pic.tileType != undefined ? loadLevelBlockTileImages(pic.tileType, pic.file) : setupImage(pic.img, pic.file)
	);
}

function loadLevelBlockTileImages(type, file) {
	LEVEL_BLOCK_IMAGES[type] = document.createElement('img');
	setupImage(LEVEL_BLOCK_IMAGES[type], file);
}

function setupImage(pic, file) {
	pic.src = 'img/' + file;
	pic.onload = countLoadedImages;
}

function countLoadedImages() {
	picsToLoad--;
	if (picsToLoad === 0) startGame();
}
