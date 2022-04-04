//Applies to all elements that have the waiting class.
$(window).scroll(function() {
	$('.waiting').each(function(index) {
    //When height of browser + vertical position of the scroll bar >= element's top value.
  		if($(window).height() + $(window).scrollTop() >= $(this).offset().top + 0){

						if ($(this).hasClass("L")){
							$(this).addClass('fadeInLeft');
						}
						else if ($(this).hasClass("R")){
							$(this).addClass('fadeInRight');
						}
						else if ($(this).hasClass("U")){
							$(this).addClass('fadeInUp');
						}
						else{
							$(this).addClass('fadeInO');
						}

  		}
	});
});
