var randomNumber = Math.floor(Math.random() * 100);

$('.beanstalkimage').fadeIn("slow");

$('.gameName').hide().show("slow");


// Grab the guess from the text input field
    var guess = $('.enteredNumber').val();


// Checks to see if the guess is within the parameters given
function validGuess(guess) {
    return isNormalInteger(guess) && +guess <= 100 && +guess >= 0;
}

if (validGuess(guess)) {
	$('.wrong')

 // Convert guess value to an integer for comparison
        guess = parseInt(guess, 10);