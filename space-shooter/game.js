/** 
 *	The classic game of shooting alien invaders
 *	2012 Martin Wozniewicz
 *
 */


/** Objects */
var Ship = function(x, y) {
	this.x = x;
	this.y = y;
	this.life = 100;
	this.speed = 10;
}

/** Global variables */
var container, canvas, context;
var WIDTH, HEIGHT;


init();

// Run the game loop at 60 FPS 
setInterval(loop, 1000/60);


/** Initialization */
function init() {
	container = document.getElementById('container');

	WIDTH = window.innerWidth;
	HEIGHT = window.innerHeight;

	var canvas = document.createElement("canvas");
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	container.appendChild(canvas);

	context = canvas.getContext("2d");
	context.fillStyle = "rgb(0, 0, 0)";
	context.fillRect (0, 0, WIDTH, HEIGHT);

	if(window.addEventListener) window.addEventListener('keypress', onKeypress, false); else if(window.attachEvent) window.attachEvent('onkeypress', onKeypress); else window.onkeypress = onKeypress;
	//window.addEventListener('keypress', onKeypress, false);
}


/** Game loop */
function loop() {
	context.fillStyle = "rgb(200, 0 0);
	context.fillRect (0, 0, WIDTH, HEIGHT);
	document.title = "Hello";
}

/** Input handler */
function onKeypress(event) {
	var keyVal = event.keyCode;
	document.title = keyVal;
}

/** Drawing function */
