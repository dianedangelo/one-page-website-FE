	$(document).ready(function() {

		$("nav").onePageNav();

	$(".menu-icon").click(function(){
		$("nav ul").slideToggle();
	});

	var menu = $("nav ul");

	$(window).resize(function(){
	var w = $(window).width();
	if (w > 768 && menu.is(":hidden")) {
		menu.removeAttr("style");
	}

	});

		$(".fancybox").fancybox();


});