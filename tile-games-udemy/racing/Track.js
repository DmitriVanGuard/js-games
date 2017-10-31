const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 2;
const TRACK_DRAW_WIDTH = TRACK_W - TRACK_GAP;
const TRACK_DRAW_HEIGHT = TRACK_H - TRACK_GAP;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

// prettier-ignore
const trackGrid = [ 
										1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
										1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
										1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
										1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
										1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1,
										1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1,
										1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
										1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1,
										1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
										1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
										1, 0, 2, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
										1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1,
										1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
										1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
										1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
									];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;

function isWallAtColRow(col, row) {
	if (col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) {
		const trackIndexUnderCoord = rowColToArrayIndex(col, row);
		return trackGrid[trackIndexUnderCoord] === 1;
	}
	return false;
}

function carTrackHandling() {
	const carTrackCol = Math.floor(carX / TRACK_W);
	const carTrackRow = Math.floor(carY / TRACK_H);
	const trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

	if (carTrackCol >= 0 && carTrackCol < TRACK_COLS && carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {
		if (isWallAtColRow(carTrackCol, carTrackRow)) {
			carX -= Math.cos(carAng) * carSpeed;
			carY -= Math.sin(carAng) * carSpeed;
			carSpeed *= -0.5;
		} // end of track found
	} // end of valid col and row
}

function rowColToArrayIndex(col, row) {
	return col + TRACK_COLS * row;
}

function drawTracks() {
	for (let row = 0; row < TRACK_ROWS; row++) {
		for (let col = 0; col < TRACK_COLS; col++) {
			const arrayIndex = rowColToArrayIndex(col, row);
			if (trackGrid[arrayIndex] === TRACK_WALL) {
				canvasContext.drawImage(wallPic, TRACK_W * col, TRACK_H * row);
			} else if (trackGrid[arrayIndex] === TRACK_ROAD) {
				canvasContext.drawImage(roadPic, TRACK_W * col, TRACK_H * row);
			}
		}
	}
}
