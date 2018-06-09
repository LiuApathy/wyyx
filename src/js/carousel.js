// window.onload = function (){
// 		let index = 0;
// 		let timer = null;
// 		function move(){
// 			index++;
// 			if(index >= $('img').length){
// 				index = 0;
// 			}
// 			$('img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
// 			$('li').eq(index).addClass('active').siblings().removeClass('active');
// 		}

// 		function autoMove(){
// 			timer = setInterval(()=>{
// 				move();
// 			},2000)
// 		}

// 		autoMove();

// 		$('.carousel').hover(function(){
// 			clearInterval(timer);
// 		},function(){
// 			autoMove();
// 		})

// 		$('li').each((k,v)=>{
// 			$(v).click(function(){
// 				index = k;
// 				$(this).addClass('active').siblings().removeClass('active');
// 				$('img').eq(index).fadeIn(1000).siblings().fadeOut(1000);
				
// 			})
// 		})
// 	}