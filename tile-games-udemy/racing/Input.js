const KEY_LEFT_ARROW = 37, KEY_UP_ARROW = 38, KEY_RIGHT_ARROW = 39, KEY_DOWN_ARROW = 40;

let keyHeld_Gas = false;
let keyHeld_Reverse = false;
let keyHeld_TurnLeft = false;
let keyHeld_TurnRight = false;

let mouseX = 0, mouseY = 0, trackIndexUnderMouse = 0;

function setupInput() {
	canvas.addEventListener('mousemove', updateMousePos);

	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);
}

function updateMousePos(evt) {
	const rect = canvas.getBoundingClientRect();
	const htmlRoot = document.documentElement;

	mouseX = evt.clientX - rect.left - htmlRoot.scrollLeft;
	mouseY = evt.clientY - rect.top - htmlRoot.scrollTop;
}

function keyPressed(evt) {
	switch (evt.keyCode) {
		case KEY_LEFT_ARROW:
			keyHeld_TurnLeft = true;
			break;
		case KEY_RIGHT_ARROW:
			keyHeld_TurnRight = true;
			break;
		case KEY_UP_ARROW:
			keyHeld_Gas = true;
			break;
		case KEY_DOWN_ARROW:
			console.log(evt.keyCode);
			keyHeld_Reverse = true;
			break;
	}
}
function keyReleased(evt) {
	switch (evt.keyCode) {
		case KEY_LEFT_ARROW:
			keyHeld_TurnLeft = false;
			break;
		case KEY_RIGHT_ARROW:
			keyHeld_TurnRight = false;
			break;
		case KEY_UP_ARROW:
			keyHeld_Gas = false;
			break;
		case KEY_DOWN_ARROW:
			keyHeld_Reverse = false;
			break;
	}
}
