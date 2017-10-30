'use strict';

function Car(model, make) {
	this.model = model;
	this.make = make;
}

Car.prototype.display = function() {
	console.log(`${this.model} - ${this.make}`);
}

const honda = new Car('city', 'honda');

setTimeout(honda.display, 0);
