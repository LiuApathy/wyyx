$(".search_text").focus(function(){
	$(".search_list").css("display","block");
	var timer = setInterval(function(){
		$(".search_list").css("display","none");
	},5000);
	$(".search_list").mouseover(function(){
		clearInterval(timer);
		$(".search_list").css("display","block");
		$(".search_list").mouseout(function(){
			$(".search_list").css("display","none");
		});
	});
});

// $(".nav_show").mouseover(function(){
// 	$(".nav_option").css("display","block");
// 	$(".nav_show").mouseout(function(){
// 		$(".nav_option").css("display","none");
// 	});
// });

// $(function(){
// 	$(".nav_option1").css({ "z-index": "10" });
// 	$(".nav_option2").css({ "z-index": "9" });
// 	$('.search_nav .big_list li').hover(function () {
// 		var thisId = $(this).attr("id");
// 		$(".nav_option").animate({ "opacity": "0" }, 300);
// 		$(".nav_option").css({ "z-index": "0" });
// 		// $(this).addClass("cur");
// 		$(".nav_option").addClass("nav_option1");
// 		$(thisId).stop(true, true).animate({ "opacity": "1" }, 300);
// 		$(thisId).css({ "z-index": "20" });
// 	}, function () {
// 		var thisId = $(this).attr("id");
// 		$(this).removeClass("nav_option1");
// 	});
// });