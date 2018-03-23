$(document).ready(function(){
		$("#about").hide();
		$("#abt").click(function(){
				$("#home").hide();
				$("#about").show();
		});
		$("#hm").click(function(){
			$("#about").hide();
			$("#home").show();
		});
		$("#inf").click(function(){
			$("#home").hide();
				$("#about").show();
		});
		$("#in").click(function(){
			$("#home").hide();
				$("#about").show();
		});
		$("#if").click(function(){
			$("#home").hide();
				$("#about").show();
		});
		$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	$("#mor").click(function(){
			$("#home").hide();
				$("#about").show();
		});
});