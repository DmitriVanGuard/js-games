const MAX_VELOCITY = 5;

function PlayerClass() {
	this.x = 0;
	this.y = 0;
	this.keys = [];

	this.keyCollect = function(keyId) {
		this.keys.push(keyId);
	};

	this.move = function() {
		if (up) this.y = MAX_VELOCITY * -1;
		if (left) this.x = MAX_VELOCITY * -1;
		if (down) this.y = MAX_VELOCITY;
		if (right) this.x = MAX_VELOCITY;
	};

	this.draw = function() {
		ctx.save();
		ctx.translate(this.x, this.y);
		ctx.drawImage(playerPic, -playerPic.width / 2, -playerPic.height / 2);
		ctx.restore();
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
