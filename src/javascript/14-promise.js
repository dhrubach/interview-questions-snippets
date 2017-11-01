'use strict';

const p1 = new Promise(function (resolve, reject) {
	setTimeout(resolve(`promise 1`));
});

const p2 = Promise.reject(`promise 2`);

const p3 = Promise.resolve(`promise 3`);

Promise.all([p3, p2, p1])
	.then(function (responses) {
		console.log(responses);
	})
	.catch(function (responses) {
		console.log(responses);
	});

console.log(`there is an error !!!`);

