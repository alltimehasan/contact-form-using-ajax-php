$(function() {

	// Get the form.
	var form = $('#contactForm');

	// Get The submit button
	var submitBtn = $('#contactForm > :submit');

	// Get the messages div.
	var responseMsg = $('#responseMsg');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Make the button disabled
		$(submitBtn).attr('disabled', 'disabled');

		// Show the processing message to the user
		$(responseMsg).text('Please wait ...');
		$(responseMsg).addClass('processing');
		$(responseMsg).removeClass('error');
		$(responseMsg).removeClass('success');

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make the button active
			$(submitBtn).removeAttr('disabled');

			// Make sure that the responseMsg div has the 'success' class.
			$(responseMsg).removeClass('processing');
			$(responseMsg).removeClass('error');
			$(responseMsg).addClass('success');

			// Set the message text.
			$(responseMsg).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#message').val('');
			grecaptcha.reset();
		})
		.fail(function(data) {
			// Make the button active
			$(submitBtn).removeAttr('disabled');

			// Make sure that the responseMsg div has the 'error' class.
			$(responseMsg).removeClass('processing');
			$(responseMsg).removeClass('success');
			$(responseMsg).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(responseMsg).text(data.responseText);
			} else {
				$(responseMsg).text('Oops! An error occurred and your message could not be sent.');
			}
		});

	});

});