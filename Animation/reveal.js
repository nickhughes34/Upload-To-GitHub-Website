//Applies to all elements that have the reveal class.
$("#document").ready(function(){
        setTimeout(function(){

          $('.reveal').each(function(index) {
            $(this).delay($(this).data("wait")).queue(function(){
              $(this).addClass('go');
            });
          });

        }, 3000);
});

//Applies to all elements that have the waitingReveal class.
$(window).scroll(function() {
	$('.waitingReveal').each(function(index) {
    //When height of browser + vertical position of the scroll bar >= element's top value.
  		if($(window).height() + $(window).scrollTop() >= $(this).offset().top + 300){
  			$(this).delay($(this).data('wait')).queue(function(){
      			$(this).addClass('reveal go');
    		});
  		}
	});
});
