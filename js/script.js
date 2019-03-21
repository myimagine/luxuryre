
	
(function($) {
	$(function() {
		$('.icon').on('click', function(){
			$(this).closest('.menu').toggleClass('menu-open');
		});
	});
})(jQuery);



var $btnTop = $(".btn-top")
$(window).on("scroll",function(){
  if ($(window).scrollTop() >=20){
  	$btnTop.fadeIn();
  }else{
  	$btnTop.fadeOut();
  }
});

$btnTop.on("click", function(){
$("html,body").animate({scrollTop:0}, 900)
});




var slideIndex = 1;
showSlides(slideIndex);

function plusSliders(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlider");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length){
	   slideIndex = 1
	}
	if(n < 1){
		slideIndex=slides.length
	}
	for (i=0; i < slides.length; i++ ){
	   slides[i].style.display= "none";
	}
	for (i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");
	}
	slides[slideIndex-1].style.display = "block";
	 dots[slideIndex-1].className+="active";
}



