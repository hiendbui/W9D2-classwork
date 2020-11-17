/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\n\nconst COLOR = '#8e99a3';\nconst RADIUS= 10;\n// const DEFAULT = { //$\n//     COLOR: '#8e99a3',\n//     RADIUS: 5,\n//     // vel: 500;\n// };\n\nfunction Asteroid (data) {\n    MovingObject.call(this, data); // not data.pos.pos[0]\n    this.color = COLOR;\n    this.radius = RADIUS;\n    this.vel = Util.randomVec(3);\n\n}\n\nUtil.inherits(Asteroid, MovingObject);\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n// const Util = require('./util');\n\nconst DIM_X = 500;\nconst DIM_Y = 500;\nconst NUM_ASTEROIDS = 10;\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n} \n\nGame.prototype.addAsteroids = function () {\n  // let that = this;\n    for (i = 0; i < NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid({pos: this.randomPosition()}))\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    // pos[30,30]\n    return [DIM_X * Math.random(), DIM_Y * Math.random()] \n}\n\nGame.prototype.draw = function(ctx) {\n    ctx.clearRect(0, 0, DIM_X, DIM_Y);\n    this.asteroids.forEach(function(ast) {\n      ast.draw(ctx);\n    })\n}\n\nGame.prototype.moveObjects = function(){\n  this.asteroids.forEach(function(ast) {\n  ast.move();\n  })\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__ */
/*! CommonJS bailout: module.exports is used directly at 17:0-14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game,ctx){\n  this.game = game;\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function(){\n    let that = this;\nsetInterval(function(){\n  that.game.moveObjects();\n  that.game.draw(that.ctx);\n\n}, 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("function MovingObject (data) {\n  this.pos = data.pos; //pos: [30, 30],\n  this.vel = data.vel; //vel: [10, 10],\n  this.radius = data.radius;\n  this.color = data.color;\n}\n\nMovingObject.prototype.draw = function (ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);\n  ctx.fillStyle = this.color; // needs to before fill to get counted\n  ctx.fill(); //the actual fill function\n  \n}\n\nMovingObject.prototype.move = function (){\n  this.pos[0] += this.vel[0];\n  this.pos[1] += this.vel[1];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

eval("// Function.prototype.inherits = function (ParentClass) { \n    \n// };\n\nconst Util = {\n  inherits(childClass, parentClass) {\n    const Surrogate = function() {};\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n    // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n  return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: __webpack_require__ */
eval("// const MovingObject = require(\"./moving_object.js\");\n// window.MovingObject = MovingObject;\n// const Asteroid = require(\"./asteroid\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n// const mo = new MovingObject({\n//   pos: [30, 30],\n//   vel: [10, 10],\n//   radius: 5,\n//   color: \"#00FF00\" //green\n// });\n\n// const ast = new Asteroid({\n//   pos: [150,150]\n\n// });\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', function () {\n  const canvasEl = document.getElementById(\"game-canvas\");\n  const ctx = canvasEl.getContext(\"2d\");\n  const game = new Game();\n  const gv = new GameView(game, ctx);\n  gv.start();\n  // game.draw(ctx);\n  // game.moveObjects();  \n  // setInterval(game.draw(ctx),1000);\n  // game.asteroids.forEach((ele)=>{\n  //   ele.draw(ctx);\n    \n  // });\n  // mo.move();\n  // mo.draw(ctx);\n});\n\n\n// var c = document.getElementById(\"myCanvas\");\n// var ctx = c.getContext(\"2d\");\n// ctx.beginPath();\n// ctx.arc(100, 75, 50, 0, 2 * Math.PI);\n// ctx.stroke();\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;