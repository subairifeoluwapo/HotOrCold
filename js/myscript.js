$('.beanstalkimage').fadeIn("slow");

$('.gameName').hide().show("slow");

// // Global variable//
var randomNumber = Math.floor(Math.random() * 100);

var previousEntry;
var guess;

// // Checks to see if the guess is within the parameters given

var validEntry = function(guess) {
	return (guess <= 100 && guess >= 0);
}

var compareEntry = function() {
	// // Grab the guess from the text input field
    guess = $('#enteredNumber').val();

    if (guess === '' || guess === ' ' || guess === 'string') {
        $('#invalidEntry').append('Invalid Entry! Enter a number between 0 and 100.')
    }

	else if (validEntry(guess)) {

        // Convert guess value to an integer for comparison
    	guess = parseInt(guess, 10);
	        if (guess === randomNumber) {
	            $('#enteredNumber-vs-number').text('You got it! The number was ' + randomNumber + '.');
	 	    } 	
	            else if (Math.abs(guess - randomNumber) <= 5) {
	                $('#enteredNumber-vs-number').text('You are very hot!');
	            }
	            else if (Math.abs(guess - randomNumber)  <= 10) {
	                $('#enteredNumber-vs-number').text('You are hot!');
	            }
	        	else if (Math.abs(guess - randomNumber)  >= 10 && Math.abs(guess - randomNumber) <= 20) {
	                $('#enteredNumber-vs-number').text('You are warm!');
	            }
	            else if (Math.abs(guess - randomNumber)  >= 20 && Math.abs(guess - randomNumber) <= 30) {
	                $('#enteredNumber-vs-number').text('You are cold!');
	            }
	            else if (Math.abs(guess - randomNumber)  >= 30 && Math.abs(guess - randomNumber) <= 40) {
	                $('#enteredNumber-vs-number').text('You are very cold!');
	            }
	            else {
	                $('#enteredNumber-vs-number').text('You are freezing cold!');
	            }
	 	    // Blank out the guess input field and return focus to it
	         $('#enteredNumber').val('').focus();
		}    
				    else {
		 		        //Blank out the guess field and return focus.
			       		$('#enteredNumber').val('').focus();
		 		    }
}

// Bind a click of the reset button to browser reload
$('#entryForm').on('click', '#restart', function() {
	event.preventDefault();
	location.reload();
	 });

// Bind form submission to the compareEntry function
$('#entryForm').on('click', '#submitbutton', function(){
	compareEntry();
});