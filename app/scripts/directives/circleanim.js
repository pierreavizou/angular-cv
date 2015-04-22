'use strict';

/**
 * @ngdoc directive
 * @name angular-cv.directive:circleanim
 * @description
 * # Animate circular progressebars as they appear on scroll
 */
angular.module('angular-cv')
  .directive('circleanim', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        // var circles = element.find('li');
        // console.log(circles);

        $(window).on('scroll', function(){
          var scrollTop = $(this).scrollTop() + ($(window).height() * 0.95);
          if( scrollTop > element.offset().top) {
				    $('.circlepg svg:nth-child(2) path').css('animation','load 3s');
          }
		    });
      }
    };
  }
);
