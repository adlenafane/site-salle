'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$translate',
    function($scope, Authentication, $translate) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.currentDay = (new Date()).getDay();
        $translate('contact.phone').then(function(phone) {
            $scope.phone = phone;
        });

        $translate('contact.email').then(function(email) {
            $scope.email = email
        });
    }
]);