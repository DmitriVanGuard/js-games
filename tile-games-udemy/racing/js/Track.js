const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_DRAW_WIDTH = TRACK_W - TRACK_GAP;
const TRACK_DRAW_HEIGHT = TRACK_H - TRACK_GAP;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

// prettier-ignore
const levelOne = [ 
										4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4,
										4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1,
										4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
										1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1,
										1, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 0, 0, 1,
										1, 0, 0, 1, 1, 1, 4, 1, 4, 4, 4, 1, 1, 1, 0, 0, 1, 0, 0, 1,
										1, 0, 0, 1, 1, 0, 1, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
										1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
										1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
										1, 0, 0, 0, 0, 0, 5, 0, 0, 1, 1, 0, 0, 5, 0, 0, 1, 0, 0, 1,
										1, 2, 2, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
										1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
										0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
										0, 3, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1,
										1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 4
									];
let trackGrid = [];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;

function returnTileTypeAtColRow(col, row) {
	if (col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) {
		const trackIndexUnderCoord = rowColToArrayIndex(col, row);
		return trackGrid[trackIndexUnderCoord];
	}
	return TRACK_WALL;
}

function carTrackHandling(whichCar) {
	const carTrackCol = Math.floor(whichCar.x / TRACK_W);
	const carTrackRow = Math.floor(whichCar.y / TRACK_H);
	const trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

	if (carTrackCol >= 0 && carTrackCol < TRACK_COLS && carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
		const tileHere = returnTileTypeAtColRow(carTrackCol, carTrackRow);
		if (tileHere == TRACK_GOAL) {
			alert(`${whichCar.name} wins!!!`);
			loadLevel(levelOne);
		} else if (tileHere != TRACK_ROAD) {
			whichCar.x -= Math.cos(whichCar.ang) * whichCar.speed;
			whichCar.y -= Math.sin(whichCar.ang) * whichCar.speed;
			whichCar.speed *= -0.5;
		} // end of track found
	} // end of valid col and row
}

function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {
	let arrayIndex = 0;
	let drawTileX = 0;
	let drawTileY = 0;
	for (let row = 0; row < TRACK_ROWS; row++) {
		for (let col = 0; col < TRACK_COLS; col++) {
			// const arrayIndex = rowColToArrayIndex(col, row);
			const tileKind = trackGrid[arrayIndex];
			const useImg = trackPics[tileKind];
			canvasContext.drawImage(useImg, drawTileX, drawTileY);
			arrayIndex++;
			drawTileX += TRACK_W;
		}
		drawTileX = 0;
		drawTileY += TRACK_H;
	}
}
