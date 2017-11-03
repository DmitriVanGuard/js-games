let canvas, ctx;

// prettier-ignore
const Dungeon = new DungeonClass(),
			Player = new PlayerClass();

window.onload = () => {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	drawRect(0, 0, canvas.width, canvas.height, 'black');

	loadImages();
};

function startGame() {
	const FPS = 30;
	const updateRate = 1000 / FPS;

	Dungeon.setLevel(levelOne);
	Player.reset();

	setInterval(updateAll, updateRate);
}

function updateAll() {
	Dungeon.draw();
	Player.move();
	Player.draw();
}

