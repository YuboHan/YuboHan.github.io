function getViewport() { //Returns size of viewport in pixels
	var e = window
	, a = 'inner';
	if ( !( 'innerWidth' in window ) ) {
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
}

function resize() {
	var currentWidth = getViewport().width;
	console.log("Viewport width = " + currentWidth + "px");
	if (currentWidth < document.getElementById("navigation-header").width) {
		document.getElementById("navigation-header").style.left = '0px';
		document.getElementById("navigation-header").style.marginLeft = '0px';

		var i;
		for (i = 0; i < document.getElementsByClassName("content").length; i++) {
			document.getElementsByClassName("content")[i].style.paddingLeft = '0px';
			document.getElementsByClassName("content")[i].style.paddingRight = '0px';
		}
	}
	else {
		document.getElementById("navigation-header").style.left = '50%';
		document.getElementById("navigation-header").style.marginLeft = '-500px';

		var padding = (currentWidth - document.getElementById("navigation-header").width) / 2 + 50;
		var i;
		for (i = 0; i < document.getElementsByClassName("content").length; i++) {
			document.getElementsByClassName("content")[i].style.paddingLeft = (padding + 'px');
			document.getElementsByClassName("content")[i].style.paddingRight = (padding + 'px');
		}
	}
}

function scroll() {
	var currentOffset = getScrollOffset().height;
	console.log("Vertical scrolling offset: " + currentOffset);
	console.log(document.getElementById("navigation-header-background").height);
	if (document.getElementById("navigation-header-background").height - document.getElementById("navigation-row").height > currentOffset) {
		document.getElementById("navigation-header-background").marginTop = 0 - currentOffset;
	}
	else {
		document.getElementById("navigation-header-background").marginTop = document.getElementById("navigation-row").height - document.getElementById("navigation-header-background").height;
	}
}

function getScrollOffset() {
  var scrOfX = 0, scrOfY = 0;
  if( typeof( window.pageYOffset ) == 'number' ) {
    //Netscape compliant
    scrOfY = window.pageYOffset;
    scrOfX = window.pageXOffset;
  } else if( document.body && ( document.body.scrollLeft || document.body.scrollTop ) ) {
    //DOM compliant
    scrOfY = document.body.scrollTop;
    scrOfX = document.body.scrollLeft;
  } else if( document.documentElement && ( document.documentElement.scrollLeft || document.documentElement.scrollTop ) ) {
    //IE6 standards compliant mode
    scrOfY = document.documentElement.scrollTop;
    scrOfX = document.documentElement.scrollLeft;
  }
  return { width: scrOfX, height: scrOfY };
}