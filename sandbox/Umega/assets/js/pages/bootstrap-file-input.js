$(document).ready(function() {

	// Bootstrap File Input
	// --------------------------------------------------

	$('#input-5').fileinput({
		showCaption: false
	})

	$('#input-6').fileinput({
		showUpload: false,
		maxFileCount: 10,
		mainClass: 'input-group-lg'
	})

	$('#input-8').fileinput({
		initialPreview: [
			'<img src="build/images/backgrounds/moon.jpg" class="file-preview-image" alt="The Moon" title="The Moon">',
			'<img src="build/images/backgrounds/earth.jpg" class="file-preview-image" alt="The Earth" title="The Earth">'
		],
		overwriteInitial: false,
		maxFileSize: 100,
		initialCaption: 'The Moon and the Earth'
	})

	$('#input-9').fileinput({
		initialPreview: [
			'<img src="build/images/backgrounds/moon.jpg" class="file-preview-image" alt="The Moon" title="The Moon">',
			'<img src="build/images/backgrounds/earth.jpg" class="file-preview-image" alt="The Earth" title="The Earth">'
		],
		overwriteInitial: true,
		initialCaption: 'The Moon and the Earth'
	});

	$('#input-10').fileinput({
		previewFileType: 'image',
		browseClass: 'btn btn-success',
		browseLabel: 'Pick Image',
		browseIcon: '<i class="ti-image"></i>&nbsp;',
		removeClass: 'btn btn-danger',
		removeLabel: 'Delete',
		removeIcon: '<i class="ti-trash"></i>&nbsp;',
		uploadClass: 'btn btn-info',
		uploadLabel: 'Upload',
		uploadIcon: '<i class="ti-upload"></i>&nbsp;'
	})

	$('#input-11').fileinput({
		previewFileType: 'text',
		allowedFileExtensions: ['txt', 'md', 'ini', 'text'],
		previewClass: 'bg-warning'
	})

	$('#input-12').fileinput({
		showUpload: false,
		layoutTemplates: {
			main1: '{preview}\n' +
				'<div class=\'input-group {class}\'>\n' +
				'   <div class=\'input-group-btn\'>\n' +
				'       {browse}\n' +
				'       {upload}\n' +
				'       {remove}\n' +
				'   </div>\n' +
				'   {caption}\n' +
				'</div>'
		}
	})

	$('.btn-modify').on('click', function() {
		var $btn = $(this),
			$input = $('#input-13');
		if ($btn.text() == 'Modify') {
			$('#input-13').fileinput('disable').fileinput('refresh', {
				showUpload: false
			});
			$btn.html('Revert');
			alert('Hurray! I have disabled the input and hidden the upload button.');
		} else {
			$('#input-13').fileinput('enable').fileinput('refresh', {
				showUpload: true
			});
			$btn.html('Modify');
			alert('Hurray! I have reverted back the input to enabled with the upload button.');
		}
	})

	$('#input-14').fileinput({
		maxFileCount: 10,
		allowedFileTypes: ['image', 'video']
	})

	$('#input-15').fileinput({
		maxFileCount: 10,
		allowedFileExtensions: ['jpg', 'gif', 'png', 'txt']
	})

	$('#input-16').fileinput({
		showPreview: false,
		allowedFileExtensions: ['zip', 'rar', 'gz', 'tgz'],
		elErrorContainer: '#errorBlock'
	})

})