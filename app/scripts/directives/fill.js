'use strict';

/**
 * @ngdoc directive
 * @name angular-cv.directive:fill
 * @description
 * # fill progroessbars on scroll when they enter the screen
 */
angular.module('angular-cv')
  .directive('fill', function () {
    return {
      restrict: 'EA',
      scope:{
      	to : '='
      },
      link: function postLink(scope, element, attrs) {
        $(window).on('scroll', function(){
          var scrollTop = $(this).scrollTop() + ($(window).height() * 0.95);
          if( scrollTop > element.offset().top) {
				element.width(scope.to+'%');
			}
		});
      }
    };
  });
