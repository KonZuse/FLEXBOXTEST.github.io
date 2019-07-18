$(function () {
		$("#transform1").click(function () {
		$('.case__holder').toggleClass('direction-column');	
	});
		$("#transform2").click(function () {
		$('.case__holder').toggleClass('justify-content-between');	
	});
		$("#transform3").click(function () {
		$('.case__holder').toggleClass('justify-content-end');	
	});
		$("#transform4").click(function () {
		$('.case__holder').toggleClass('justify-content-center');	
	});
		

		$("#transform5").click(function () {
		$('.case__card_long:nth-child(2)').toggleClass('down-position');
		$('.case__card_long:nth-child(3)').toggleClass('down-position');
	});
		$("#transform6").click(function () {
		$('.case__card_long:last-child').toggleClass('left-position');
		$('.case__card_long:first-child').toggleClass('left-position');
	});	
		$("#transform7").click(function () {
		$('.case__card_long:last-child').toggleClass('order-position-minus');
		$('.case__card_long:first-child').toggleClass('order-position-plus');
	});

});

