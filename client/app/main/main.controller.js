'use strict';

angular.module('midiserverApp')
  .controller('MainCtrl', function ($scope, $http, $timeout) {
    $scope.awesomeThings = [];

    // $http.get('/api/things').success(function(awesomeThings) {
    //   $scope.awesomeThings = awesomeThings;
    // });


	var socket = io();

	$scope.console = "";


	var lastMidi;
	$scope.notes = [];

    socket.on('connect', function() {
      console.log("Connected to socket IO server");
      socket.on('midi', function(msg, deltaTime) {
        console.log("Got a message: ", msg);

    	var newNote = { n: msg[1], t: deltaTime };
        
        var add = false;
        if (lastMidi) {
	        if (lastMidi.n != msg[1] && lastMidi.t != deltaTime) {
	        	add = true;
	        	lastMidi = newNote;
	        	console.log("OK to add this note");
	        } else {
	        	console.log("Duplicate note / time rejected");
	        }

        } else {
        	add = true;
        	lastMidi = newNote;
        }
        if (add) {
	        $timeout(function() {
	        	$scope.notes.push( newNote );
	        });
	    }
      });
    });

    $scope.clearConsole = function() {
    	$scope.console = "";
    }    

  });
