'use strict';
var hazWindow   = typeof window !== 'undefined';
var hazDocument = typeof document !== 'undefined';

module.exports = (function(){
	if(hazWindow && hazDocument) {
		return 'DocumentTouch' in window &&
		typeof document !== 'undefined' &&
		document instanceof DocumentTouch ||
		'ontouchstart' in window;
	}
}());
