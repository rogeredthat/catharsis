var counter = 0;
var slideshow = null;
var sliderLength = $('#gallery .slide').length;

$.fn.nextOrFirst = function(selector) {
    var next = this.next(selector);
    return (next.length) ? next : this.prevAll(selector).last();
}

$('#gallery .tracker div').click(function(){
	counter = $(this).parent().find('div').index($(this));
	moveSliderTo(counter);
});

function moveSliderTo(index) {
	$('#gallery .tracker div').eq(index).addClass('active').siblings().removeClass('active');
	$('#gallery .slide').eq(index).addClass('active').siblings().removeClass('active');
	$('#gallery .slide_caption').eq(index).addClass('active').siblings().removeClass('active');
	counter = (counter+1)%sliderLength;
	if(slideshow) clearTimeout(slideshow);
	slideshow = setTimeout(function(){
		moveSliderTo(counter);
	},5000);
};

moveSliderTo(0);

window.onscroll = function() {
	var val = "50% " + ((window.scrollY*100)/document.body.scrollHeight) + "%";
	document.getElementById('home').style.backgroundPosition = val;
}