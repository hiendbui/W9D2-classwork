const Asteroid = require('./asteroid');
const Util = require('./util');
const Ship = require('./ship')
const Bullet = require('./bullet')

const DIM_X = 500;
const DIM_Y = 500;
const NUM_ASTEROIDS = 7;

function Game() {
    this.asteroids = [];
    this.ship = new Ship({pos: this.randomPosition(), game: this});
    this.bullets = [];
    this.addAsteroids();
} 

Game.prototype.addAsteroids = function () {
  // let that = this;
    for (i = 0; i < NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition(), game: this}))
    }
}

Game.prototype.add = function(obj) {
    if (obj instanceof Asteroid) this.asteroids.push(obj);
    if (obj instanceof Bullet) this.bullets.push(obj);
}

Game.prototype.remove = function(obj) {
    if (this.asteroids.indexOf(obj) !== -1) this.asteroids.splice(this.asteroids.indexOf(obj),1);
    if (this.bullets.indexOf(obj) !== -1) this.bullets.splice(this.bullets.indexOf(obj), 1);
}

Game.prototype.allObjects = function(){
    return this.asteroids.concat([this.ship], this.bullets);
}

Game.prototype.randomPosition = function () {
    // pos[30,30]
    return [DIM_X * Math.random(), DIM_Y * Math.random()] 
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, DIM_X, DIM_Y);
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,DIM_X,DIM_Y);
  this.allObjects().forEach(function(obj) {
    obj.draw(ctx);
  })
}

Game.prototype.moveObjects = function(){
  this.allObjects().forEach(function(obj) {
    obj.move();
  })
}

Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] < 0 || pos[0] > DIM_X || pos[1] < 0 || pos[1] > DIM_Y) return true;
}
Game.prototype.wrap = function(pos){
    if (pos[0] < 0) {
        pos[0] = DIM_X;
    } else if (pos[0] > DIM_X){
        pos[0] = 0;
    }

    if (pos[1] < 0) {
        pos[1] = DIM_Y;
    } else if (pos[1] > DIM_Y) {
        pos[1] = 0;
    }
    return pos; 
}

Game.prototype.checkCollisions = function(){
  const objs = this.allObjects();
  
  for (let i = 0; i < objs.length; i++) { // need revisit
    for (let j = i+1; j < objs.length; j++) {
    if (objs[i].isCollidedWith(objs[j]) && objs[i] instanceof Asteroid){
        objs[i].collideWith(objs[j]);
    }}}
}

Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
    if (this.asteroids.length < NUM_ASTEROIDS) {
        const pos = this.randomPosition();
        pos[Math.floor(Math.random() * 2)] = 0
        this.add(new Asteroid({pos: pos, game:this}));
    }
}

// Game.prototype.remove = function(ast) {
//     let idx = this.asteroids.indexOf(ast);
//     this.asteroids.splice(idx, 1);
//     this.asteroids.push(new Asteroid({ pos: this.randomPosition(), game: this })); // might need to change 
// }
module.exports = Game;