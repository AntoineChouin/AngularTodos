import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todoList';

angular.module('simple-todos', [
  angularMeteor,
  todosList.name
]);

function onReady() {
  angular.bootstrap(document, ['simple-todos']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

if (Meteor.isServer) {
  
  Inject.rawModHtml('doSomething', function(html) {
    return html.replace(/<html>/, '<!-- HTML 5 -->\n<html class="no-js" lang="en">');
  });
}