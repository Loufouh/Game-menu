'use strict';

class Button {
	constructor(position, dimensions, text, action = function() {}) {
		this.position = position;
		this.dimensions = dimensions;
		this.text = text;
		this.action = action;

		this.index = -1;
	}

	click() {
		this.action();
	}

	draw() {
		this.drawBackgroundStyle();
		rect(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y);
		this.drawTextStyle();
		textFitInBox(this.position.x, this.position.y, this.dimensions.x, this.dimensions.y, this.text);
	}

	drawBackgroundStyle() {
		lineJoin('round');
		strokeWeight(1);

		noFill();

		if(showLightBackground)
			stroke(new Color(10, 20, 30))
		else
			stroke(new Color(100, 110, 120));
	}

	drawTextStyle() {
		noStroke();

		if(showLightBackground)
			fill(new Color(0));
		else
			fill(new Color(255));

	}

	setAction(action) {
		this.action = action;
	}

	setIndex(index) {
		this.index = index;
	}
}

