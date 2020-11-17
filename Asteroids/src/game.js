const Asteroid = require('./asteroid');
// const Util = require('./util');

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 10;

function Game() {
    this.asteroids = [];
    this.addAsteroids();
} 

Game.prototype.addAsteroids = function () {
  // let that = this;
    for (i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition()}))
    }
}

Game.prototype.randomPosition = function () {
    // pos[30,30]
    return [DIM_X * Math.random(), DIM_Y * Math.random()] 
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, DIM_X, DIM_Y);
    this.asteroids.forEach(function(ast) {
      ast.draw(ctx);
    })
}

Game.prototype.moveObjects = function(){
  this.asteroids.forEach(function(ast) {
  ast.move();
  })
}

module.exports = Game;