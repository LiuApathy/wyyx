window.onload = function () {
	var nav = document.getElementById('top_fix');
	window.onscroll = function () {
		var top = document.documentElement.scrollTop || document.body.scrollTop;

		if(top >= 280) {
			nav.classList.add('show');
		} else {
			nav.classList.remove('show');
		}
	};
};

$(function(){
  $(".fix_inner3").click(function() {
     $("html,body").animate({scrollTop:0}, 1000);
  }); 
})