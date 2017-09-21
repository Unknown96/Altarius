
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
		img.css('top', height/3);
	})
	

	$('.slider').hover(function() {
		$('.slider').find('h1').slideToggle(400);

	})

	$('.author').click(function() {
		$('.blur p').html('Author: Robin Kastorp<br>Contact: Altarius@gmail.com')
		$('.blur').fadeToggle(400);

	});

	$('.blur span').click(function() {
	var notify = $('.blur')
		notify.fadeToggle(400);
		notify.find('button').hide()
		notify.find('input').hide()
	});

	$('.admin').click(function() {
		var notify = $('.blur')
		notify.find('p').html('Login using your access key.')
		notify.find('input').css('display', 'block')
		notify.find('button').show()
		$('.blur').fadeToggle(400);
	});

	$('.blur .cancel').click(function() {
	var notify = $('.blur')
		notify.fadeToggle(400);
		notify.find('button').hide()
		notify.find('input').hide()
	});

});



