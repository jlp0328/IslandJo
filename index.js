'use strict';

import './node_modules/angular-material/angular-material.css';

import angular from 'angular';

// Components

import {navigationConfig} from './app/components/navigation/navigation.component';
import {aboutConfig} from './app/components/about/about.component'

// Services

const app = angular.module('islandJo', ['ngMaterial', 'ui.router', 'ngAnimate'])

  app.component('nav', navigationConfig)
  app.component('about', aboutConfig)

  app.config(['$stateProvider', '$urlRouterProvider', ($stateProvider, $urlRouterProvider) => {

      $stateProvider.state('home', {
        url: '/home',
        template:'<div>Hello</div>'
      })
      .state('about', {
        url: '/about',
        component: 'about'
      })

      $urlRouterProvider.otherwise('/home');
  }])
