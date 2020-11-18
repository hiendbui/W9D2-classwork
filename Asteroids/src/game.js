const Asteroid = require('./asteroid');
const Util = require('./util');

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
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}))
    }
}

Game.prototype.randomPosition = function () {
    // pos[30,30]
    return [DIM_X * Math.random(), DIM_Y * Math.random()] 
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,DIM_X,DIM_Y);
  this.asteroids.forEach(function(ast) {
    ast.draw(ctx);
  })
}

Game.prototype.moveObjects = function(){
  this.asteroids.forEach(function(ast) {
  ast.move();
  })
}

Game.prototype.wrap = function(pos){
    if (pos[0] < 0) {
        pos[0] = DIM_X;
    } else if (pos[0] > DIM_X){
        pos[0] = 0;
    }

    if (pos[1] < 0) {
        pos[1] = DIM_Y;
    } else if (pos[0] > DIM_Y) {
        pos[1] = 0;
    }
    return pos; 
}

Game.prototype.checkCollisions = function(){
  const ast = this.asteroids
  for (let i = 0; i < NUM_ASTEROIDS; i++) {
    for (let j = i+1; j < NUM_ASTEROIDS - 1; j++) {
    if (ast[i].isCollidedWith(ast[j])){
        ast[i].collideWith(ast[j]);
    }}}
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(ast) {
    let idx = this.asteroids.indexOf(ast);
    this.asteroids.splice(idx, 1);
    this.asteroids.push(new Asteroid({ pos: this.randomPosition(), game: this })); // might need to change 
}
module.exports = Game;