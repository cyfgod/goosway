/*
 * Main class to implement report view object.
 *  
 * @author Jerry Cheng
 */
;
(function() {
	var PSView = this.PSView = new Class({
		// Class constructor
		initialize : function(container, options) {
			// Initialize container
			this.container = container;

			// Initialize error handler
			this.errorHandle = function(e) {
				throw e;
			};

			// Initialize options
			var that = this;
			(options) ? Object.each(options, function(v, k) {
				try {
					var func = new Function("this.set" + k.capitalize() + "("
							+ v + ");");
					func.call(that);
				} catch (e) {
				}
			}) : null;
		},

		// Set report design
		setReportDesign : function(design) {
			this.reportDesign = design;
		},

		// Set report document
		setReportDocument : function(document) {
			this.reportDocument = document;
		},

		// Set error handler
		setErrorHandler : function(handler) {
			if (handler && typeof handler === "function") {
				this.errorHandler = handler;
			}
		},

		// View run
		run : function(callback) {

		},

		toString : function() {
			return "Pisces View -- Love XYXN";
		},

		__end : null
	});
})();