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

setColor('color', '');

  function setColor(color, value) {
    if (localStorage.getItem(color)) {
      theme.style.setProperty("--color", `${localStorage.getItem(color)}`);
      theme.style.setProperty("--color2", `${localStorage.getItem(color)}`);
    } else {
      theme.style.setProperty("--color", value);
      theme.style.setProperty("--color2", value);
      localStorage.setItem('color', value);
    }
  }

  function getColor(color) {
    theme.style.setProperty("--color", color);
    localStorage.setItem('color', color);
  }
  function getColor2(color) {
    theme.style.setProperty("--color2", color);
    localStorage.setItem('color', color);
  }
  
  // Click
  btns.forEach(function(btn){
  
    btn.addEventListener("click", function(e){
  
      const color = e.currentTarget.classList;
  
      if(color.contains("green")){
        getColor('#47A846');
        getColor2('rgba(71, 168, 70, .92)');
      }

      else if(color.contains("grey")){
        getColor('#6C757D');
        getColor2('rgba(108, 117, 125, .92)');
        
      }
      else if(color.contains("blue")){
        getColor('#087afc');
        getColor2('rgba(8, 122, 252, .92)');
        
      }
      else if(color.contains("yellow")){
        getColor('#FFC22B');
        getColor2('rgba(255, 194, 43, .92)');
      }
      else if(color.contains("red")){
        getColor('#DC3E45');
        getColor2('rgba(220, 62, 69, .92)');
      }
      else if(color.contains("purple")){
        getColor('#4D388C');
        getColor2('rgba(77, 56, 140, .92)');
      }
      else if(color.contains("orange")){
        getColor('#F26B38');
        getColor2('rgba(241, 107, 61, .92)');
      }
      else if(color.contains("brown")){
        getColor('#4F342E');
        getColor2('rgba(79, 52, 46, .92)');
      }
      else if(color.contains("lime")){
        getColor('#827717');
        getColor2('rgba(130, 119, 23, .92)');
      }
      else{
        getColor('#F26B38');
        getColor2('rgba(241, 107, 61, .92)');
      }
    });
  });



  const $items = $('.palette-colors li').click(function() {
    $items.removeClass('current-color')
  
    $(this).addClass('current-color')
    const idx = $items.index(this);
    localStorage.setItem('current-color', idx)
  });
  
  // on page load check if item in storage and if so set class
  const idx = localStorage.getItem('current-color')
  if (!!idx) {
    $items.eq(+idx).addClass('current-color')
  }


$('.palette-cog i').click(function(){
  $('.color-palette').toggleClass('active-palette');
})


// Portfolio hovered
var $Plinks = $('.element-item .image a');
var $Pdesc = $('.desc p');

$Plinks.on('mouseover', function(){
  $(this).closest('.element-item').find($Pdesc).css('color','var(--color)');
});

$Plinks.on('mouseout', function(){
  $(this).closest('.element-item').find($Pdesc).css('color','');
});


// Blog hovered
var $Blinks = $('.blog-item .image a');
var $Bdesc = $('.description .name');

$Blinks.on('mouseover', function(){
  $(this).closest('.blog-item').find($Bdesc).css('color','var(--color)');
});

$Blinks.on('mouseout', function(){
  $(this).closest('.blog-item').find($Bdesc).css('color','');
});