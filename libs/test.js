/**
 * Test.
 *
 * @constructor
 */
var Test = function() {};

Test.prototype.validateInput = function(input) {
	return typeof input === 'string';
};

module.exports = Test;
