var assert = require('chai').assert,
	sinon = require('sinon'),
	_ = require('underscore'),
	Test = require('../libs/test');

suite('Task', function() {
	setup(function() {
		this.sandbox = sinon.sandbox.create();
		this.testClass = new Test();
	});

	suite('01', function() {
		test('string validation', function() {
			var stringProvider = [
					'a,b,c',
					'100,982,444,990,1',
					'Mark,Anthony,marka@lib.de'
				],
				notStringProvider = [
					1,
					82,
					false
				];

			_.forEach(stringProvider, function(input) {
				assert.strictEqual(this.testClass.validateInput(input), true);
			}, this);

			_.forEach(notStringProvider, function(input) {
				assert.strictEqual(this.testClass.validateInput(input), false);
			}, this);
		});

		test('string explode', function() {
			var expected = {
				'a,b,c'                     : ['a', 'b', 'c'],
				'100,982,444,990,1'         : ['100', '982', '444', '990', '1'],
				'Mark,Anthony,marka@lib.de' : ['Mark', 'Anthony', 'marka@lib.de']
			};

			_.each(expected, function(v, k) {
				assert.deepEqual(this.testClass.splitString(k), v);
			}, this);
		});
	});

	suite('02', function() {
		test('multiarray explode by NL', function() {
			var expected = {
				'211,22,35\n10,20,33' : [
					['211', '22', '35'],
					['10', '20', '33']
				],
				'luxembourg,kennedy,44\nbudapest,expo ter,5-7\ngyors,fo utca,9' : [
					['luxembourg', 'kennedy', '44'],
					['budapest', 'expo ter', '5-7'],
					['gyors', 'fo utca', '9']
				]
			};

			_.each(expected, function(v, k) {
				assert.deepEqual(this.testClass.explodeByNL(k), v);
			}, this);
		});
	});

	suite('03', function() {
		test('explode to data array', function() {
			var expected = {
				"#useFirstLineAsLabels\nName,Email,Phone\nMark,marc@be.com,998\nNoemi,noemi@ac.co.uk,888" : {
					labels: ['Name', 'Email', 'Phone'],
					data: [
						[
							'Mark', 'marc@be.com', '998'
						],
						[
							'Noemi', 'noemi@ac.co.uk',
							888
						]
					]
				}
			};

			_.each(expected, function(v, k) {
				assert.deepEqual(this.testClass.explodeToDataArray(k), v);
			}, this);
		});
	});

	teardown(function() {
	});
});