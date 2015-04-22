'use strict';

/**
 * @ngdoc directive
 * @name angular-cv.directive:scrollOnClick
 * @description
 * # scrollOnClick
 */
angular.module('angular-cv')
  .directive('scrollOnClick', function () {
    return {                                                                                 
        restrict: 'A',
        scope: {                                                                             
            scroll: "@"                                                                    
        },                                                                                   
        link: function(scope, $elm,attr) {                                                
            $elm.on('click', function() {
            	$('.navbar li.active').removeClass('active');
            	if (!$elm.parent().hasClass('active')) {
        			$elm.parent().addClass('active');
    			}                                                  
                $('html,body').animate({scrollTop: $(scope.scroll).offset().top }, 1500);
            });                                                                              
        }                                                                                    
    }});
