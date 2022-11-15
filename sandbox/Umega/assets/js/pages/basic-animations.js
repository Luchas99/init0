$(document).ready(function() {
	$('body').on('click', '.animation-demo .btn', function() {
		$(this).closest('.widget-body').find('img').animo({
			animation: $(this).text(),
			duration: $(this).data('duration') || 0.6,
		})
	})
})