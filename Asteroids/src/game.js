const Asteroid = require('./asteroid');
const Util = require('./util');
const Ship = require('./ship')

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 10;

function Game() {
    this.asteroids = [];
    this.ship = new Ship({pos: this.randomPosition(), game: this});
    this.addAsteroids();
} 

Game.prototype.addAsteroids = function () {
  // let that = this;
    for (i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}))
    }
}

Game.prototype.allObjects = function(){
    return this.asteroids.concat([this.ship]);
}

Game.prototype.randomPosition = function () {
    // pos[30,30]
    return [DIM_X * Math.random(), DIM_Y * Math.random()] 
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,DIM_X,DIM_Y);
  this.allObjects().forEach(function(ast) {
    ast.draw(ctx);
  })
}

Game.prototype.moveObjects = function(){
  this.allObjects().forEach(function(ast) {
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
  const objs = this.allObjects();
  
  for (let i = 0; i < objs.length; i++) { // need revisit
    for (let j = i+1; j < objs.length; j++) {
    if (objs[i].isCollidedWith(objs[j])){
        objs[i].collideWith(objs[j]);
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