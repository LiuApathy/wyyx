$(function(){
	let num = $("input[type='text']").val();
	$("#add").click(function(){
		num++;
		$("input[type='text']").val(num);
	});
	$("#minus").click(function(){
		if(num>1){
			num--;
			$("input[type='text']").val(num);
		} else{
			$("input[type='text']").val(1);
		}
	});
});
