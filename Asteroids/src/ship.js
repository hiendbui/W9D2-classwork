const Util = require('./util');
const MovingObject = require('./moving_object');


const COLOR = 'red';
const RADIUS= 10;

function Ship (data) {
    MovingObject.call(this, data); // not data.pos.pos[0]
    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = [0,0];

}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0,0];
}

Ship.prototype.power = function (impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
}

module.exports = Ship;