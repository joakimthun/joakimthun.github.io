
function Character(renderer, width, height, states) {
    this.renderer = renderer;
    this.width = width;
    this.height = height;
    this.position = new Vector(400, 300);
    this.color = "black";
    this.states = states || [];
    this.currentState = null;
    this.renderBoundingBox = true;
    this.boundingBox = new BoundingBox(this.width - 40, this.height - 20, this.position.x + 22, this.position.y + 15);
}

Character.prototype.setState = function (stateName) {
    for (var i = 0; i < this.states.length; i++) {
        if (this.states[i].name === stateName) {
            this.currentState = this.states[i];
            break;
        }
    }
}

Character.prototype.render = function () {
    this.renderer.drawSprite(this.position.x, this.position.y, this.currentState.sprite);
    this.currentState.sprite.animate();

    if(this.renderBoundingBox)
        this.renderer.drawRectangle(this.boundingBox.x, this.boundingBox.y, this.boundingBox.width, this.boundingBox.height);
}