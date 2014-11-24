'use strict';
// Init the application configuration module for AngularJS application
var ApplicationConfiguration = function () {
    // Init module configuration options
    var applicationModuleName = 'site-salle';
    var applicationModuleVendorDependencies = [
        'angulartics',
        'angulartics.google.analytics',
        'google-maps',
        'ngResource',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'pascalprecht.translate',
        'ui.router',
        'ui.bootstrap',
        'ui.utils'
      ];
    // Add a new vertical module
    var registerModule = function (moduleName, dependencies) {
      // Create angular module
      angular.module(moduleName, dependencies || []);
      // Add the module to the AngularJS configuration file
      angular.module(applicationModuleName).requires.push(moduleName);
    };
    return {
      applicationModuleName: applicationModuleName,
      applicationModuleVendorDependencies: applicationModuleVendorDependencies,
      registerModule: registerModule
    };
  }();'use strict';
//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);
// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config([
  '$locationProvider',
  function ($locationProvider) {
    $locationProvider.hashPrefix('!');
  }
]);
// Setting translate options
angular.module(ApplicationConfiguration.applicationModuleName).config([
  '$translateProvider',
  function ($translateProvider) {
    $translateProvider.useUrlLoader('api/translation');
    $translateProvider.preferredLanguage('fr');
  }
]);
//Then define the init function for starting up the application
angular.element(document).ready(function () {
  //Fixing facebook bug with redirect
  if (window.location.hash === '#_=_')
    window.location.hash = '#!';
  //Then init the app
  angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('activity');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('coaching');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('contact');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('planning');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('salle');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');'use strict';
//Setting up route
angular.module('activity').config([
  '$stateProvider',
  function ($stateProvider) {
  }
]);'use strict';
angular.module('activity').controller('ActivityController', [
  '$scope',
  function ($scope) {
    $scope.zoomOn = function (category) {
      if ($scope.currentCategory !== category) {
        $scope.currentCategory = category;
      } else {
        $scope.currentCategory = null;
      }
    };
    $scope.activities = {
      cardio: [
        {
          name: 'Step',
          id: 0
        },
        {
          name: 'Biking',
          id: 1
        },
        {
          name: 'Magic Combat',
          id: 2
        },
        {
          name: 'Cardio Attack',
          id: 3
        }
      ],
      renforcement: [
        {
          name: 'Abdos Fessiers',
          id: 4
        },
        {
          name: 'Body Sculpt',
          id: 5
        },
        {
          name: 'C.A.F.',
          id: 6
        },
        {
          name: 'Abdos Flash',
          id: 7
        },
        {
          name: 'Pump',
          id: 8
        }
      ],
      danse: [{
          name: 'Zumba',
          id: 9
        }],
      zen: [
        {
          name: 'Pilates',
          id: 10
        },
        {
          name: 'Stretching',
          id: 11
        },
        {
          name: 'Gym douce',
          id: 12
        }
      ]
    };
  }
]);'use strict';
//Setting up route
angular.module('coaching').config([
  '$stateProvider',
  function ($stateProvider) {
  }
]);'use strict';
angular.module('coaching').controller('CoachingController', [
  '$scope',
  function ($scope) {
  }
]);'use strict';
// Setting up route
angular.module('contact').config([
  '$stateProvider',
  function ($stateProvider) {
    // Users state routing
    $stateProvider.state('contact', {
      url: '/contact',
      templateUrl: 'modules/contact/views/contact.client.view.html'
    });
  }
]);'use strict';
angular.module('contact').controller('ContactController', [
  '$scope',
  function ($scope) {
    $scope.map = {
      center: {
        latitude: 48.7897294,
        longitude: 2.2859919
      },
      zoom: 16
    };
    $scope.salle = {
      id: 1,
      coords: {
        latitude: 48.7905062,
        longitude: 2.2846781
      }
    };
    $scope.transports = [
      {
        id: 2,
        coords: {
          latitude: 48.78728,
          longitude: 2.293427
        },
        icon: 'modules/contact/img/RER_B_small.png'
      },
      {
        id: 3,
        coords: {
          latitude: 48.79068,
          longitude: 2.284141
        },
        icon: 'modules/contact/img/194genRVB_small.png'
      },
      {
        id: 4,
        coords: {
          latitude: 48.791125,
          longitude: 2.284769
        },
        icon: 'modules/contact/img/394genRVB_small.png'
      }
    ];
  }
]);'use strict';
// Setting up route
angular.module('core').config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    // Redirect to home view when route not found
    $urlRouterProvider.otherwise('/');
    // Home state routing
    $stateProvider.state('home', {
      url: '/',
      templateUrl: 'modules/core/views/home.client.view.html'
    });
  }
]);'use strict';
angular.module('core').controller('HeaderController', [
  '$scope',
  'Authentication',
  'Menus',
  function ($scope, Authentication, Menus) {
    $scope.authentication = Authentication;
    $scope.isCollapsed = false;
    $scope.menu = Menus.getMenu('topbar');
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };
    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);'use strict';
angular.module('core').controller('HomeController', [
  '$scope',
  'Authentication',
  '$translate',
  function ($scope, Authentication, $translate) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.currentDay = new Date().getDay();
    $translate('contact.phone').then(function (phone) {
      $scope.phone = phone;
    });
    $translate('contact.email').then(function (email) {
      $scope.email = email;
    });
  }
]);'use strict';
//Menu service used for managing  menus
angular.module('core').service('Menus', [function () {
    // Define a set of default roles
    this.defaultRoles = ['*'];
    // Define the menus object
    this.menus = {};
    // A private function for rendering decision 
    var shouldRender = function (user) {
      if (user) {
        if (!!~this.roles.indexOf('*')) {
          return true;
        } else {
          for (var userRoleIndex in user.roles) {
            for (var roleIndex in this.roles) {
              if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
                return true;
              }
            }
          }
        }
      } else {
        return this.isPublic;
      }
      return false;
    };
    // Validate menu existance
    this.validateMenuExistance = function (menuId) {
      if (menuId && menuId.length) {
        if (this.menus[menuId]) {
          return true;
        } else {
          throw new Error('Menu does not exists');
        }
      } else {
        throw new Error('MenuId was not provided');
      }
      return false;
    };
    // Get the menu object by menu id
    this.getMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Return the menu object
      return this.menus[menuId];
    };
    // Add new menu object by menu id
    this.addMenu = function (menuId, isPublic, roles) {
      // Create the new menu
      this.menus[menuId] = {
        isPublic: isPublic || false,
        roles: roles || this.defaultRoles,
        items: [],
        shouldRender: shouldRender
      };
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeMenu = function (menuId) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Return the menu object
      delete this.menus[menuId];
    };
    // Add menu item object
    this.addMenuItem = function (menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Push new menu item
      this.menus[menuId].items.push({
        title: menuItemTitle,
        link: menuItemURL,
        menuItemType: menuItemType || 'item',
        menuItemClass: menuItemType,
        uiRoute: menuItemUIRoute || '/' + menuItemURL,
        isPublic: isPublic === null || typeof isPublic === 'undefined' ? this.menus[menuId].isPublic : isPublic,
        roles: roles === null || typeof roles === 'undefined' ? this.menus[menuId].roles : roles,
        position: position || 0,
        items: [],
        shouldRender: shouldRender
      });
      // Return the menu object
      return this.menus[menuId];
    };
    // Add submenu item object
    this.addSubMenuItem = function (menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
          // Push new submenu item
          this.menus[menuId].items[itemIndex].items.push({
            title: menuItemTitle,
            link: menuItemURL,
            uiRoute: menuItemUIRoute || '/' + menuItemURL,
            isPublic: isPublic === null || typeof isPublic === 'undefined' ? this.menus[menuId].items[itemIndex].isPublic : isPublic,
            roles: roles === null || typeof roles === 'undefined' ? this.menus[menuId].items[itemIndex].roles : roles,
            position: position || 0,
            shouldRender: shouldRender
          });
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeMenuItem = function (menuId, menuItemURL) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
          this.menus[menuId].items.splice(itemIndex, 1);
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    // Remove existing menu object by menu id
    this.removeSubMenuItem = function (menuId, submenuItemURL) {
      // Validate that the menu exists
      this.validateMenuExistance(menuId);
      // Search for menu item to remove
      for (var itemIndex in this.menus[menuId].items) {
        for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
          if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
            this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
          }
        }
      }
      // Return the menu object
      return this.menus[menuId];
    };
    //Adding the topbar menu
    this.addMenu('topbar');
  }]);'use strict';
//Setting up route
angular.module('planning').config([
  '$stateProvider',
  function ($stateProvider) {
  }
]);'use strict';
angular.module('planning').controller('PlanningController', [
  '$scope',
  function ($scope) {
    $scope.planning = [
      {
        name: '',
        slots: [
          {
            label: 'Matin',
            separator: true,
            maxCount: 1
          },
          {
            label: '9h30',
            maxCount: 2
          },
          {
            label: '10h30',
            maxCount: 1
          },
          {
            label: '11h30',
            maxCount: 1
          },
          {
            label: 'Apr\xe8s-midi',
            separator: true,
            maxCount: 1
          },
          {
            label: '14h30',
            maxCount: 1
          }
        ]
      },
      {
        name: 'Lundi',
        classes: [
          {
            name: 'Zumba',
            start: '9h30',
            duration: 60
          },
          {
            name: 'Body step',
            start: '10h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Mardi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Mercredi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Jeudi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '9h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Vendredi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Samedi',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '14h30',
            duration: 45
          }
        ]
      },
      {
        name: 'Dimanche',
        classes: [
          {
            name: 'Body Attack',
            start: '9h30',
            duration: 90
          },
          {
            name: 'Body Pump',
            start: '11h30',
            duration: 45
          }
        ]
      }
    ];
  }
]);'use strict';
//Setting up route
angular.module('salle').config([
  '$stateProvider',
  function ($stateProvider) {
  }
]);'use strict';
angular.module('salle').controller('SalleController', [
  '$scope',
  function ($scope) {
    $scope.carouselInterval = 5000;
    $scope.slides = [
      { image: '/modules/salle/img/cardio.jpg' },
      { image: '/modules/salle/img/libre.jpg' },
      { image: '/modules/salle/img/guide.jpg' },
      { image: '/modules/salle/img/classes.jpg' },
      { image: '/modules/salle/img/classes-2.jpg' },
      { image: '/modules/salle/img/classes-3.jpg' },
      { image: '/modules/salle/img/classes-4.jpg' },
      { image: '/modules/salle/img/classes-5.jpg' },
      { image: '/modules/salle/img/biking.jpg' },
      { image: '/modules/salle/img/freedom.jpg' },
      { image: '/modules/salle/img/trx.jpg' },
      { image: '/modules/salle/img/rest.jpg' }
    ];
  }
]);'use strict';
/** Fix animation for UI Bootstrap Carousel **/
angular.module('salle').directive('disableAnimation', [
  '$animate',
  function ($animate) {
    return {
      restrict: 'A',
      link: function ($scope, $element, $attrs) {
        $attrs.$observe('disableAnimation', function (value) {
          $animate.enabled(!value, $element);
        });
      }
    };
  }
]);'use strict';
angular.module('salle').directive('roomRow', [
  '$window',
  function ($window) {
    return {
      restrict: 'EA',
      transclude: true,
      scope: { id: '@' },
      template: '<div ng-transclude="" ng-click="toggle();"></div>',
      link: function ($scope) {
        var $ = $window.$;
        $scope.toggle = function () {
          angular.element('html, body').animate({ scrollTop: $('#' + $scope.id).offset().top }, 1000);
        };
      }
    };
  }
]);'use strict';
// Config HTTP Error Handling
angular.module('users').config([
  '$httpProvider',
  function ($httpProvider) {
    // Set the httpProvider "not authorized" interceptor
    $httpProvider.interceptors.push([
      '$q',
      '$location',
      'Authentication',
      function ($q, $location, Authentication) {
        return {
          responseError: function (rejection) {
            switch (rejection.status) {
            case 401:
              // Deauthenticate the global user
              Authentication.user = null;
              // Redirect to signin page
              $location.path('signin');
              break;
            case 403:
              // Add unauthorized behaviour 
              break;
            }
            return $q.reject(rejection);
          }
        };
      }
    ]);
  }
]);'use strict';
// Setting up route
angular.module('users').config([
  '$stateProvider',
  function ($stateProvider) {
  }
]);'use strict';
angular.module('users').controller('AuthenticationController', [
  '$scope',
  '$http',
  '$location',
  'Authentication',
  function ($scope, $http, $location, Authentication) {
    $scope.authentication = Authentication;
    // If user is signed in then redirect back home
    if ($scope.authentication.user)
      $location.path('/');
    $scope.signup = function () {
      $http.post('/auth/signup', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;
        // And redirect to the index page
        $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
    $scope.signin = function () {
      $http.post('/auth/signin', $scope.credentials).success(function (response) {
        // If successful we assign the response to the global user model
        $scope.authentication.user = response;
        // And redirect to the index page
        $location.path('/');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
angular.module('users').controller('PasswordController', [
  '$scope',
  '$stateParams',
  '$http',
  '$location',
  'Authentication',
  function ($scope, $stateParams, $http, $location, Authentication) {
    $scope.authentication = Authentication;
    //If user is signed in then redirect back home
    if ($scope.authentication.user)
      $location.path('/');
    // Submit forgotten password account id
    $scope.askForPasswordReset = function () {
      $scope.success = $scope.error = null;
      $http.post('/auth/forgot', $scope.credentials).success(function (response) {
        // Show user success message and clear form
        $scope.credentials = null;
        $scope.success = response.message;
      }).error(function (response) {
        // Show user error message and clear form
        $scope.credentials = null;
        $scope.error = response.message;
      });
    };
    // Change user password
    $scope.resetUserPassword = function () {
      $scope.success = $scope.error = null;
      $http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.passwordDetails = null;
        // Attach user profile
        Authentication.user = response;
        // And redirect to the index page
        $location.path('/password/reset/success');
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
angular.module('users').controller('SettingsController', [
  '$scope',
  '$http',
  '$location',
  'Users',
  'Authentication',
  function ($scope, $http, $location, Users, Authentication) {
    $scope.user = Authentication.user;
    // If user is not signed in then redirect back home
    if (!$scope.user)
      $location.path('/');
    // Check if there are additional accounts 
    $scope.hasConnectedAdditionalSocialAccounts = function (provider) {
      for (var i in $scope.user.additionalProvidersData) {
        return true;
      }
      return false;
    };
    // Check if provider is already in use with current user
    $scope.isConnectedSocialAccount = function (provider) {
      return $scope.user.provider === provider || $scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider];
    };
    // Remove a user social account
    $scope.removeUserSocialAccount = function (provider) {
      $scope.success = $scope.error = null;
      $http.delete('/users/accounts', { params: { provider: provider } }).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.user = Authentication.user = response;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
    // Update a user profile
    $scope.updateUserProfile = function (isValid) {
      if (isValid) {
        $scope.success = $scope.error = null;
        var user = new Users($scope.user);
        user.$update(function (response) {
          $scope.success = true;
          Authentication.user = response;
        }, function (response) {
          $scope.error = response.data.message;
        });
      } else {
        $scope.submitted = true;
      }
    };
    // Change user password
    $scope.changeUserPassword = function () {
      $scope.success = $scope.error = null;
      $http.post('/users/password', $scope.passwordDetails).success(function (response) {
        // If successful show success message and clear form
        $scope.success = true;
        $scope.passwordDetails = null;
      }).error(function (response) {
        $scope.error = response.message;
      });
    };
  }
]);'use strict';
// Authentication service for user variables
angular.module('users').factory('Authentication', [function () {
    var _this = this;
    _this._data = { user: window.user };
    return _this._data;
  }]);'use strict';
// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', [
  '$resource',
  function ($resource) {
    return $resource('users', {}, { update: { method: 'PUT' } });
  }
]);