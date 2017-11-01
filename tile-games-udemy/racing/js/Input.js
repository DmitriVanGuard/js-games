const KEY_LEFT_ARROW = 37, KEY_UP_ARROW = 38, KEY_RIGHT_ARROW = 39, KEY_DOWN_ARROW = 40;
const KEY_A = 65, KEY_W = 87, KEY_D = 68, KEY_S = 83;

let mouseX = 0, mouseY = 0, trackIndexUnderMouse = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	greenCar.setupInput(KEY_W, KEY_D, KEY_S, KEY_A);
	blueCar.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
}

function updateMousePos(evt) {
	const rect = canvas.getBoundingClientRect();
	const htmlRoot = document.documentElement;

	mouseX = evt.clientX - rect.left - htmlRoot.scrollLeft;
	mouseY = evt.clientY - rect.top - htmlRoot.scrollTop;
}

function keySet(whichCar, evt, setTo) {
	switch (evt.keyCode) {
		case whichCar.controlKeyLeft:
			whichCar.keyHeld_TurnLeft = setTo;
			break;
		case whichCar.controlKeyRight:
			whichCar.keyHeld_TurnRight = setTo;
			break;
		case whichCar.controlKeyUp:
			whichCar.keyHeld_Gas = setTo;
			break;
		case whichCar.controlKeyDown:
			whichCar.keyHeld_Reverse = setTo;
			break;
	}
}

function keyPressed(evt) {
	keySet(blueCar, evt, true);
	keySet(greenCar, evt, true);
}
function keyReleased(evt) {
	keySet(blueCar, evt, false);
	keySet(greenCar, evt, false);
}
