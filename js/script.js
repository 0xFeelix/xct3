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

const theme = document.querySelector(':root');
const btns = document.querySelectorAll('.colors');

btns.forEach(function(btn){

    btn.addEventListener("click", function(e){

        const color = e.currentTarget.classList;

        if(color.contains("green")){
            theme.style.setProperty("--color", "#47A846");
            theme.style.setProperty("--color2", "rgba(71, 168, 70, .92)");
            theme.style.setProperty("--color3", "#47A846");
        }
        else if(color.contains("grey")){
            theme.style.setProperty("--color", "#6C757D");
            theme.style.setProperty("--colo2", "rgba(108, 117, 125, .92)");
            theme.style.setProperty("--color3", "#6C757D");
        }
        else if(color.contains("blue")){
            theme.style.setProperty("--color", "#087afc");
            theme.style.setProperty("--color2", "rgba(8, 122, 252, .92)");
            theme.style.setProperty("--color3", "#087afc");
        }
        else if(color.contains("yellow")){
            theme.style.setProperty("--color", "#FFC22B");
            theme.style.setProperty("--colo2", "rgba(255, 194, 43, .92)");
            theme.style.setProperty("--color3", "#FFC22B");
        }
        else if(color.contains("red")){
            theme.style.setProperty("--color", "#DC3E45");
            theme.style.setProperty("--color2", "rgba(220, 62, 69, .92)");
            theme.style.setProperty("--color3", "#DC3E45");
        }
        else if(color.contains("purple")){
            theme.style.setProperty("--color", "#4D388C");
            theme.style.setProperty("--color2", "rgba(77, 56, 140, .92)");
            theme.style.setProperty("--color3", "#4D388C");
        }
        else if(color.contains("orange")){
            theme.style.setProperty("--color", "#F86D26");
            theme.style.setProperty("--color2", "rgba(248, 109, 38, .92)");
            theme.style.setProperty("--color3", "#F86D26");
        }
        else if(color.contains("brown")){
            theme.style.setProperty("--color", "#4F342E");
            theme.style.setProperty("--color2", "rgba(79, 52, 46, .92)");
            theme.style.setProperty("--color3", "#4F342E");
        }
        else if(color.contains("lime")){
            theme.style.setProperty("--color", "#827717");
            theme.style.setProperty("--color2", "rgba(130, 119, 23, .92)");
            theme.style.setProperty("--color3", "#827717");
        }
        else{
            theme.style.setProperty("--color", "#8e44add");
            theme.style.setProperty("--color2", "rgba(241, 107, 61, .92)");
            theme.style.setProperty("--color3", "#8e44add");
        }
    });
});



$('.palette-colors li').click(function(){

  $('.palette-colors li').removeClass('current-color');
  $(this).addClass('current-color')
});

$('.palette-cog i').click(function(){
  $('.color-palette').toggleClass('active-palette');
})