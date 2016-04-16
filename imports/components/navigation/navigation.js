import angular from 'angular';
import { Meteor } from 'meteor/meteor';
import angularMeteor from 'angular-meteor';
import template from './navigation.html';
class Naviguation {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}
export default angular.module('Navigation', [
  angularMeteor
])
  .component('navigation', {
    templateUrl: 'imports/components/navigation/navigation.html',
    controller: ['$scope', Naviguation]
  });

if (Meteor.isClient) {
  console.log("Kings of leon")
}