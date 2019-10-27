// var $window = $(window)

// $window.on('load', function() {
// 				$('.nav-item').poptrox({
// 					// caption: function($a) { return $a.next('h3').text(); },
// 					// overlayColor: '#2c2c2c',
// 					// overlayOpacity: 0.85,
// 					// popupCloserText: '',
// 					// popupLoaderText: '',
// 					// selector: '.nav-item href',
// 					usePopupCaption: true,
// 					usePopupDefaultStyling: false,
// 					usePopupEasyClose: false,
// 					usePopupNav: true,
// 					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
// 				});
// });


//variables to hold values of input from online order form

//customer name
let custName = $("#firstName").val();
let custLast = $("#lastName").val();

//delivery or pickup
let orderMethod = $("method").val();

//to hold value of customer lunch selection (shows day not meal type ex: Thursday)
let lunchChoice = $("#whichLunch").val();