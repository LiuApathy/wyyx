// $(function(){
// 	let top = document.documentElement.scrollTop || document.body.scrollTop;
// 	window.onscroll = function(){
// 		if(top >= 400) {
// 			// $('.top_fix').addClass('show');
// 			$('.top_fix').css("top","0");
// 		} else {
// 			// $('.top_fix').removeClass('show');
// 			$('.top_fix').css("top","-60px");
// 		}
// 	}
// })

$(function(){
  $(".fix_inner3").click(function() {
     $("html,body").animate({scrollTop:0}, 1000);
  }); 
})