
$('.beanstalkimage').fadeIn("slow");

$('.gameName').hide().show("slow");


var randomNumber = Math.floor(Math.random() % 1);


$( "input[type='number']" ).on( "blur", function() {
if(!this.value ) {
alert( "Please enter a number between 0 and 100!" );
}
});

