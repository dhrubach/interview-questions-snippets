'use strict';

function Series(character, name) {
	this.name = name;
	this.character = character;
}

const got = Series('jon snow', 'kit harrington');

console.log(got instanceof Series);
console.log(got.name);
