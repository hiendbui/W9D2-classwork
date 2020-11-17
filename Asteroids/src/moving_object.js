function MovingObject (data) {
  this.pos = data.pos; //pos: [30, 30],
  this.vel = data.vel; //vel: [10, 10],
  this.radius = data.radius;
  this.color = data.color;
}

MovingObject.prototype.draw = function (ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
  ctx.fillStyle = this.color; // needs to before fill to get counted
  ctx.fill(); //the actual fill function
  
}

MovingObject.prototype.move = function (){
  this.pos[0] += this.vel[0];
  this.pos[1] += this.vel[1];
}

module.exports = MovingObject;