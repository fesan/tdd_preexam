var assert = require('chai').assert,
	_ = require('underscore'),
	Test = require('../libs/test');

suite('task 1', function() {
	var stringProvider = [
			'valami',
			'loremipsum',
			'asdasd',
			'xyz'
		],
		notStringProvider = [
			1,
			82,
			false
		];

	setup(function() {
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
		assert.deepEqual(this.testClass.splitString('a,b,c,d,e'), ['a', 'b', 'c', 'd', 'e']);
		assert.deepEqual(this.testClass.splitString('valami,valamimas'), ['valami', 'valamimas']);
	});

	teardown(function() {
	});
});
