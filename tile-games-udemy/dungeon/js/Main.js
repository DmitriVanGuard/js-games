let canvas, ctx;

const Dungeon = new DungeonClass();

window.onload = () => {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	drawRect(0, 0, canvas.width, canvas.height, 'black');

	loadImages();
};

function startGame() {
	const FPS = 30;
	const updateRate = 1000 / FPS;

	setInterval(updateAll, updateRate);
}

function updateAll() {
	Dungeon.draw();
}
