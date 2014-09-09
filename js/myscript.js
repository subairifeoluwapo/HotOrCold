


var HotOrColdGame = {

	randomNumber: function() {
		randomNumber = Math.floor(Math.random() * 100);
	},

	animate: function() {
		$('.beanstalkimage').fadeIn("slow");
		$('.gameName').hide().show("slow");
	},

	validEntry: function() {
		var guess = $('#enteredNumber').val();
	    if (guess === '' || guess === ' ' || guess === 'string') {
	        $('#invalidEntry').append('Invalid Entry! Enter a number between 0 and 100.');
	    } else {return guess}
	},

	compareEntry: function() {
		
		if (HotOrColdGame.validEntry()) {
			$('#invalidEntry').remove();
			var guess = $('#enteredNumber').val();
	        // Convert guess value to an integer for comparison
	    	guess = parseInt(guess, 10);
	        if (guess === randomNumber) {
	            $('#enteredNumber-vs-number').text('You got it Genius! The number was ' + randomNumber + '.');
	 	    } 	
	            else if (Math.abs(guess - randomNumber) <= 5) {
	                $('#enteredNumber-vs-number').text('You are hotter than the Mecury!');
	            }
	            else if (Math.abs(guess - randomNumber)  <= 10) {
	                $('#enteredNumber-vs-number').text('You are hot');
	            }
	        	else if (Math.abs(guess - randomNumber)  >= 10 && Math.abs(guess - randomNumber) <= 20) {
	                $('#enteredNumber-vs-number').text('You are warm...Global-Warming has nothing on you !');
	            }
	            else if (Math.abs(guess - randomNumber)  >= 20 && Math.abs(guess - randomNumber) <= 30) {
	                $('#enteredNumber-vs-number').text('You are cold!');
	            }
	            else if (Math.abs(guess - randomNumber)  >= 30 && Math.abs(guess - randomNumber) <= 40) {
	                $('#enteredNumber-vs-number').text('You are as cold as Neptune!');
	            }
	            else {
	                $('#enteredNumber-vs-number').text('You are so you could freeze the ocean!');
	            }
	 	    // Blank out the guess input field and return focus to it
	         $('#enteredNumber').val('').focus();
		}    
				    else {
		 		        //Blank out the guess field and return focus.
			       		$('#enteredNumber').val('').focus();
		 		    }
	},


	// Bind a click of the reset button to browser reload//
	restart: function() {
		event.preventDefault();
		location.reload();
	},

	initialize: function() {
	$('#submitbutton').click(HotOrColdGame.compareEntry);
	$('#entryForm').on('click', '#restart', HotOrColdGame.restart);
	},

}
$(document).ready(HotOrColdGame.randomNumber);
$(document).ready(HotOrColdGame.animate);
$(document).ready(HotOrColdGame.initialize);