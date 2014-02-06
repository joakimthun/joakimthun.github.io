
function InputHandler() {
    this.pressedKeys = {};
    this.up = 87;
    this.left = 65;
    this.down = 83;
    this.right = 68;
    this.space = 32;
};

InputHandler.prototype.onKeyDown = function (event, player) {
    this.pressedKeys[event.keyCode] = true;

    if (this.isDown(this.left)) {
        player.moveLeft();
    }
    else if (this.isDown(this.right)) {
        player.moveRight();
    }

    if (this.isDown(this.up)) {
        player.jump();
    }
};

InputHandler.prototype.onKeyUp = function (event, player) {
    delete this.pressedKeys[event.keyCode];

    if (event.keyCode == this.left && !this.isDown(this.left)) {
        player.velocity.x = 0;
        noKeysPressed = false;
    }
    else if (event.keyCode == this.right && !this.isDown(this.right)) {
        player.velocity.x = 0;
        noKeysPressed = false;
    }

    if (player.velocity.x === 0) {
        player.setIdleState();
    }
}

InputHandler.prototype.registerEvents = function (velocity) {
    var that = this;
    window.addEventListener('keyup', function (event) { that.onKeyUp(event, velocity); }, false);
    window.addEventListener('keydown', function (event) { that.onKeyDown(event, velocity); }, false);
}

InputHandler.prototype.isDown = function (key) {
    return this.pressedKeys[key];
}

