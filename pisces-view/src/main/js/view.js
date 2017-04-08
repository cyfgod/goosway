/*
 * View implementation class.
 *  
 * @author Jerry Cheng
 */
PSViewImpl = new Class({
	Extends: PSViewBase,
	
	// Class constructor
	initialize : function(container, options) {
		// Initialize container
		this.container = container;
		if (typeof this.container === 'string') {
			this.container = $('#' + this.container)[0];
		}

		this.errorHandler = function(e) {
			throw e;
		};

		this.setOptions(options);
	},

	__end : null
});