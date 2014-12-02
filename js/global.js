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
	var elementWidth = parseInt( window.getComputedStyle( document.getElementById("navigation-header") ).width );
	var bodyPadding = 50;

	if (currentWidth < elementWidth) {
		console.log('hi');
		document.getElementById("navigation-header").style.left = '0px';
		document.getElementById("navigation-header").style.marginLeft = '0px';

		var i;
		for (i = 0; i < document.getElementsByClassName("content").length; i++) {
			document.getElementsByClassName("content")[i].style.paddingLeft = (bodyPadding + 'px');
			document.getElementsByClassName("content")[i].style.paddingRight = (bodyPadding + 'px');
		}
	}
	else {
		console.log('bye');
		document.getElementById("navigation-header").style.left = '50%';
		document.getElementById("navigation-header").style.marginLeft = ('-' + (elementWidth / 2) + 'px');

		var padding = (currentWidth - elementWidth) / 2 + bodyPadding;
		var i;
		for (i = 0; i < document.getElementsByClassName("content").length; i++) {
			document.getElementsByClassName("content")[i].style.paddingLeft = (padding + 'px');
			document.getElementsByClassName("content")[i].style.paddingRight = (padding + 'px');
		}
	}
}

function scroll() {
	var currentOffset = getScrollOffset().height;
	var navRowHeight = parseInt( window.getComputedStyle( document.getElementById("navigation-row")).height );
	var headerHeight = parseInt( window.getComputedStyle( document.getElementById("navigation-header-background")).height );

	if (currentOffset < headerHeight - navRowHeight) {
		document.getElementById("navigation-header-background").style.marginTop = ('-' + currentOffset + 'px');
	}
	else {
		document.getElementById("navigation-header-background").style.marginTop = (navRowHeight - headerHeight) + 'px';
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