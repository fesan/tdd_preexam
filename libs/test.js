/**
 * Test.
 *
 * @constructor
 */
var Test = function() {};

Test.prototype.validateInput = function(input) {
	return typeof input === 'string';
};

Test.prototype.splitString = function(input) {
	return input.split(',');
};

module.exports = Test;
