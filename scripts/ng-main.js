/*global angular*/

var app = angular.module("myWebsite", []);

app.controller("skillsCtrl", function ($scope) {
    "use strict";
    $scope.black = {'background-color': 'black'};
    $scope.transparent = {'background-color': 'transparent'};
    
    $scope.solid = {'opacity': 1};
    $scope.faded = {'opacity': 0.2};
    
    $scope.laState = $scope.black;
    $scope.hwState = $scope.black;
    $scope.taState = $scope.black;
    $scope.ciState = $scope.black;
    $scope.wdState = $scope.black;
    $scope.dtState = $scope.black;
    $scope.osState = $scope.black;
    $scope.mcState = $scope.black;
    
    $scope.laChildState = $scope.solid;
    $scope.hwChildState = $scope.solid;
    $scope.taChildState = $scope.solid;
    $scope.ciChildState = $scope.solid;
    $scope.wdChildState = $scope.solid;
    $scope.dtChildState = $scope.solid;
    $scope.osChildState = $scope.solid;
    $scope.mcChildState = $scope.solid;
    
    $scope.$watch('laState', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.laChildState = $scope.solid;
        } else {
            $scope.laChildState = $scope.faded;
        }
    });
});