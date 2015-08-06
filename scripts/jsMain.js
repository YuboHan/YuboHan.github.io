(function() {
	/*var app = angular.module('myWebsite', []);

	app.controller("HeaderController", function() {
		this.selected = 0;
		this.isSelected = function(x) {
			return (this.selected == x);
		};
	}); */

	var welcomePageHeight;
	var aboutMePos;
	var skillsPos;
	var experiencesPos;
	var projectsPos;
	var contactMePos;
	var scrollYPos;
	var temp;

	function resetNavigationBar() {
		$(".navigation-block").css("background-color", "");
	}

	function getYPosOfDivs() {
		welcomePageHeight = $("#welcome-page").height();
		aboutMePos = $("#about-me").offset().top;
		skillsPos = $("#skills").offset().top;
		experiencesPos = $("#experiences").offset().top;
		projectsPos = $("#projects").offset().top;
		contactMePos = $("#contact-me").offset().top;
	}

	function adjustNavBar() {
		if ( $(window).width() > 1183 ) {
			$("#navigation").css("left", "88.16568%");
		} else {
			$("#navigation").css("left", "0");
		}
	}

	$(function(){
		getYPosOfDivs();
		adjustNavBar();

		$(".welcome-menu-button-text").hover(function() {
			$(this).css("color", "red");
		}, function(){
			$(this).css("color", "#3D1F00");
		});

		$(".navigation-block-text").hover(function() {
			$(this).css("color", "grey");
		}, function() {
			$(this).css("color", "white");
		});

		$(".welcome-about-me").click(function(e) {
        	e.preventDefault();
        	$("#about-me").scrollintoview({ duration: "normal"});
		});

		$(".welcome-skills").click(function(e) {
        	e.preventDefault();
        	$("#skills").scrollintoview({ duration: "normal"});
		});

		$(".welcome-experiences").click(function(e) {
        	e.preventDefault();
        	$("#experiences").scrollintoview({ duration: "normal"});
		});

		$(".welcome-projects").click(function(e) {
        	e.preventDefault();
        	$("#projects").scrollintoview({ duration: "normal"});
		});

		$(".welcome-contact-me").click(function(e) {
        	e.preventDefault();
        	$("#contact-me").scrollintoview({ duration: "normal"});
		});

		$(window).on("resize", function(event){
			getYPosOfDivs();
			adjustNavBar();
		});

		$(window).scroll(function() {
			/* TODO: Right now if we remove this, there will be an error if you refresh page too much*/
			getYPosOfDivs();
			scrollYPos = $(document).scrollTop();
			if (scrollYPos < welcomePageHeight - 50) {
				$("#navigation").css({
					'position':'absolute',
					'top':'100%'
				});
			} else {
				$("#navigation").css({
					'position':'fixed',
					'top':'50px'
				});
			}
			/*console.log("skillsPos: "+skillsPos);
			console.log();
			console.log();
			console.log();
			console.log();
			console.log();
			console.log();
			console.log("scrollYPos" + scrollYPos);*/
			if (scrollYPos < skillsPos - $(window).height() * 0.3) {
				resetNavigationBar();
				$("#navigation-about-me").css("background-color", "#FF704D");
			} else if (scrollYPos < experiencesPos - $(window).height() * 0.3) {
				resetNavigationBar();
				$("#navigation-skills").css("background-color", "#FF704D");
			} else if (scrollYPos < projectsPos - $(window).height() * 0.3) {
				resetNavigationBar();
				$("#navigation-experiences").css("background-color", "#FF704D");
			} else if (scrollYPos < contactMePos - $(window).height() * 0.3) {
				resetNavigationBar();
				$("#navigation-projects").css("background-color", "#FF704D");
			} else {
				resetNavigationBar();
				$("#navigation-contact-me").css("background-color", "#FF704D");
			}
		});
	});
})();