//Applies to all elements that have the waiting class.
$(window).scroll(function() {
	$('.waiting').each(function(index) {
    //When height of browser + vertical position of the scroll bar >= element's top value.
  		if($(window).height() + $(window).scrollTop() >= $(this).offset().top + 0){
  			$(this).queue(function(){

						if ($(this).hasClass("L")){
							$(this).addClass('fadeInLeft');
						}
						else if ($(this).hasClass("R")){
							$(this).addClass('fadeInRight');
						}
						else{
							$(this).addClass('fadeInO');
						}

    		});
  		}
	});

});

var body = document.getElementById("body");
var cover = document.getElementById("cover");
var links = Array.from(document.getElementsByClassName("fancyLink"));

document.getElementById("top").addEventListener("click", function(){
	body.classList.add("overflow");
});

links.forEach((element, index) => {
	element.onmouseover = () => {
		cover.dataset.index = index;
	}

	element.onclick = () => {
		body.classList.remove("overflow");
	}
});
