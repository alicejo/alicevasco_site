var tabs = function() {
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('active');
		$('.tab-content').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	});
};

// var animation = function() {
// 	$(window).scroll(function() {
// 	    if ($('#skills').is(':visible')) {
// 	        $this.addClass(animation);
// 	    }
// 	});
// };

// $(function() {

//   var $window           = $(window),
//       win_height_padded = $window.height() * 1.1,
//       isTouch           = Modernizr.touch;

//   if (isTouch) { $('.revealOnScroll').addClass('animated'); }

//   $window.on('scroll', revealOnScroll);

//   function revealOnScroll() {
//     var scrolled = $window.scrollTop(),
//         win_height_padded = $window.height() * 1.1;

//     // Showed...
//     $(".revealOnScroll:not(.animated)").each(function () {
//       var $this     = $(this),
//           offsetTop = $this.offset().top;

//       if (scrolled + win_height_padded > offsetTop) {
//         if ($this.data('timeout')) {
//           window.setTimeout(function(){
//             $this.addClass('animated ' + $this.data('animation'));
//           }, parseInt($this.data('timeout'),10));
//         } else {
//           $this.addClass('animated ' + $this.data('animation'));
//         }
//       }
//     });
//     // Hidden...
//    $(".revealOnScroll.animated").each(function (index) {
//       var $this     = $(this),
//           offsetTop = $this.offset().top;
//       if (scrolled + win_height_padded < offsetTop) {
//         $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
//       }
//     });
//   }

//   revealOnScroll();
// });

var inView = function() {
  $(window).scroll( function() {
  
    $('.animate').each( function(i) {
        
      var top_of_object = $(this).offset().top;
      var bottom_of_object = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      var top_of_window = $(window).scrollTop();

      // if((bottom_of_window > top_of_object) && (top_of_window < bottom_of_object)) {
      //   $(this).addClass("animated");     
      // }

      if(top_of_window < bottom_of_object) {
        $(this).addClass("animated");     
      }

      if(bottom_of_window > bottom_of_object) {
        $(this).addClass("animated");     
      }

      if((bottom_of_window < top_of_object) || (top_of_window > bottom_of_object)) {
        $(this).removeClass("animated");     
      }

      // if(bottom_of_window > bottom_of_object) {
      //   $(this).removeClass("animated"); 
      // }      

      // else {
      //   $(this).removeClass("animated");
      // }
        
    }); 
  
  });
};

$(document).ready(function() {
	tabs();
  inView();
});

