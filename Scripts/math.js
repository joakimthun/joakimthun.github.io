
function Vector(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vector.prototype.add = function (vector) {
    this.x += vector.x;
    this.y += vector.y;
}

Vector.prototype.addX = function (x) {
    this.x += x;
}

Vector.prototype.subtractX = function (x) {
    this.x -= x;
}

Vector.prototype.addY = function (y) {
    this.y += y;
}

Vector.prototype.subtractY = function (y) {
    this.y -= y;
}

Vector.prototype.subtract = function (vector) {
    this.x -= vector.x;
    this.y -= vector.y;
}

Vector.prototype.multiply = function (scalar) {
    this.x *= scalar;
    this.y *= scalar;
}

Vector.prototype.rMultiply = function (scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
}

Vector.prototype.divide = function (scalar) {
    this.x /= scalar;
    this.y /= scalar;
}

Vector.prototype.clone = function () {
    return new Vector(this.x, this.y);
}