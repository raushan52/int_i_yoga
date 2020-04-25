jQuery(document).ready(function($){
	


	$('.arrow').on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({ 
			scrollTop: $('main').offset().top
		}, 500);
	});


	var sliderLength = $(".hero .slider > .slide").length;
	if (sliderLength > 1) {

		// $(".hero .slider > .slide:gt(0)").hide();

		$(".hero .slider > .slide .text:not(:first)").hide();
		$(".hero .slider > .slide .hero_image:not(:first)").hide();

		var first = $(".hero .slider > .slide:first");
		$(first).addClass('active');

		setInterval(function() {

			var active = $('.hero .slider > .slide.active');
			var next = $(active).next();

			$(active).find('.text').animate({
				left: -800
			}, 400, function () {

				if (next.length == 0 ) {
					next = $(".hero .slider > .slide:first");
				}
				$(next).find('.text').fadeIn( "fast", function() {

					$(next).find('.text').animate({
						left: 0
					}, 400, function () {
						

					});

					$(next).find('.hero_image').fadeIn(500);
					$(next).addClass('active');

					$(active).find('.text').fadeOut(500);
					$(active).find('.hero_image').fadeOut(500);
					$(active).removeClass('active');

				});


			});

		}, 6000);

	}


	$('#classesModal').on('show.bs.modal', function (e) {
		console.log(this); 
		console.log(e); 

		var classItem = e.relatedTarget;
		var classImage = $(classItem).find('img').attr('src');
		var classText = $(classItem).data('description');

		console.log(classText); 

		$(this).find('.modal-body img').attr('src', classImage);
		$(this).find('.modal-body .text').text(classText);

		
	});

	$('.testimonials-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		arrows: false,
		adaptiveHeight: true
	});
	


});