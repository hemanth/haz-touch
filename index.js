'use strict';
var hazWindow   = typeof window !== 'undefined';
var hazDocument = typeof document !== 'undefined';

module.exports = (function(){
	if(hazWindow && hazDocument) {
		return 'DocumentTouch' in window &&
		document instanceof DocumentTouch ||
		'ontouchstart' in window ||
		navigator.maxTouchPoints > 0 ||
		navigator.msMaxTouchPoints > 0;
	}
}());
