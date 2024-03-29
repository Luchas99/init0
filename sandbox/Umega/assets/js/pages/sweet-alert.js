$(document).ready(function() {
	$('#sweet-1').on('click', function() {
		swal({
			title: "Here's a message!",
			confirmButtonClass: "btn-raised btn-primary",
			confirmButtonText: "OK",
		})
	})

	$('#sweet-2').on('click', function() {
		swal({
			title: "Here's a message!",
			text: "It's pretty, isn't it?",
			confirmButtonClass: "btn-raised btn-primary",
			confirmButtonText: "OK",
		})
	})

	$('#sweet-3').on('click', function() {
		swal({
			title: "Good job!",
			text: "You clicked the button!",
			type: "success",
			confirmButtonClass: "btn-raised btn-success",
			confirmButtonText: "OK",
		})
	})

	$('#sweet-4').on('click', function() {
		swal({
			title: "Good job!",
			text: "You clicked the button!",
			type: "info",
			confirmButtonClass: "btn-raised btn-info",
			confirmButtonText: "OK",
		})
	})

	$('#sweet-5').on('click', function() {
		swal({
			title: "Good job!",
			text: "You clicked the button!",
			type: "warning",
			confirmButtonClass: "btn-raised btn-warning",
			confirmButtonText: "OK",
		})
	})

	$('#sweet-6').on('click', function() {
		swal({
			title: "Good job!",
			text: "You clicked the button!",
			type: "error",
			confirmButtonClass: "btn-raised btn-danger",
			confirmButtonText: "OK",
		})
	})

	$('#sweet-7').on('click', function() {
		swal({
			title: "Are you sure?",
			text: "Your will not be able to recover this imaginary file!",
			type: "warning",
			showCancelButton: true,
			cancelButtonClass: "btn-raised btn-default",
			cancelButtonText: "Cancel!",
			confirmButtonClass: "btn-raised btn-danger",
			confirmButtonText: "Yes, delete it!",
			closeOnConfirm: false
		}, function() {
			swal({
				title: "Deleted!",
				text: "Your imaginary file has been deleted.",
				type: "success",
				confirmButtonClass: "btn-raised btn-success",
				confirmButtonText: "OK",
			})
		})
	})

	$('#sweet-8').on('click', function() {
		swal({
			title: "Are you sure?",
			text: "You will not be able to recover this imaginary file!",
			type: "warning",
			showCancelButton: true,
			confirmButtonClass: "btn-raised btn-danger",
			confirmButtonText: "Yes, delete it!",
			cancelButtonClass: 'btn-raised btn-default',
			cancelButtonText: "No, cancel plx!",
			closeOnConfirm: false,
			closeOnCancel: false
		}, function(isConfirm) {
			if (isConfirm) {
				swal({
					title: "Deleted!",
					text: "Your imaginary file has been deleted.",
					type: "success",
					confirmButtonClass: "btn-raised btn-success",
					confirmButtonText: "OK",
				})
			} else {
				swal({
					title: "Cancelled",
					text: "Your imaginary file is safe :)",
					type: "error",
					confirmButtonClass: "btn-raised btn-danger",
					confirmButtonText: "OK",
				})
			}
		})
	})

	$('#sweet-9').on('click', function() {
		swal({
			title: "Auto close alert!",
			text: "I will close in 2 seconds.",
			timer: 2000,
			confirmButtonClass: "btn-raised btn-primary",
			confirmButtonText: "OK",
		})
	})

	$('#sweet-10').on('click', function() {
		swal({
			title: "Sweet!",
			text: "Here's a custom image.",
			imageUrl: "build/images/icons/01.png",
			confirmButtonClass: "btn-raised btn-primary",
			confirmButtonText: "OK",
		})
	})
})