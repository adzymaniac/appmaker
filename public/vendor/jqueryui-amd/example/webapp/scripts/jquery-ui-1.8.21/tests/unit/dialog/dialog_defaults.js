/*
 * dialog_defaults.js
 */

var dialog_defaults = {
	autoOpen: true,
	buttons: {},
	closeOnEscape: true,
	closeText: 'close',
	disabled: false,
	dialogClass: '',
	draggable: true,
	height: 'auto',
	hide: null,
	maxHeight: false,
	maxWidth: false,
	minHeight: 150,
	minWidth: 150,
	modal: false,
	position: {
		my: 'center',
		at: 'center',
		collision: 'fit',
		using: $.ui.dialog.prototype.options.position.using
	},
	resizable: true,
	show: null,
	stack: true,
	title: '',
	width: 300,
	zIndex: 1000
};

commonWidgetTests('dialog', { defaults: dialog_defaults });
