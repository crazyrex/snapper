/*
Snapper unit tests - using qUnit
*/

window.onload = function(){



		/* TESTS HERE */


		// overthrow dependency...
		test( 'API Properties: overthrow is defined', function() {
			ok( overthrow );
		});

		test( 'API Properties: overthrow is an object', function() {
			ok( typeof( overthrow ) === "object" );
		});

		//snapper tests
		test( 'API Properties: $.fn.snapper is a function', function() {
			ok( typeof( $.fn.snapper ) === "function" );
		});

		test( 'Enhancement steps', function() {
			ok( $(".snapper_items > *:eq(2)").attr( "class" ) === undefined, "no classes applied at first" );
			ok( $(".snapper_items > *:eq(2)").css( "float", "none" ), "no floats at first" );
			ok( $(".snapper_items").attr( "style" ) === undefined, "no style inline applied" );
			document.documentElement.className += "enhanced";
			$(function(){
	      $( ".snapper" ).snapper();
	    });
			ok( $(".snapper_items > *:eq(2)").css( "float", "left" ) );
			ok( $(".snapper_items").attr( "style" ) !== undefined, "style inline applied" );
			ok( $(".snapper_items > *:eq(2)").attr( "style" ) !== undefined, "style inline applied" );
			ok( $(".snapper_pane").css( "overflow" ) === "auto", "pane has overflow auto" );
			ok( $(".snapper_pane").width() < $(".snapper_items" ).width(), "pane is narrower than items in it now" );
			ok( $(".snapper_nextprev").length, "next prev generated" );
			ok( $(".snapper_nextprev a").length === 2, "2 next prev links" );
		});

		asyncTest( 'Snapping occurs after scrolling to a spot that is not a snap point', function() {
			expect(1);
			$(".snapper_pane")[0].scrollLeft = 0;
			$(".snapper_pane")[0].scrollLeft = 35;
			setTimeout(function(){
				ok( $(".snapper_pane")[0].scrollLeft ===0 );
				start();
			},1000);
		});









};
