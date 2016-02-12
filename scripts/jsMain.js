(function () {
	/*var app = angular.module('myWebsite', []);

	app.controller("HeaderController", function() {
		this.selected = 0;
		this.isSelected = function(x) {
			return (this.selected == x);
		};
	}); */
    
    "use strict";
    /*jslint browser: true*/
    /*global $, jQuery, alert*/
    /*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
    /*global define */
    
	var welcomePageHeight, aboutMePos, skillsPos, experiencesPos, projectsPos, contactMePos, scrollYPos, temp;

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
		if ($(window).width() > 1183) {
			$("#navigation").css("left", "88.16568%");
			$("#navigation").css("right", "auto");
		} else {
			$("#navigation").css("left", "auto");
			$("#navigation").css("right", "20px");
		}
	}

	function adjustWelcomePage() {
		if ($(window).width() > 1183) {
			$("#welcome-name").css("margin-left", "-550px");
			$("#welcome-menu").css("margin-left", "150px");
		} else if ($(window).width() > 974) {
			$("#welcome-name").css("margin-left", "-375px");
			$("#welcome-menu").css("margin-left", "-25px");
		} else {
			$("#welcome-name").css("margin-left", "-200px");
		}
	}
    
    function adjustAboutInfoBackground() {
        var background = $("#about-info-box-background");
        background.css("top", $("#about-info-box").position().top);
        background.css("left", $("#about-info-box").position().left);
        background.css("height", $("#about-info-box").outerHeight());
        background.css("width", $("#about-info-box").outerWidth());
        background.css("margin-top", $("#about-info-box").css("margin-top"));
    }

	$(function () {
		getYPosOfDivs();
		adjustNavBar();
		adjustWelcomePage();
        adjustAboutInfoBackground();

		$(".welcome-menu-button-text").hover(function () {
			$(this).css("color", "#B4D235");
		}, function () {
			$(this).css("color", "whitesmoke");
		});

		$(".navigation-block-text").hover(function () {
			$(this).css("color", "#B4D235");
		}, function () {
			$(this).css("color", "white");
		});
        
        $("#about-info-box").hover(function () {
            $("#about-me-background").fadeTo("fast", 0.2);
        }, function () {
            $("#about-me-background").fadeTo("fast", 1);
        });

		$(".welcome-about-me").click(function (e) {
            e.preventDefault();
            $("#about-me").scrollintoview({ duration: "normal"});
		});

		$(".welcome-skills").click(function (e) {
            e.preventDefault();
            $("#skills").scrollintoview({ duration: "normal"});
		});

		$(".welcome-experiences").click(function (e) {
            e.preventDefault();
            $("#experiences").scrollintoview({ duration: "normal"});
		});

		$(".welcome-projects").click(function (e) {
            e.preventDefault();
            $("#projects").scrollintoview({ duration: "normal"});
		});

		$(".welcome-contact-me").click(function (e) {
            e.preventDefault();
            $("#contact-me").scrollintoview({ duration: "normal"});
		});

		$(window).on("resize", function (event) {
			console.log($(window).width());
			getYPosOfDivs();
			adjustNavBar();
			adjustWelcomePage();
            adjustAboutInfoBackground();
		});

		$(window).scroll(function () {
			/* TODO: Right now if we remove this, there will be an error if you refresh page too much*/
			getYPosOfDivs();
			scrollYPos = $(document).scrollTop();
			if (scrollYPos < welcomePageHeight) {
				$("#dropdown").css({
					'position': 'absolute',
					'top': '100%'
				});
			} else {
				$("#dropdown").css({
					'position': 'fixed',
					'top': '0%'
				});
			}
			if (scrollYPos < welcomePageHeight - 50) {
				$("#navigation").css({
					'position': 'absolute',
					'top': '100%'
				});
			} else {
				$("#navigation").css({
					'position': 'fixed',
					'top': '50px'
                    
				});
			}
			if (scrollYPos < skillsPos - $(window).height() * 0.3) {
				resetNavigationBar();
				$("#navigation-about-me").css("background-color", "#088DC5");
			} else if (scrollYPos < experiencesPos - $(window).height() * 0.3) {
				resetNavigationBar();
				$("#navigation-skills").css("background-color", "#088DC5");
			} else if (scrollYPos < projectsPos - $(window).height() * 0.3) {
				resetNavigationBar();
				$("#navigation-experiences").css("background-color", "#088DC5");
			} else if (scrollYPos < contactMePos - $(window).height() * 0.3) {
				resetNavigationBar();
				$("#navigation-projects").css("background-color", "#088DC5");
			} else {
				resetNavigationBar();
				$("#navigation-contact-me").css("background-color", "#0694D2");
			}
		});
	});
}());