//= require jquery

$(document).ready(function() {
	$("#js-scroll-to-services").click(function() {
		$('html, body').animate({scrollTop: $('.js-section-services').offset().top}, 1000);
	});

	$("#js-scroll-to-journey").click(function() {
		$('html, body').animate({scrollTop: $('.js-section-journey').offset().top}, 1000);
	});

	$("#js-scroll-to-experience").click(function() {
		$('html, body').animate({scrollTop: $('.js-section-experience').offset().top}, 1000);
	});

	$("#js-scroll-to-team").click(function() {
		$('html, body').animate({scrollTop: $('.js-section-team').offset().top}, 1000);
	});

	$.get("svg/sprite.svg", function(data) {
	  var div = document.createElement("div");
	  div.innerHTML = new XMLSerializer().serializeToString(data.documentElement);
	  document.body.insertBefore(div, document.body.childNodes[0]);
	});

	$(".js-nav-icon").click(function() {
		var nav = $(".js-main-nav");

		nav.slideToggle(200);

		if ($(this).find("use").attr("xlink:href") === "#icon-menu") {
			$(this).find("use").attr("xlink:href", "#icon-cross")
		} else {
			$(this).find("use").attr("xlink:href", "#icon-menu")
		}
	});
});
