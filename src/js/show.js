$(".search_text").focus(function(){
	$(".search_list").css("display","block");
	var timer = setInterval(function(){
		$(".search_list").css("display","none");
	},1500);
	$(".search_list").mouseover(function(){
		clearInterval(timer);
		$(".search_list").css("display","block");
		$(".search_list").mouseout(function(){
			$(".search_list").css("display","none");
		});
	});
});

$(".nav_show").mouseover(function(){
	$(".nav_option").css("display","block");
	$(".nav_show").mouseout(function(){
		$(".nav_option").css("display","none");
	});
});