const Game = require("./game");

function GameView(game,ctx){
  this.game = game;
  this.ctx = ctx;
}

GameView.prototype.start = function(){
    let that = this;
    this.bindKeyHandlers();
    setInterval(function(){
    that.game.step();
    that.game.draw(that.ctx);
    }, 20);
    
}

GameView.prototype.bindKeyHandlers = function() {
  const that = this
  key('a', function() {that.game.ship.power([-1,0]);});
  key('d', function() { that.game.ship.power([1, 0]); });
  key('w', function() { that.game.ship.power([0, -1]); });
  key('s', function() { that.game.ship.power([0, 1]); });
  key('space', function () { that.game.ship.fireBullet(); });
}

module.exports = GameView;