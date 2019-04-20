'use strict';

class Menu {
	constructor() {
		this.selectBorder = new SelectBorder();
		this.buttons = [];
		this.indexSelected = 0;
	}

	add(button) {
		button.setIndex(this.buttons.length);
		this.buttons.push(button)

		return this;
	}
	
	draw() {
		for(let i = 0; i < this.buttons.length; i++)
			this.buttons[i].draw();

		if(this.buttons.length >= 0)
			this.selectBorder.draw(this.buttons[this.indexSelected]);
	}

	select(index) {
		if(index < 0 || index >= this.buttons.length)
			return error('The index is not correct');

		this.indexSelected = index;
	}

	isMaxIndex() {
		return this.indexSelected === (this.buttons.length - 1);
	}

	isMinIndex() {
		return this.indexSelected === 0;
	}

	getSelectedButton() {
		if(this.buttons.length < 0)
			return error('there\'s no button in the menu', new Button());

		return this.buttons[this.indexSelected];
	}

	getIndexSelected() {
		return this.indexSelected;
	}
}
