
function Player(renderer, width, height, states) {
    Character.call(this, renderer, width, height, states);
    this.velocity = new Vector(0, 0);
    this.gravity = new Vector(0, 300);
    this.speed = 130;
    this.jumpSpeed = 180;
    this.inputHandler = new InputHandler();
    this.setState('idle_right');
    this.lastKnowState = null;
    this.collsionHandler = new CollisionHandler();
    this.airborne = false;
    this.desiredPosition = this.position;
    this.inputHandler.registerEvents(this);
}

Player.prototype = new Character;

Player.prototype.moveLeft = function () {
    this.velocity.x = -this.speed;
    this.setState('moving_left');
    this.lastKnowState = 'moving_left';
}

Player.prototype.moveRight = function () {
    this.velocity.x = this.speed;
    this.setState('moving_right');
    this.lastKnowState = 'moving_right';
}

Player.prototype.moveUp = function () {
    this.velocity.y = -this.speed;
}

Player.prototype.moveDown = function () {
    this.velocity.y = this.speed;
}

Player.prototype.jump = function () {
    if (!this.airborne) {
        this.airborne = true;
        this.velocity.y = -this.jumpSpeed;
    }
}

Player.prototype.grounded = function () {
    this.airborne = false;
    this.position.y = 300;
}

Player.prototype.update = function (deltaTime) {
    this.desiredPosition = this.position.clone();

    this.desiredPosition.add(this.velocity.rMultiply(deltaTime));
    this.velocity.add(this.gravity.rMultiply(deltaTime));

    this.boundingBox.update(this.desiredPosition.x + 22, this.desiredPosition.y + 15);
    var collision = this.collsionHandler.detectCollisions(this);

    if (!collision) {
        this.position = this.desiredPosition;
        if (this.position.y > 300) {
            this.grounded();
        }
    }
    else if (this.airborne) {
        this.velocity.x = 0;
    }

    this.boundingBox.update(this.position.x + 22, this.position.y + 15);
}

Player.prototype.resetVelocity = function () {
    this.velocity = new Vector(0, 0);
}

Player.prototype.setIdleState = function () {
    if (this.lastKnowState) {
        switch (this.lastKnowState) {
            case 'moving_left':
                this.setState('idle_left');
                break;
            case 'moving_right':
                this.setState('idle_right');
                break;
        }
    }
}



