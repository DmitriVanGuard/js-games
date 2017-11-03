const [TILE_W, TILE_H] = [40, 40];
// prettier-ignore
const TILE_COLS = 20,
			TILE_ROWS = 15;

// prettier-ignore
const levelOne =
			[
				2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2,
				2, 0, 0, 4, 0, 0, 2, 0, 0, 4, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2,
				2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 4, 0, 2,
				2, 2, 2, 2, 3, 2, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2,
				2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 4, 2, 2, 3, 2, 2,
				2, 0, 0, 0, 0, 0, {keyId: 0}, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2,
				2, 0, 0, 0, 0, 0, 0, 0, 0, 0, {doorId: 0}, 0, 0, 0, 0, 0, 0, 0, 0, 2,
				2, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
				2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2,
				2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2,
				2, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 5, 0, 0, 0, 2,
				2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2,
				2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2,
				2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
			];

// prettier-ignore
const LEVEL_BLOCK_GROUND = 0,
			LEVEL_BLOCK_START = 1,
			LEVEL_BLOCK_WALL = 2,
			LEVEL_BLOCK_DOOR = 3,
			LEVEL_BLOCK_KEY = 4,
			LEVEL_BLOCK_END = 5;

function DungeonClass() {
	this.currentLevel = null;

	this.setLevel = function(level) {
		this.currentLevel = level;
		this.drawLevel = level.concat();
	};

	this.draw = function() {
		let currentTileX = 0;
		let currentTileY = 0;
		let currentArrayIndex = 0;

		for (let row = 0; row < TILE_ROWS; row++) {
			for (let col = 0; col < TILE_COLS; col++) {
				const currentTile = this.drawLevel[currentArrayIndex];
				let currentTileImage;
				if (currentTile.keyId !== undefined) {
					currentTileImage = LEVEL_BLOCK_IMAGES[LEVEL_BLOCK_KEY];
				} else if (currentTile.doorId !== undefined) {
					currentTileImage = LEVEL_BLOCK_IMAGES[LEVEL_BLOCK_DOOR];
				} else {
					currentTileImage = LEVEL_BLOCK_IMAGES[currentTile];
				}

				ctx.drawImage(currentTileImage, currentTileX, currentTileY);
				// drawRect(currentTileX, currentTileY, currentTileX + TILE_W, currentTileY + TILE_H, 'red');
				currentTileX += TILE_W;
				currentArrayIndex++;
			}
			currentTileX = 0;
			currentTileY += TILE_H;
		}
	};

	this.reset = function() {
		this.drawLevel = this.currentLevel;
	};
}
