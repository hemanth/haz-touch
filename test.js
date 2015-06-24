'use strict';
var assert = require('assert');
var hazTouch = require('./');

it('should not have a touch interface', function () {
	assert.strictEqual(!hazTouch, true);
});
