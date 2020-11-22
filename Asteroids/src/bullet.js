const Util = require('./util');
const MovingObject = require('./moving_object');

const COLOR = 'red';
const RADIUS = 2;

function Bullet (data) {
    MovingObject.call(this, data);
    this.color = COLOR;
    this.radius = RADIUS;
}

Util.inherits(Bullet, MovingObject);

Bullet.prototype.isWrappable = false;

module.exports = Bullet;