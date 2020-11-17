const Util = require('./util');
const MovingObject = require('./moving_object');

const COLOR = '#8e99a3';
const RADIUS= 10;
// const DEFAULT = { //$
//     COLOR: '#8e99a3',
//     RADIUS: 5,
//     // vel: 500;
// };

function Asteroid (data) {
    MovingObject.call(this, data); // not data.pos.pos[0]
    this.color = COLOR;
    this.radius = RADIUS;
    this.vel = Util.randomVec(3);

}

Util.inherits(Asteroid, MovingObject);
module.exports = Asteroid;