'use strict';

class SelectBorder {
	constructor() {

	}

	draw(button) { 
		this.drawStyle();
		rect(button.position.x, button.position.y, button.dimensions.x, button.dimensions.y);
	}

	drawStyle() {
		noFill();
		stroke(new Color(100, 210, 255));

		strokeWeight(8);
	}
}

