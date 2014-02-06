
function Sprite(id, frames, height, width, animationDelay) {
    this.image = document.getElementById(id);
    this.frames = frames;
    this.height = height;
    this.width = width;
    this.currentFrame = 0;
    this.animationTimer = null;
    this.lastFrameUpdate = 0;
    this.animationDelay = animationDelay;
    this.currentTime = 0;
};

Sprite.prototype.getXClipping = function () {
    if (this.currentFrame === 0)
        return 0;
    return this.width * this.currentFrame;
}

Sprite.prototype.increaseCurrentFrame = function () {
    
    if (this.currentFrame === this.frames - 1)
        this.currentFrame = 0;
    else
        this.currentFrame++;
}

Sprite.prototype.animate = function () {
    if (this.animationTimer === null)
        this.startAnimation();

    this.animationTimer = new Date();
    this.currentTime = this.animationTimer.getTime();
    if ((this.currentTime - this.animationDelay) >= this.lastFrameUpdate) {
        this.increaseCurrentFrame();
        this.lastFrameUpdate = this.currentTime;
    }
}

Sprite.prototype.startAnimation = function () {
    this.animationTimer = new Date();
    this.lastFrameUpdate = (this.animationTimer.getTime() - this.animationDelay);
    this.increaseCurrentFrame();
};

Sprite.prototype.stopAnimation = function () {
    this.currentFrame = 0;
    this.animationStartTime = 0;
    this.lastFrameUpdate = 0;
}



