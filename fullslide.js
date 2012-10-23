/**
 * Fullslide.js: Full page slider engine
 * Project Kyou is developed under NECTEC's NSC program sponsorship
 */
$(function(){
$("body").keydown(function(e){
	if(e.which >= 37 && e.which <= 40){
		var curSlide;
		$(".item").each(function(){
			if($(this).position().top <= $(window).scrollTop()){
				curSlide = this;
			}
		});
		if(e.which == 37 || e.which == 38){
			var prev = $(curSlide).prevAll(".item");
			if(prev.length > 0){
				$("body").animate({scrollTop: prev.position().top}, 250);
			}
		}else if(e.which == 39 || e.which == 40){
			var next = $(curSlide).nextAll(".item");
			if(next.length > 0){
				$("body").animate({scrollTop: next.position().top}, 250);
			}
		}
		return false;
	}
});
});