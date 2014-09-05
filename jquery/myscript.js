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

}