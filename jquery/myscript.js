var randomNumber = Math.floor(Math.random() * 100);

$('.beanstalkimage').fadeIn("slow");

$('.gameName').hide().show("slow");

// Global variable//

var previousEntry;


// Checks to see if the guess is within the parameters given
function validEntry(guess) {
    return isNormalInteger(guess) && +guess <= 100 && +guess >= 0;
}

function compareEntry(event) {
	event.preventDefault();

	// Grab the guess from the text input field
    var guess = $('.enteredNumber').val();

	if (validEntry(guess)) {
		// Turn off any error messages
        $('.error').addClass('off').removeClass('on');
        // Convert guess value to an integer for comparison
        guess = parseInt(guess, 10);
        // Feedback for a correct guess. Show the reset button to start a new game.
        if (guess === randomNumber) {
            $('.enteredNumber-vs-number').text('You got it! The number was ' + randonNumber + '.');
            $('.enteredNumber-vs-guess').hide();
            $('#restart').removeClass('off');
        // Feedback for a low guess
        } else if (number > guess) {
            $('.enteredNumber-vs-number').text('Higher than ' + guess);
        // Feedback for a high guess
        } else {
            $('.enteredNumber-vs-number').text('Lower than ' + guess);
        }
    }
    // Blank out the guess input field and return focus to it
        $('.enteredNumber').val('').focus();

        if (previousEntry) {
            // Find distances of the current and previous guesses from the actual number
            var previousDistance = Math.abs(randomNumber - previousEntry);
            var currentDistance = Math.abs(randomNumber - guess);

            // Feedback for guess versus previous guess comparison
            if (guess === previousEntry) {
	                $('.enteredNumber-vs-guess').text("Same guess!");
	            } else if (currentDistance < previousDistance){
	                $('.enteredNumber-vs-guess').text("Getting warmer...");
	            } else if (currentDistance > previousDistance) {
	                $('.enteredNumber-vs-guess').text("Getting colder...");
	            } else {
	                $('.enteredNumber-vs-guess').text("Same distance...");
	            }
        	}

			        // Set new previous guess
			        previousEntry = guess;

			        // Display the response
			        $('.response').removeClass('off');
			    } else {
			        // Give error for invalid guess. Blank out the guess field and return focus.
			        $('.error').removeClass('off').addClass('on');
			        $('.enteredNumber').val('').focus();
			    }
		}
}

// Bind a click of the reset button to browser reload
$('.form').on('click', '#restart', function(event) {
    event.preventDefault();
    location.reload();
});

// Bind form submission to the compareGuess function
$('.form').submit(compareEntry);
});