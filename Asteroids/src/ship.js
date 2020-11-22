const Util = require('./util');
const MovingObject = require('./moving_object');
const Bullet = require('./bullet')


const COLOR = '#21db91';
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

Ship.prototype.fireBullet = function () {
    const pos = [...this.pos]
    const vel = [...this.vel]
    vel[0] *= 3;
    vel[1] *= 3;// vel = vel.map(function(el) {el * 3});
    if (vel[0] !== 0 || vel[1] !== 0) this.game.add(new Bullet({pos: pos, vel: vel, game: this.game}));
    
}

module.exports = Ship;