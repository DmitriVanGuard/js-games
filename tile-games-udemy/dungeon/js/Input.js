// prettier-ignore
const KEY_LEFT_ARROW = 37,
			KEY_UP_ARROW = 38,
			KEY_RIGHT_ARROW = 39,
			KEY_DOWN_ARROW = 40;
// prettier-ignore
let keyHeld_UP = false,
		keyHeld_DOWN = false,
		keyHeld_LEFT = false,
		keyHeld_RIGHT = false;

let keyPressFlag = false;

document.addEventListener('keydown', handleKey);
document.addEventListener('keyup', handleKey);

function handleKey(event) {
	event.type === 'keydown' ? (keyPressFlag = true) : (keyPressFlag = false);

	switch (event.which) {
		case KEY_UP_ARROW:
			keyHeld_UP = keyPressFlag;
			break;
		case KEY_DOWN_ARROW:
			keyHeld_DOWN = keyPressFlag;
			break;
		case KEY_LEFT_ARROW:
			keyHeld_LEFT = keyPressFlag;
			break;
		case KEY_RIGHT_ARROW:
			keyHeld_RIGHT = keyPressFlag;
			break;
	}
}
