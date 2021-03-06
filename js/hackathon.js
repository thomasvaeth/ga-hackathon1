$(document).ready(function() {
	// Full Page
	$('#fullpage').fullpage({
	  // Navigation
	  menu: false,
	  lockAnchors: false,
	  anchors:['first', 'second', 'third', 'fourth', 'fifth'],
	  navigation: true,
	  navigationPosition: 'right',
	  navigationTooltips: false,
	  showActiveTooltip: false,
	  slidesNavigation: true,
	  slidesNavPosition: 'bottom',

	  // Scrolling
	  css3: true,
	  scrollingSpeed: 700,
	  autoScrolling: true,
	  fitToSection: true,
	  fitToSectionDelay: 1000,
	  scrollBar: false,
	  easing: 'easeInOutCubic',
	  easingcss3: 'ease',
	  loopBottom: false,
	  loopTop: false,
	  loopHorizontal: true,
	  continuousVertical: false,
	  normalScrollElements: '#element1, .element2',
	  scrollOverflow: false,
	  touchSensitivity: 15,
	  normalScrollElementTouchThreshold: 5,

	  // Accessibility
	  keyboardScrolling: true,
	  animateAnchor: true,
	  recordHistory: true,

	  // Design
	  controlArrows: true,
	  verticalCentered: true,
	  resize : false,
	  sectionsColor : ['#000000', '#FFFFFF', '', '#000000', ''],
	  paddingTop: '0',
	  paddingBottom: '0',
	  fixedElements: '',
	  responsiveWidth: 0,
	  responsiveHeight: 0,

	  // Custom Selectors
	  sectionSelector: '.section',
	  slideSelector: '.slide',

	  // Events
	  onLeave: function(index, nextIndex, direction){},
	  afterLoad: function(anchorLink, index){},
	  afterRender: function(){},
	  afterResize: function(){},
	  afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
	  onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});

	// Big Video
  var BV = new $.BigVideo();
  BV.init();
  BV.show('videos/Planet-Earth.mp4', {ambient: true});

	// Typed
	$('.typed').typed({
		strings: ['^350Wake u^450p, Neo...^5000', '^1500The Matr^300ix ha^150s you.^200..^4000', '^1200Follo^400w the ^500whi^300te ra^200bbit.^7500', '^200Knock, knock, Neo.^3000', ''],
		typeSpeed: 150,
		loop: true,
		showCursor: false
	});

	// Letter Spacing
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var date = new Date().getDay();
  var today = weekdays[date];
  $('.fancy_title').text(today).lettering();
  $('.fancy_title span').mouseenter(function() {
  	$(this).addClass('animated swing');
  }).mouseleave(function() {
  	$(this).removeClass('animated swing');
  });
});