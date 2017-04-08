/*
 * Main class to implement report view object.
 *  
 * @author Jerry Cheng
 */
PSView = new Class({
	Extends : PSViewBase,

	_view : null,

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
		var that = this;
		require.ensure([], function(require) {
			// load required resources
			var react = require('react');
			
			// Create view instance
			var options = that.__createOptions();
			if (!that._view) {
				that._view = new PSViewImpl(that.container, options);
			} else {
				that._view.setOptions(opts);
			}

			that._view.setParameters(that.parameters);
			that._view.run(callback);
		}, 'lib/react');
	},

	// Create view options
	__createOptions : function() {
		return {
			reportDesign : this.reportDesign,
			reportDocument : this.reportDocument,
			page : this.page,
			svg : this.svg,
			bookmark : this.bookmark,
			locale : this.locale,
			errorHandler : this.errorHandler
		};
	},

	__end : null
});