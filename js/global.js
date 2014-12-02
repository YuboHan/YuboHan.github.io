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
	if (currentWidth < 1000) {
		document.getElementById("navigation-header").style.left = '0px';
		document.getElementById("navigation-header").style.marginLeft = '0px';

		var i;
		for (i = 0; i < document.getElementsByClassName("content").length; i++) {
			document.getElementsByClassName("content")[i].style.paddingLeft = '50px';
			document.getElementsByClassName("content")[i].style.paddingRight = '50px';
		}
	}
	else {
		document.getElementById("navigation-header").style.left = '50%';
		document.getElementById("navigation-header").style.marginLeft = '-500px';

		var padding = (currentWidth - 1000) / 2 + 50;
		var i;
		for (i = 0; i < document.getElementsByClassName("content").length; i++) {
			document.getElementsByClassName("content")[i].style.paddingLeft = (padding + 'px');
			document.getElementsByClassName("content")[i].style.paddingRight = (padding + 'px');
		}
	}
}

function scroll() {
	var currentOffset = getScrollOffset().height;
	if (currentOffset < 150) {
		document.getElementById("navigation-header-background").style.marginTop = ('-' + currentOffset + 'px');
	}
	else {
		document.getElementById("navigation-header-background").style.marginTop = '-150px';
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