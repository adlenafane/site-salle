'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$translate', 'Posts',
    function($scope, Authentication, $translate, Posts) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        $scope.currentDay = (new Date()).getDay();
        $translate('contact.phone').then(function(phone) {
            $scope.phone = phone;
        });

        $translate('contact.email').then(function(email) {
            $scope.email = email;
        });

        $scope.posts = Posts.query({major: true});
    }
]);
