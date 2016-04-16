import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todoList';
import '../imports/startup/accounts-config.js';

angular.module('simple-todos', [
  angularMeteor,
  todosList.name,
  'accounts.ui'
]);


function onReady() {
  angular.bootstrap(document, ['simple-todos']);
//  angular.bootstrap(document, ['navigation']);
}

if (Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}

if (Meteor.isClient) {
  $(function () {
    $('.awesome-form input').focusout(function () {
      var text_val = $(this).val();
      if (text_val == '') {
        $(this).removeClass('has-value');
      } else {
        $(this).addClass('has-value');
      }
    });
  });
}

