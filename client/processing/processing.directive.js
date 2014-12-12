'use strict';

angular.module('midiserverApp')
  .directive('processing', function () {
    return {
      template: ' <div id="myContainer"></div>',
      restrict: 'E',
      link: function (scope, element, attrs) {

      	// console.log(p5);
      	
      	var p = new p5(); // setup() called here with defaults
        
      	p.resizeCanvas(400,400);

      	p.draw = function() {
      		background(0);
      		ellipse(100,100,100,100);
      	}


      }
    };
  });