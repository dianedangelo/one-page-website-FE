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

///////////////////////////////////////////



// }); $(window).on("scroll",function(){
 // 	if(window.scrollY < 320){
 // 		// $("#socialMedia").css("position","absolute");
 // 	$("#socialMedia").removeClass("sticky");
 // 	} else {
 // 		// $("#socialMedia").css("position", "fixed");
 // 		$("#socialMedia").addClass("sticky");
 // 	}
 // 	if(window.scrollY < 603){
 // 		$("header").css("background-color","rgba(100,10,20,.75)");
 // 	}
 // 	else{
 // 		$("header").css("background-color","rgba(200,0,0,.5)" );
 // 	}
 // });

	// $(".link").on("click",function(e){
	// 	e.preventDefault();
	// 	var scrollTime = 500;
	// 	if($(this).hasClass("link_home")){
	// 	$.scrollTo("#home",scrollTime, {
	// 	offset: -100
	// 	});
	// 	}else if($(this).hasClass("link_work")){
	// 	$.scrollTo("#work", scrollTime);
	
	// 	}else if($(this).hasClass("link_resume")){
	// 	$.scrollTo("#resume", scrollTime);

	// 	}
	// });

});


