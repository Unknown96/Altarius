
$(document).ready(function() {
	var pause = 1500
	var height = $('#logo').width();
	var cHeight = height/3

		$('#logo').fadeIn(pause)
		$('#oneteam').delay(pause).animate({
			top: "-=100px",
			opacity: 1
		},pause)

});



$(document).ready(function() {
	
	var height = $('#logo').width();
	var img = $('#oneteam')
		img.css('top', height/3);
		img.css('top', "+=100px")


	
	$(window).resize(function() {
		var height = $('#logo').width();
		var img = $('#oneteam')
		console.log(height)
		img.css('top', height/3);
	})
	

});



