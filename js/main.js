var main = function() {

	//to submit form input
 	$('#b').submit(function() {

 		var text = $('#todo').val();

 		console.log(text);
 		
 		$(text).appendTo('.list');

 		return false

 	});

};











// calling main function
$(document).ready(main);