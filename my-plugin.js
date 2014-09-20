/*!
 * PluginName
 * @version 1.0
 * @author Your Name <www.yourdomain.tld>
 * @copyright Year Your Name
 * @license MIT License
 */
(function ($) {

	var pluginName = function (elem, options) {
		// combined settings (default + call)
		var settings = $.extend({}, jQuery.fn.pluginName.defaults, options);
		// element(s) from call
		var $elem = $(elem);

		// PLACE PLUGIN LOGIC HERE

		// EXTERNAL FUNCTIONS
		var externalFunctions = {
			test: function () {
				alert(true);
			}
		};
		$elem.data('pluginName', externalFunctions);
	};

	$.fn.pluginName = function (options) {
		return this.each(function () {
			new pluginName(this, options);
		});
	};

	$.fn.pluginName.defaults = {
		option: 'value'
	};

})(jQuery);
