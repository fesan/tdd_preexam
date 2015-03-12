var assert = require('chai').assert,
	sinon = require('sinon'),
	_ = require('underscore'),
	Test = require('../libs/test');

suite('task 1', function() {
	var stringProvider = [
			'a,b,c',
			'100,982,444,990,1',
			'Mark,Anthony,marka@lib.de'
		],
		notStringProvider = [
			1,
			82,
			false
		],
		expected = {
			'a,b,c'                     : ['a', 'b', 'c'],
			'100,982,444,990,1'         : ['100', '982', '444', '990', '1'],
			'Mark,Anthony,marka@lib.de' : ['Mark', 'Anthony', 'marka@lib.de']
		};

	setup(function() {
		this.sandbox = sinon.sandbox.create();
		this.testClass = new Test();
	});

	test('string validation', function() {
		_.forEach(stringProvider, function(input) {
			assert.strictEqual(this.testClass.validateInput(input), true);
		}, this);

		_.forEach(notStringProvider, function(input) {
			assert.strictEqual(this.testClass.validateInput(input), false);
		}, this);
	});

	test('string explode', function() {
		_.each(expected, function(v, k) {
			assert.deepEqual(this.testClass.splitString(k), v);
		}, this);
	});

	teardown(function() {
	});
});
