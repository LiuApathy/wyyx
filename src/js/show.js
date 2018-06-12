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
