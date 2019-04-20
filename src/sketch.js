"use strict"

let showLightBackground = true;

let menu;

let upButton,
    downButton,
    enterButton;

function setup() {
	initButtons();

	document.body.addEventListener('keydown', keyListener);

	menu = new Menu();
	
	menu.add( new Button(new Vector(150, 200), new Vector(canvas.width - 300, 80), 'Light mode', ()=>showLightBackground = true) )
	    .add( new Button(new Vector(150, 400), new Vector(canvas.width - 300, 80), 'Dark mode', ()=>showLightBackground = false) );
}

function loop() {
	if(showLightBackground)
		background( new Color(255) )
	else
		background( new Color(50) )
	border(new Color(0));

	menu.draw();
}

function initButtons() {
	upButton = document.getElementById('upButton');
	downButton = document.getElementById('downButton');
	enterButton = document.getElementById('enterButton');

	upButton.addEventListener('click', goUp);
	downButton.addEventListener('click', goDown);
	enterButton.addEventListener('click', enter);
}

const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_ENTER = 13;

function keyListener(e) {
	if(e.keyCode === KEY_UP)
		goUp();
	else if(e.keyCode === KEY_DOWN)
		goDown();
	else if(e.keyCode === KEY_ENTER)
		enter();
	
}

function goUp() {
	if(!menu.isMinIndex())
		menu.select(menu.getIndexSelected() - 1);
}

function goDown() {
	if(!menu.isMaxIndex())
		menu.select(menu.getIndexSelected() + 1);
}

function enter() {
	menu.getSelectedButton().click();
}
