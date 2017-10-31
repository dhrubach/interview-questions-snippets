'use strict';

function Shape() {
	this.x = 0;
	this.y = 0;
}

Shape.prototype.move = function(offsetX, offsetY) {
	this.x += offsetX;
	this.y += offsetY;
}

function Rectangle() {
	Shape.call(this);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

const r = new Rectangle();

console.log(r instanceof Rectangle);
console.log(r instanceof Shape);
