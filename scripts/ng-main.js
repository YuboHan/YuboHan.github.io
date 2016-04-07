/*global angular*/
/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

var app = angular.module("myWebsite", []);

app.controller("skillsCtrl", function ($scope) {
    "use strict";
    $scope.black = {'background-color': 'black'};
    $scope.transparent = {'background-color': 'transparent'};
    
    $scope.solid = {'opacity': 1};
    $scope.faded = {'opacity': 0};
    
    $scope.state = {'la': $scope.black, 'hw': $scope.black, 'ta': $scope.black, 'ci': $scope.black, 'wd': $scope.black, 'dt': $scope.black, 'os': $scope.black, 'mc': $scope.black};
    
    $scope.childState = {'la': $scope.solid, 'hw': $scope.solid, 'ta': $scope.solid, 'ci': $scope.solid, 'wd': $scope.solid, 'dt': $scope.solid, 'os': $scope.solid, 'mc': $scope.solid};
    
    $scope.$watch('state.la', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.childState.la = $scope.solid;
        } else {
            $scope.childState.la = $scope.faded;
        }
    });
    
    $scope.$watch('state.hw', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.childState.hw = $scope.solid;
        } else {
            $scope.childState.hw = $scope.faded;
        }
    });
    
    $scope.$watch('state.ta', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.childState.ta = $scope.solid;
        } else {
            $scope.childState.ta = $scope.faded;
        }
    });
    
    $scope.$watch('state.ci', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.childState.ci = $scope.solid;
        } else {
            $scope.childState.ci = $scope.faded;
        }
    });
    
    $scope.$watch('state.wd', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.childState.wd = $scope.solid;
        } else {
            $scope.childState.wd = $scope.faded;
        }
    });
    
    $scope.$watch('state.dt', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.childState.dt = $scope.solid;
        } else {
            $scope.childState.dt = $scope.faded;
        }
    });
    
    $scope.$watch('state.os', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.childState.os = $scope.solid;
        } else {
            $scope.childState.os = $scope.faded;
        }
    });
    
    $scope.$watch('state.mc', function (newValue, oldValue) {
        if (newValue === $scope.black) {
            $scope.childState.mc = $scope.solid;
        } else {
            $scope.childState.mc = $scope.faded;
        }
    });
});