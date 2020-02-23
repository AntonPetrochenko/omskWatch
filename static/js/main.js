$('.set').click(function () {
	if ($(".set").hasClass("on")) {
		$('.set').removeClass('on');
		$('.side-bar').css('margin-left', '0px');
		$('.exit').css({
			'margin-left': '318px',
		})
		$('.set').css({
			'transform': 'rotate(0deg)',
			'border-radius': '0px 6px 6px 0px',
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
			'transform': 'rotate(180deg)',
			'border-radius': '6px 0px 0px 6px',
			'margin-left': '0px',
		})
	}
});

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
        $('.side-bar').css('opacity', '1');
        $('.exit').css('opacity', '1');
        $('.set').css('opacity', '1');
}

var objectId;