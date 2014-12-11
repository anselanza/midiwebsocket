'use strict';

angular.module('midiserverApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });


	var socket = io();

	$scope.console = "";

    socket.on('connect', function() {
      console.log("Connected to socket IO server");
      socket.on('midi', function(msg, deltaTime) {
        console.log("Got a message: ", msg);
        $timeout(function() {
        	$scope.console += " ["+msg+" @ "+deltaTime+ "]";
        });
      });
    });

    $scope.clearConsole = function() {
    	$scope.console = "";
    }    

  });
