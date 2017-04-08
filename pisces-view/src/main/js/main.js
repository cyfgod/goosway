/*
 * Main class to implement report view object.
 *  
 * @author Jerry Cheng
 */
PSView = new Class({
	Extends : PSViewBase,

	// Class constructor
	initialize : function(container, options) {
		// Initialize container
		this.container = container;

		// Initialize error handler
		this.errorHandle = function(e) {
			throw e;
		};

		// Initialize options
		this.setOptions(options);
	},

	// View run
	run : function(callback) {

	},

	__end : null
});