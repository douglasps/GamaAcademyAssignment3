import angular from 'angular';
import { TechnicalTestComponent } from './technical-test/technical-test.component';
import {
  Services
} from '../services';

export default angular.module('app.components', ['ngMaterial'])
.service('Services', ['$http', Services])
.component('technicalTest', TechnicalTestComponent)
.name;
