const MAX_VELOCITY = 3;

function PlayerClass() {
	this.x = 0;
	this.y = 0;
	this.keys = [];

	this.keyCollect = function(keyId) {
		this.keys.push(keyId);
	};

	this.draw = function() {
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.drawImage(playerPic, -playerPic.width / 2, -playerPic.height / 2);
		ctx.restore();
	};

	this.move = function() {
		if (keyHeld_UP) this.y += MAX_VELOCITY * -1;
		if (keyHeld_LEFT) this.x += MAX_VELOCITY * -1;
		if (keyHeld_DOWN) this.y += MAX_VELOCITY;
		if (keyHeld_RIGHT) this.x += MAX_VELOCITY;
		if (this.checkCollisionWithSolid()) {
			if (keyHeld_UP) this.y -= MAX_VELOCITY * -1;
			if (keyHeld_LEFT) this.x -= MAX_VELOCITY * -1;
			if (keyHeld_DOWN) this.y -= MAX_VELOCITY;
			if (keyHeld_RIGHT) this.x -= MAX_VELOCITY;
		}
	};

	this.checkCollisionWithSolid = function() {
		levelTileIndex = Math.floor(this.y / TILE_W) * TILE_COLS + Math.floor(this.x / TILE_W);
		levelTileType = Dungeon.drawLevel[levelTileIndex];

		if (levelTileType.keyId !== undefined) {
			this.collectKey(levelTileType.keyId, levelTileIndex);
		} else if (levelTileType.doorId !== undefined && this.keys.includes(levelTileType.doorId)) {
			this.openDoor(levelTileIndex);
		} else if (levelTileType != LEVEL_BLOCK_GROUND) {
			return true;
		}
		return false;
	};

	this.collectKey = function(keyId, tileIndex) {
		this.keys.push(keyId);
		Dungeon.drawLevel[tileIndex] = LEVEL_BLOCK_GROUND;
		console.log(`Key collected: ${keyId} at ${tileIndex}`);
	};
	this.openDoor = function(tileIndex) {
		Dungeon.drawLevel[tileIndex] = LEVEL_BLOCK_GROUND;
		console.log(`Door opened at ${tileIndex}`);
	};

	this.reset = function() {
		let currentArrayIndex = 0;
		for (let row = 0; row < TILE_ROWS; row++) {
			for (let col = 0; col < TILE_COLS; col++) {
				if (Dungeon.drawLevel[currentArrayIndex] === LEVEL_BLOCK_START) {
					Dungeon.drawLevel[currentArrayIndex] = LEVEL_BLOCK_GROUND;

					this.x = col * TILE_W;
					this.y = row * TILE_H;
					this.keys = [];
					return;
				}

				currentArrayIndex++;
			}
		}
	};
}
