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

var compareEntry = function(event) {
	//event.preventDefault();
	
	// // Grab the guess from the text input field
	
    guess = $('#enteredNumber').val();

	if (validEntry(guess)) {

        // Convert guess value to an integer for comparison
    	guess = parseInt(guess, 10);

        if (guess === randomNumber) {
            $('#enteredNumber-vs-number').text('You got it! The number was ' + randomNumber + '.');
          	$('#enteredNumber-vs-guess').hide();

 //        // Feedback for a low guess
 	    } 	else if (randomNumber > (guess + 25) ){
            $('#enteredNumber-vs-number').text('Cold');
	       // Feedback for a high guess
         	} 
         	else if (randomNumber > (guess + 15)){
             $('#enteredNumber-vs-number').text('Warm');
        	}
        	else if (randomNumber > (guess + 5)){
             $('#enteredNumber-vs-number').text('Warmer');
        	}

 	    // Blank out the guess input field and return focus to it
         $('#enteredNumber').val('').focus();


     	if (previousEntry) {
          // Find distances of the current and previous guesses from the actual number
        	var previousDistance = Math.abs(randomNumber - previousEntry);
        	var currentDistance = Math.abs(randomNumber - guess);

         // Feedback for guess versus previous guess comparison
           if (guess === previousEntry) {
	                $('.enteredNumber-vs-guess').text("Same guess!");
	            } else if (currentDistance < previousDistance){
	                $('.enteredNumber-vs-guess').text("Getting Hotter...");
	            } else if (currentDistance > previousDistance) {
	                $('.enteredNumber-vs-guess').text("Getting colder...");
	            } else {
	                $('.enteredNumber-vs-guess').text("Same distance...");
	             }

	 		}    // Set new previous guess
	 		        previousEntry = guess;

	 		        // Display the response
	 		        $('#response').show();
	 		    }
			     else {
	 		        //Blank out the guess field and return focus.
		        $('#enteredNumber').val('').focus();
	 		    }
}

// // Bind a click of the reset button to browser reload
$('#entryForm').on('click', '#restart', function() {
	event.preventDefault();
	location.reload();
	 });

// // Bind form submission to the compareEntry function
$('#entryForm').on('click', '#submitbutton', function(){
	compareEntry();
}
)//compareEntry(event));