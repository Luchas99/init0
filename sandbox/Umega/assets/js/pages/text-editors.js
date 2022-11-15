$(document).ready(function() {

	// Summernote
	// --------------------------------------------------

	$('#summernote-1').summernote({
		height: 240,
		toolbar: [
			['style', ['style']],
			['font', ['bold', 'italic', 'underline', 'clear']],
			['fontname', ['fontname']],
			['fontsize', ['fontsize']],
			['color', ['color']],
			['para', ['ul', 'ol', 'paragraph']],
			['height', ['height']],
			['table', ['table']],
			['insert', ['link', 'picture', 'hr']],
			['view', ['fullscreen']],
		],
	})

	$('#summernote-2').summernote({
		toolbar: [
			['style', ['style']],
			['font', ['bold', 'italic', 'underline', 'clear']],
			['fontname', ['fontname']],
			['fontsize', ['fontsize']],
			['color', ['color']],
			['para', ['ul', 'ol', 'paragraph']],
			['height', ['height']],
			['table', ['table']],
			['insert', ['link', 'picture', 'hr']],
			['view', ['fullscreen']],
		],
		airMode: true
	})

	// MLKeyboard
	// --------------------------------------------------
	$('.ml-keyboard').mlKeyboard();

	$('#keyboard-trigger').mlKeyboard({
		layout: 'it_IT',
		trigger: '#btnTrigger'
	});

})

var edit = function() {
	$('.click2edit').summernote({
		focus: true
	});
}

var save = function() {
	var makrup = $('.click2edit').summernote('code');
	$('.click2edit').summernote('destroy');
}