// const MovingObject = require("./moving_object.js");
// window.MovingObject = MovingObject;
// const Asteroid = require("./asteroid");
const GameView = require("./game_view");
const Game = require("./game");
// const mo = new MovingObject({
//   pos: [30, 30],
//   vel: [10, 10],
//   radius: 5,
//   color: "#00FF00" //green
// });

// const ast = new Asteroid({
//   pos: [150,150]

// });




window.addEventListener('DOMContentLoaded', function () {
  const canvasEl = document.getElementById("game-canvas");
  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  const gv = new GameView(game, ctx);
  gv.start();
  // game.draw(ctx);
  // game.moveObjects();  
  // setInterval(game.draw(ctx),1000);
  // game.asteroids.forEach((ele)=>{
  //   ele.draw(ctx);
    
  // });
  // mo.move();
  // mo.draw(ctx);
});


// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.beginPath();
// ctx.arc(100, 75, 50, 0, 2 * Math.PI);
// ctx.stroke();