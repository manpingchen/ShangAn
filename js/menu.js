$(function () {

	var winSize = 768;
	var isLargeWindow = $(window).width() > winSize;
	var menu = $(".menu_wrap");
	var toggle = $(".burger");
	var close = $(".close");

	clickBinding(); // binding click functions for toogle, menu and close 
	toggleMenu(); // trigger toggleMenu function once at beginning
	
	$(window).on('resize', function () {
		toggleMenu(); // trigger toggleMenu function when window resizing
	});

	function toggleMenu() {
		isLargeWindow = $(window).width() > winSize;

		if (isLargeWindow) {
			menu.show();
			close.hide();
			toggle.hide();
		} else {
			menu.hide();
			close.hide();
			toggle.show();
		}
	}

	function clickBinding() {
		toggle.click(function () {
			menu.fadeIn(200);
			close.fadeIn(400);
			toggle.fadeOut(200);
		});

		menu.click(function () {
			menu.fadeOut(200);
			close.fadeOut(200);
			toggle.fadeIn(200);
		});

		close.click(function () {
			menu.fadeOut(200);
			close.fadeOut(200);
			toggle.fadeIn(200);
		});
	}
	
});