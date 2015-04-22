'use strict';

/**
 * @ngdoc directive
 * @name angular-cv.directive:bounce
 * @description
 * # bounce timeline elements as they appear on scroll
 */
angular.module('angular-cv')
  .directive('bounce', function () {
    return {
      //template: '<div></div>',
      restrict: 'EA',
      replace:false,
      link: function (scope, element, attrs) {
        if( (element.offset().top) > element.scrollTop() + $(window).height() * 0.8 ) {
        	element.addClass('is-hidden');
        }

        $(window).on('scroll', function(){
          var scrollTop = $(this).scrollTop() + ($(window).height() * 0.8);
        	//var $timeline_block = $('.cd-timeline-block');
          if( scrollTop > element.offset().top && element.hasClass('is-hidden')) {
				  element.removeClass('is-hidden').addClass('bounce-in');
				  }
		    });
      }
    };
  });
