$('.set').click(function () {
	if ($(".set").hasClass("on")) {
		$('.set').removeClass('on');
		$('.side-bar').css('margin-left', '0px');
		$('.exit').css({
			'margin-left': '318px',
		})
		$('.set').css({
			'margin-left': '318px',
		})
	} 
	else {
		$('.set').addClass('on');
		$('.side-bar').css('margin-left', '-318px');
		$('.exit').css({
			'margin-left': '0px',
		})
		$('.set').css({
			'margin-left': '0px',
		})
	}
});