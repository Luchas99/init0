$(document).ready(function() {

	// Bootstrap DateTimePicker
	// --------------------------------------------------

	$('#minimum-dtpicker').datetimepicker({
		locale: 'en-gb'
	});

	$('#with-icon-dtpicker').datetimepicker({
		locale: 'en-gb'
	});

	$('#bottom-left-dtpicker').datetimepicker({
		locale: 'en-gb',
		widgetPositioning: {
			horizontal: 'left',
			vertical: 'bottom'
		}
	});

	$('#bottom-right-dtpicker').datetimepicker({
		locale: 'en-gb',
		widgetPositioning: {
			horizontal: 'right',
			vertical: 'bottom'
		}
	});

	$('#top-left-dtpicker').datetimepicker({
		locale: 'en-gb',
		widgetPositioning: {
			horizontal: 'left',
			vertical: 'top'
		}
	});

	$('#top-right-dtpicker').datetimepicker({
		locale: 'en-gb',
		widgetPositioning: {
			horizontal: 'right',
			vertical: 'top'
		}
	});

	$('#france-dtpicker').datetimepicker({
		locale: 'fr'
	});

	$('#russia-dtpicker').datetimepicker({
		locale: 'ru'
	});

	$('#japan-dtpicker').datetimepicker({
		locale: 'ja'
	});

	$('#vietnam-dtpicker').datetimepicker({
		locale: 'vi'
	});

	$('#custom-dtpicker').datetimepicker({
		locale: 'en-gb',
		format: 'LT'
	});

	$('#no-icon-dtpicker').datetimepicker({
		locale: 'en-gb'
	});

	$('#status-dtpicker').datetimepicker({
		locale: 'en-gb',
		defaultDate: "11/1/2013",
		disabledDates: [
			moment("12/25/2013"),
			new Date(2013, 11 - 1, 21),
			"11/22/2013 00:53"
		]
	});

	$('#custom-icons-dtpicker').datetimepicker({
		locale: 'en-gb',
		showTodayButton: true,
		showClear: true,
		showClose: true,
		icons: {
			time: 'ti-time',
			date: 'ti-calendar',
			up: 'ti-arrow-up',
			down: 'ti-arrow-down',
			previous: 'ti-arrow-left',
			next: 'ti-arrow-right',
			today: 'ti-target',
			clear: 'ti-trash',
			close: 'ti-close'
		}
	});

	$('#custom-toolbar-dtpicker').datetimepicker({
		locale: 'en-gb',
		showTodayButton: true,
		showClear: true,
		showClose: true
	});

	$('#linked-pickers-1').datetimepicker({
		locale: 'en-gb'
	});

	$('#linked-pickers-2').datetimepicker({
		locale: 'en-gb',
		useCurrent: false
	});

	$("#linked-pickers-1").on("dp.change", function(e) {
		$('#linked-pickers-2').data("DateTimePicker").minDate(e.date);
	});

	$("#linked-pickers-2").on("dp.change", function(e) {
		$('#linked-pickers-1').data("DateTimePicker").maxDate(e.date);
	});

	$('#view-mode-dtpicker').datetimepicker({
		locale: 'en-gb',
		viewMode: 'years'
	});

	$('#min-view-mode-dtpicker').datetimepicker({
		locale: 'en-gb',
		viewMode: 'years',
		format: 'MM/YYYY'
	});

	$('#disabled-days-dtpicker').datetimepicker({
		locale: 'en-gb',
		daysOfWeekDisabled: [0, 6]
	});

	$('#inline-dtpicker').datetimepicker({
		locale: 'en-gb',
		inline: true,
		sideBySide: true
	});

})