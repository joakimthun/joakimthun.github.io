
function Renderer(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
}

Renderer.prototype.clear = function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Renderer.prototype.getCanvasCenter = function() {
    return { x: this.canvas.width / 2, y: this.canvas.height / 2 };
}

Renderer.prototype.setRenderingColor = function(color) {
    this.context.fillStyle = color;
}

Renderer.prototype.drawImage = function(textureId, x, y, width, height) {
    var image = document.getElementById(textureId);
    this.context.drawImage(image, x, y, width, height);
}

Renderer.prototype.drawSprite = function(x, y, sprite) {
    this.context.drawImage(sprite.image, sprite.getXClipping(), 0, sprite.width, sprite.height, x, y, sprite.width, sprite.height);
}

Renderer.prototype.drawLine = function(start, end) {
    this.context.beginPath();
    this.context.moveTo(start.x, start.y);
    this.context.lineTo(end.x, end.y);
    this.context.stroke();
}

Renderer.prototype.drawFilledRectangle = function(x, y, width, height) {
    this.context.fillRect(x, y, width, height);
};

Renderer.prototype.drawRectangle = function (x, y, width, height) {
    this.context.beginPath();
    this.context.rect(x, y, width, height);
    this.context.stroke();
};

Renderer.prototype.drawText = function (text, x, y) {
    this.context.font = "20px Georgia";
    this.context.fillText(text, x, y);
}