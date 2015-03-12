/**
 * Test.
 *
 * @constructor
 */
var _ = require('underscore'),
	Test = function() {};

Test.prototype.validateInput = function(input) {
	return typeof input === 'string';
};

Test.prototype.splitString = function(input) {
	if (this.validateInput(input)) {
		return input.split(',');
	}
};

Test.prototype.explodeByNL = function(input) {
	var row = [],
		a = [];

	if (this.validateInput(input)) {
		row = input.split('\n');
	}

	_.each(row, function(elem) {
		a.push(this.splitString(elem));
	}, this);

	return a;
};

Test.prototype.explodeToDataArray = function(input) {
	var exploded = input.split('\n'),
		o = {
			labels : [],
			data   : []
		}, a;

	if (exploded[0] === '#useFirstLineAsLabels') {
		exploded.shift();
		o.labels = exploded[0].split(',');
		a = exploded.shift().join('\n');
		o.data = this.explodeByNL(a);

		return o;
	}
};

module.exports = Test;
