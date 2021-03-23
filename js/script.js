$('.wrapper').scroll(function() {
  if ($(this).scrollTop() > 0) {
    $('.mouse-btn').fadeOut();
  } else {
    $('.mouse-btn').fadeIn();
  }
});








/*Isotope script*/

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});






// Masonry script
$(window).bind('load', function() {

  $('.grid').masonry({
    itemSelector: '.element-item',
    columnWidth: 30
  });

});












$(document).ready(function() {

  // Image zoom
	$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

  //Video
  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

  //Ajax content popup
  $('.simple-ajax-popup-align-top').magnificPopup({
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
	});

	$('.simple-ajax-popup').magnificPopup({
		type: 'ajax'
	});

});



/*Typing script*/
var app = document.getElementById('typing');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 30,
  
});

typewriter.typeString('Web Designer and Freelancer.')
    .pauseFor(200)
    .deleteAll()
    .typeString('Based in Ukraine.')
    .pauseFor(200)
    .deleteAll()
    .typeString('UX/UI Designer and Front-end Developer.')
    .pauseFor(200)
    .start();





/* Mobile menu script */
jQuery(function($){

  $(document).ready(function(){
    $(".mobile-menu").click(function(){
        $(".menu-nav").toggleClass("active");
    });
  });

  $(document).on("click", function(event){
    var $trigger = $(".mobile-menu");
    if($trigger !== event.target && !$trigger.has(event.target).length){
        $(".menu-nav").removeClass("active");
    }            
  });
  
});




/* Color palette script */
$('.palette-colors li').click(function(){

  $('body').attr('data-default-color', $(this).data('color'));
  $('.palette-colors li').removeClass('current-color');
  $(this).addClass('current-color')
});

$('.palette-cog i').click(function(){
  $('.color-palette').toggleClass('active-palette');
})