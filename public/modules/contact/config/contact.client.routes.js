'use strict';

// Setting up route
angular.module('contact').config(['$stateProvider',
    function($stateProvider) {
        // Users state routing
        $stateProvider.
        state('contact', {
            url: '/contact',
            templateUrl: 'modules/contact/views/contact.client.view.html'
        });
    }
]);
