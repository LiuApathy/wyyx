$(function(){
	let index = 0;
	let timer = null;
	function move(){
		index++;
		if(index >= $('.carousel .bg img').length){
			index = 0;
		}
		$('.carousel .bg img').eq(index).fadeIn(500).siblings().fadeOut(500);
		$('.carousel_list li').eq(index).addClass('active').siblings().removeClass('active');
	}

	function autoMove(){
		timer = setInterval(()=>{
			move();
		},3500)
	}

	autoMove();

	$('.carousel').hover(function(){
		clearInterval(timer);
	},function(){
		autoMove();
	})

	$('.carousel_list li').each((k,v)=>{
		$(v).mouseover(function(){
			index = k;
			$(this).addClass('active').siblings().removeClass('active');
			$('.carousel .bg img').eq(index).fadeIn(500).siblings().fadeOut(500);
			
		})
	})
});

$(function(){
	let index = 0;
	let timer = null;
	function move(){
		index++;
		if(index >= $('.new_content_list li').length){
			index = 0;
		}
		$('.new_content_list li').eq(index).fadeIn(1500).siblings().fadeOut(1500);
	}

	function autoMove(){
		timer = setInterval(()=>{
			move();
		},3500)
	}

	autoMove();
});

$(function(){
	let index = 0;
	let timer = null;
	function move(){
		index++;
		if(index >= $('.welfare .left_box img').length){
			index = 0;
		}
		$('.welfare .left_box img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
	}

	function autoMove(){
		timer = setInterval(()=>{
			move();
		},2000)
	}
	autoMove();
	
});

$(function(){
	var swiper = new Swiper('.swiper-container', {
      	slidesPerView: 3,
      	spaceBetween: 30,
      	pagination: {
        	el: '.swiper-pagination',
        	clickable: true,
      	},
   	});
});
