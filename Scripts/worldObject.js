
function WorldObject(renderer, x, y) {
    this.renderer = renderer;
    this.position = new Vector(x, y);
    this.color = "black";
    this.boundingBox = new BoundingBox(70, 70, this.position.x, this.position.y);
}

WorldObject.prototype.render = function () {
    this.renderer.setRenderingColor(this.color);
    this.renderer.drawImage('box', this.position.x, this.position.y, this.boundingBox.width, this.boundingBox.height);
}