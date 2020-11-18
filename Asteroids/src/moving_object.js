const Util = require('./util');

function MovingObject (data) {
  this.pos = data.pos; //pos: [30, 30],
  this.vel = data.vel; //vel: [10, 10],
  this.radius = data.radius;
  this.color = data.color;
  this.game = data.game;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color; // needs to before fill to get counted
  ctx.fill(); //the actual fill function
  
}

MovingObject.prototype.move = function (){
    this.pos = this.game.wrap(this.pos);
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
  
}

MovingObject.prototype.isCollidedWith = function(otherObject){
  // if (this.pos - otherobject.pos < (this.radius + otherobject.radius))
  return (Util.dist(this.pos, otherObject.pos) < (this.radius + otherObject.radius));


}

MovingObject.prototype.collideWith = function (otherObject) {
    // this.game.remove(this);
    // this.game.remove(otherObject);

}



module.exports = MovingObject;