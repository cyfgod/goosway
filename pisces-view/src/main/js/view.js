/*
 * View implementation class.
 *  
 * @author Jerry Cheng
 */
PSViewImpl = new Class({
	// Class constructor
	initialize : function(container, options) {
		// Initialize container
		this.container = container;
		if (typeof this.container === 'string') {
			this.container = $('#' + this.container)[0];
		}

		// Apply options
		var that = this;
		(options) ? $.each(options, function(k, v) {
			that[k] = v;
		}) : null;
	},

	run : function(callback) {
		alert(this.container);
	},

	__end : null
});