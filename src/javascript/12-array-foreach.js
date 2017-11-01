'use strict';

var buffer = {
	entries: [],
	append: function(s) {
		this.entries.push(s);	// in strict mode, this operation will fail
	},
	concat: function() {
		console.log(this.entries.join('\\'));
	}
};

var source = ['15', '11', '2016'];

source.forEach(buffer.append);

buffer.concat();
