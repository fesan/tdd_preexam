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

module.exports = Test;
