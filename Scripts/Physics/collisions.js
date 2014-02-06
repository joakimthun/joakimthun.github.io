function CollisionDirections() {
    this.none = 'none';
    this.left = 'left';
    this.right = 'right';
    this.bottom = 'bottom';
    this.top = 'top';
}


function BoundingBox(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.collisionDirections = new CollisionDirections();
    this.collisionDirection = this.collisionDirections.none;
}

BoundingBox.prototype.intersects = function (secondBox) {
    var collision =
            !(this.x > secondBox.x + secondBox.width ||
            this.x + this.width < secondBox.x ||
            this.y > secondBox.y + secondBox.height ||
            this.y + this.height < secondBox.y);

    return collision;

    //if (collision) {
    //    if (this.x > secondBox.x)
    //        this.collisionDirection = this.collisionDirections.left;
    //    else if (this.x < secondBox.x)
    //        this.collisionDirection = this.collisionDirections.right;
    //    else if (this.y > secondBox.y)
    //        this.collisionDirection = this.collisionDirections.bottom;
    //    else if (this.y < secondBox.y)
    //        this.collisionDirection = this.collisionDirections.top;
    //
    //    //console.log(collision);
    //    //console.log(this.collisionDirection);
    //}
}

BoundingBox.prototype.update = function (x, y) {
    this.x = x;
    this.y = y;
}

BoundingBox.prototype.setCollisionState = function (direction) {
    this.lastCollisionDirection = direction;
}

function CollisionHandler() {
    this.objects = [];
}

CollisionHandler.prototype.registerCollision = function (object) {
    this.objects.push(object);
}

CollisionHandler.prototype.detectCollisions = function (object) {
    for (var i = 0; i < this.objects.length; i++) {
        if (object.boundingBox.intersects(this.objects[i])) {
            return true;
        }
    }

    return false;
}