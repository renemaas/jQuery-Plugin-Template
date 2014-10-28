jQuery Plugin Template
======================

Simple wrapper for complex jQuery plugins.

## Usage

Replace *pluginName* with the name of your plugin.

**You can call it via:**

	$('<selector>').pluginName({
		option: 'value'
	});

**Call external functions:**

	$('<selector>').data('pluginName').test();
