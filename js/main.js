$(document).on("ready", function(){
	var navHeight = $(".nav-wrapper").outerHeight(true);
	$("body").css("margin-top", navHeight);
	$(".nav-main a").on("click", function(e){
		console.log(e);
		e.preventDefault();
		$('.nav-main a').removeClass("is-current");
		$(this).addClass("is-current");
		console.log($(this).attr("href"));
		var whereToScroll = $(this).attr("href");
		$.scrollTo(whereToScroll, {
			duration: 800,
			offset: -navHeight -10,
		});
	});
});
