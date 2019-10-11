// AOS.init({
// 	duration: 1200,
// })
$(document).ready(function(){
	var $header=$('#header');
	$(document).scroll(function() {
		if($(window).scrollTop()){
			$header.addClass('sticky');
		}
		else{
			$header.removeClass('sticky');
		}
	});
	if($(window).scrollTop()){
		$header.addClass('sticky');
	}
});
