// Pulled from bennadel.com/blog/2302-preventing-links-in-standalone-iphone-applications-from-opening-in-mobile-safari.htm
// Listen for ALL links at the top level of the document. For
// testing purposes, we're not going to worry about LOCAL vs.
// EXTERNAL links - we'll just demonstrate the feature.

window.onload = function(){
	
$( document ).on(
    "click",
    "a",
    function( event ){

        // Stop the default behavior of the browser, which
        // is to change the URL of the page.
        event.preventDefault();

        // Manually change the location of the page to stay in
        // "Standalone" mode and change the URL at the same time.
        location.href = $( event.target ).attr( "href" );

    }
);
	

	
}