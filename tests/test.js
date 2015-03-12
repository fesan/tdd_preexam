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

	teardown(function() {
	});
});
