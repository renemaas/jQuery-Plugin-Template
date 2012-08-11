(function ($, window, document, undefined) {

	var pluginName = function (elements, options) {
		var settings = $.extend({}, jQuery.fn.pluginName.defaults, options);
	};

	$.fn.pluginName = function (options) {
		return this.each(function () {
			new pluginName(this, options);
		});
	};

	jQuery.pluginName.defaults = {
		optionName: defaultValue
	};

})(jQuery, window, document);