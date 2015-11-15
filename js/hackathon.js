$(document).ready(function() {
	// Full Page
	$('#fullpage').fullpage({
	  // Navigation
	  menu: false,
	  lockAnchors: false,
	  anchors:['first', 'second', 'third', 'fourth'],
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
	  sectionsColor : ['#000000', '#000000', '#000000', '#000000'],
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

	// Typed
	$('.typed').typed({
		strings: ['^350Wake u^450p, Neo...^5000', '^1500The Matr^300ix ha^150s you.^200..^4000', '^1200Follo^400w the ^500whi^300te ra^200bbit.^7500', '^200Knock, knock, Neo.^3000', ''],
		typeSpeed: 150,
		showCursor: false
	});

	// Fit Text
	$('#responsive_headline').fitText(0.4);
});