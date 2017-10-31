let carX = 75;
let carY = 75;
let carAng = 0;
let carSpeed = 0;

const GROUNDSPEED_DECAY_MULT = 0.97;
const DRIVE_POWER = 0.3;
const REVERSE_POWER = 0.1;
const TURN_RATE = 0.07;

function carReset() {
	for (let row = 0; row < TRACK_ROWS; row++) {
		for (let col = 0; col < TRACK_COLS; col++) {
			const arrayIndex = rowColToArrayIndex(col, row);
			if (trackGrid[arrayIndex] === TRACK_PLAYERSTART) {
				trackGrid[arrayIndex] = TRACK_ROAD;
				carAng = -Math.PI / 2;
				carX = col * TRACK_W;
				carY = row * TRACK_H;
			}
		}
	}
}

function carMove() {
	carSpeed *= GROUNDSPEED_DECAY_MULT;

	if (keyHeld_Gas) carSpeed += DRIVE_POWER;
	if (keyHeld_Reverse) carSpeed -= REVERSE_POWER;
	if (keyHeld_TurnLeft) carAng -= TURN_RATE;
	if (keyHeld_TurnRight) carAng += TURN_RATE;

	carX += Math.cos(carAng) * carSpeed;
	carY += Math.sin(carAng) * carSpeed;
}

function drawCar() {
	drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
}
