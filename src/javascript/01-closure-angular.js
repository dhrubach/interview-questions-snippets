'use strict';

function framework(obj) {
    function display(members) {
        return console.log(`${obj.id} uses ${members}`);
    }

    return display;
}

const angular = framework({id: 'angular'});

setTimeout(function() {
	angular('controller and services');
});
