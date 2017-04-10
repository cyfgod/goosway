/*
 * Base class of report view object.
 *  
 * @author Jerry Cheng
 */
PSViewBase = new Class({

	// Initialize options
	parameters : {},
	page : 1,
	
	// Initialize error handler
	errorHandle : function(e) {
		throw e;
	},

	// Set options
	setOptions : function(options) {
		var that = this;
		(options) ? Object.each(options, function(v, k) {
			try {
				new Function("this.set" + k.capitalize() + "(" + v + ");")
						.call(that);
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

	// Set page number
	setPage : function(page) {
		this.page = parseInt(page);
	},

	// Add report parameter
	addParameter : function(name, value) {
		if (typeof name === 'string') {
			this.parameters[name] = value;
		}
	},

	// Add report parameters
	addParameters : function(params) {
		var that = this;
		if (typeOf(params) === "array") {
			params.every(function(param) {
				var name = param.name;
				if (name) {
					that.parameters.push({
						name : name,
						value : param.value
					});
				}
				return true;
			});
		}
	},

	// Set report parameters
	setParameters : function(parameters) {
		if (typeof (parameters) === 'object') {
			this.parameters = parameters;
		}
	},

	// Get report parameters
	getParameters : function() {
		return this.parameters;
	},

	// Clear parameters
	clearParameters : function() {
		this.parameters = {};
	},

	// Set error handler
	setErrorHandler : function(handler) {
		if (handler && typeof handler === "function") {
			this.errorHandler = handler;
		}
	},

	toString : function() {
		return "Pisces View -- Love XYXN";
	},

	__end : null
});