import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import Components from './components/components';
import { HomeComponent } from './home/home.component';

angular.module('myApp', [
  uiRouter,
  Components
])
.component('homePage', HomeComponent)
.config(($stateProvider, $urlRouterProvider) => {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '',
      template: '<home-page></home-page>'
    });
});