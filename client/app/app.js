'use strict';

angular.module('midiserverApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    var socket = io();

    socket.on('connect', function() {
      console.log("Connected to socket IO server");
      socket.on('midi', function(msg) {
        console.log("Got a message: ", msg);
      });
    });    

  });