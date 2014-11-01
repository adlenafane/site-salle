'use strict';

angular.module('activity').directive('levelIcon', [ '$window',
  function($window) {
    return {
      restrict: 'EA',
      scope: {
        size: '@',
        level: '@'
      },
      template: '<div data-ng-include="\'modules/activity/views/level-icon.view.svg\'" class="level-icon" data-ng-class="level"></div>',
      link: function($scope, $element, $attr) {
      }
    };
  }
]);
