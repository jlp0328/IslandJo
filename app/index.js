import angular from 'angular';

const app = angular.module('islandJo', ['ngMaterial', 'ngSanitize', 'ngMessages', 'ngAnimate'])

let mainCtrl = function($scope){
    $scope.currentNavItem = 'page1';

    $scope.goto = function(page) {
      console.log("Goto " + page);
};

app.controller('MainCtrl', mainCtrl);
