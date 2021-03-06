'use strict';
// Init the application configuration module for AngularJS application
var ApplicationConfiguration = function () {
    // Init module configuration options
    var applicationModuleName = 'site-salle';
    var applicationModuleVendorDependencies = [
        'angular-json-editor',
        'angulartics',
        'angulartics.google.analytics',
        'google-maps',
        'ngResource',
        'ngCookies',
        'ngAnimate',
        'ngTouch',
        'ngSanitize',
        'pascalprecht.translate',
        'textAngular',
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
    $translateProvider.useUrlLoader('api/translations');
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
ApplicationConfiguration.registerModule('admin');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('coaching');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('contact');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('osteopathy');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('planning');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('posts');'use strict';
// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('salle');'use strict';
// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');'use strict';
//Setting up route
angular.module('activity').config([
  '$stateProvider',
  function ($stateProvider) {
    // Activity state routing
    $stateProvider.state('activity', {
      url: '/activites?name',
      templateUrl: 'modules/activity/views/activity.client.view.html'
    }).state('activity.details', {
      url: '/activites/:category',
      templateUrl: 'modules/activity/views/activity.client.view.html',
      controller: 'ActivityController'
    });
  }
]);'use strict';
angular.module('activity').controller('ActivityController', [
  '$scope',
  '$state',
  '$window',
  function ($scope, $state, $window) {
    $scope.currentCategory = null;
    $scope.search = {};
    if ($state.params.name) {
      $scope.search.name = $state.params.name;
    }
    $scope.activities = [
      {
        name: 'Stretching',
        duration: '15\'',
        level: 'easy',
        category: 'Etirement / D\xe9tente / Renforcement',
        description: 'C\u2019est un cours bas\xe9 sur l\u2019enseignement des \xe9tirements musculaires afin d\u2019optimiser la souplesse musculaire puis articulaire en favorisant le retour veineux et donc la r\xe9cup\xe9ration musculaire.'
      },
      {
        name: 'Gym douce',
        duration: '45\'',
        level: 'easy',
        category: 'Etirement / D\xe9tente / Renforcement',
        description: 'C\u2019est un cours de renforcement musculaire adapt\xe9 aux d\xe9butants, personnes \xe2g\xe9es en convalescence... Ce cours permet aux personnes de se muscler tout en douceur afin de faciliter les mouvements du quotidien dans sa globalit\xe9.'
      },
      {
        name: 'Body Barre',
        duration: '45\'',
        level: 'medium',
        category: 'Renfo',
        description: 'C\u2019est un cours de renforcement musculaire bas\xe9 sur des exercices effectu\xe9s \xe0 l\u2019aide d\u2019une barre lest\xe9e. Lors de ce type de cours tous les groupes musculaires sont travaill\xe9s pour permettre une fonte adipeuse (perte de graisse) et prise de masse musculaire s\xe8che (permettant d\u2019affiner la silhouette pour faire ressortir la musculature dite naturelle).'
      },
      {
        name: 'Cross training',
        duration: '45\'',
        level: 'hard',
        category: 'Renfo / Cardio',
        description: 'C\u2019est un cours inspir\xe9 du cross fit qui est tr\xe8s intense, sp\xe9cialement con\xe7u pour les personnes en qu\xeate de sensations fortes souhaitant se d\xe9passer pour repousser les limites de leur propre corps. C\u2019est un cours d\u2019alternance cardio et renforcement tr\xe8s difficile.'
      },
      {
        name: 'H.I.I.T.',
        duration: '30\'',
        level: 'extreme',
        category: 'Cardio',
        description: 'Tous comme le boot camp et le cross fit, le H.I.I.T. est le plus difficile des cours de renforcement musculaire car les exercices cardios et renfo sont directement combin\xe9s entre eux afin de faire vivre \xe0 l\u2019adh\xe9rent une s\xe9ance tr\xe8s intense qui lui permettra d\u2019obtenir de r\xe9els r\xe9sultats visibles et rapides en seulement quelques s\xe9ances.'
      },
      {
        name: 'Abdos fessiers',
        duration: '30\'',
        level: 'easy',
        category: 'Renfo',
        description: 'C\u2019est un cours bas\xe9 sur des exercices d\u2019abdos et fessiers sp\xe9cialement pens\xe9s pour les femmes.'
      },
      {
        name: 'Postural Shape',
        duration: '45\'',
        level: 'medium',
        category: 'Etirement / D\xe9tente / Renforcement',
        description: 'C\u2019est un cours visant \xe0 renforcer les muscles profonds du corps et en particulier ceux proches de la colonne vert\xe9brale.'
      },
      {
        name: 'Pilates',
        duration: '45\'',
        level: 'medium',
        category: 'Etirement / D\xe9tente / Renforcement',
        description: 'Cours de renforcement musculaire et d\'\xe9tirement musculaire permettant de lutter contre les probl\xe8mes de scoliose, lumbago, sciatiques et hernies discales.'
      },
      {
        name: 'Body Sculpt',
        duration: '45\'',
        level: 'medium',
        category: 'Renfo',
        description: 'Cours bas\xe9 sur le renforcement global du corps \xe0 l\u2019aide d\u2019halt\xe8res, \xe9lastiques, step... Ce cours permet de donner de nombreuses id\xe9es de renforcement aux adh\xe9rents se trouvant en d\xe9placement loin du Magic Form.'
      },
      {
        name: 'C.A.F.',
        duration: '45\'',
        level: 'medium',
        category: 'Renfo',
        description: 'Cuisses, Abdos, Fessiers, c\'est le cours collectif de r\xe9f\xe9rence des femmes car il travaille leur zones de pr\xe9dilection.'
      },
      {
        name: 'Biking',
        duration: '45-60\'',
        level: 'hard',
        category: 'Cardio',
        description: 'Cours collectif visant \xe0 remplacer une course cycliste, tr\xe8s intense car le mode de travail est bas\xe9 sur l\u2019alternance de reproduction de mont\xe9e de col, de sprint et de r\xe9cup\xe9ration... Le but est de d\xe9velopper le muscle cardiaque et la perte de graisse.'
      },
      {
        name: 'Total Body',
        duration: '45-60\'',
        level: 'hard',
        category: 'Renfo / Cardio',
        description: 'Ce type de cours est bas\xe9 sur l\u2019explosivit\xe9 musculaire et la combustion maximum des graisses pour pouvoir supporter le rythme soutenu de ce type de cours o\xf9 le corps est soumis \xe0 rude \xe9preuve afin de se d\xe9lester de son stress et de ses kilos en trop.'
      },
      {
        name: 'Zumba',
        duration: '45-60\'',
        level: 'medium',
        category: 'Cardio dance',
        description: 'Cours de danse tr\xe8s accessible car peu de chor\xe9graphie. Il permet de s\u2019amuser facilement et de se d\xe9lester de son stress.'
      },
      {
        name: 'Step',
        duration: '45\'',
        level: 'medium',
        category: 'Cardio',
        description: 'Cours a\xe9robic s\u2019effectuant sur un step qui permet \xe0 la fois de s\u2019amuser tout en perdant de la masse graisseuse et en musclant le coeur.'
      },
      {
        name: 'Yoga',
        duration: '45\'',
        level: 'medium',
        category: 'Etirement / D\xe9tente / Renforcement',
        description: 'C\u2019est une discipline du corps et de l\u2019esprit qui comprend une grande vari\xe9t\xe9 d\u2019exercices et de techniques. Les techniques employ\xe9es utilisent des postures physiques (appel\xe9es asanas), des pratiques respiratoires (pranayama) et de m\xe9ditation, ainsi que la relaxation profonde (yoga nidra).'
      },
      {
        name: 'Abdos Flash',
        duration: '45\'',
        level: 'medium',
        category: 'Renfo',
        description: 'En mettant l\u2019accent sur le travail des abdominaux aussi bien profonds que superficiels, vous allez retrouver un bon gainage abdominale et par cons\xe9quent, un ventre plat ! Simple, rapide et efficace.'
      },
      {
        name: 'Body Zen',
        duration: '15\'',
        level: 'medium',
        category: 'Etirement / D\xe9tente / Renforcement',
        description: 'Ce cours associe des exercices de yoga, de tai chi et de Pilates pour acqu\xe9rir force et flexibilit\xe9, centration et calme. La respiration contr\xf4l\xe9e, la concentration et une s\xe9rie structur\xe9e avec soin d\'\xe9tirements, de mouvements et de postures, associ\xe9s \xe0 des musiques savamment choisies, contribuent \xe0 cr\xe9er un entra\xeenement holistique qui plonge votre corps dans un \xe9tat d\'harmonie et d\'\xe9quilibre.'
      },
      {
        name: 'BP Fighting',
        duration: '15\'',
        level: 'hard',
        category: 'Cardio',
        description: 'Cours de fitness avec jeux d\'opposition de forte intensit\xe9 bas\xe9 sur des mouvements d\'arts martiaux et sports de combat divers. Cet entrainement complet permet un travail cardio vasculaire et musculaire.'
      },
      {
        name: 'Cardio Fit Boxing',
        duration: '15\'',
        level: 'hard',
        category: 'Renfo / Cardio',
        description: 'Fusion harmonieuse du karat\xe9-fitness et de la boxe training sans contact, un entrainement complet du corps.'
      },
      {
        name: 'Djembel',
        duration: '15\'',
        level: 'medium',
        category: 'Cardio dance',
        description: 'Danse de bien-\xeatre bas\xe9e sur les sonorit\xe9s, la gestuelle et les mouvements issus des danses africaines'
      }
    ];
    $scope.categories = $window._.chain($scope.activities).pluck('category').uniq().sortBy().value();
  }
]);'use strict';
angular.module('activity').directive('levelIcon', [
  '$window',
  function ($window) {
    return {
      restrict: 'EA',
      scope: {
        size: '@',
        level: '@'
      },
      template: '<div data-ng-include="\'modules/activity/views/level-icon.view.svg\'" class="level-icon" data-ng-class="level"></div>',
      link: function ($scope, $element, $attr) {
      }
    };
  }
]);'use strict';
//Setting up route
angular.module('admin').config([
  '$stateProvider',
  function ($stateProvider) {
    // Admin state routing
    $stateProvider.state('admin', {
      url: '/admin',
      templateUrl: 'modules/admin/views/admin.client.view.html'
    });
  }
]);'use strict';
angular.module('admin').controller('AdminController', [
  '$scope',
  '$http',
  function ($scope, $http) {
    $scope.mySchema = {
      type: 'object',
      title: 'Traductions',
      required: true,
      properties: {
        address: {
          type: 'object',
          title: 'Adresse',
          required: true,
          properties: {
            header: {
              type: 'string',
              title: 'Label de l\'adresse',
              required: true
            },
            city: {
              type: 'string',
              title: 'Ville',
              required: true
            },
            line1: {
              type: 'string',
              title: 'Ligne1',
              required: true
            },
            line2: {
              type: 'string',
              title: 'Ligne2',
              required: true
            }
          }
        },
        brand: {
          type: 'string',
          title: 'Nom de la marque',
          required: true
        },
        contact: {
          type: 'object',
          title: 'Contact',
          required: true,
          properties: {
            header: {
              type: 'string',
              title: 'Label',
              required: true
            },
            phone: {
              type: 'string',
              title: 'T\xe9l\xe9phone',
              required: true
            },
            email: {
              type: 'string',
              title: 'Email',
              required: true
            }
          }
        },
        header: {
          type: 'object',
          title: 'Barre de navigation',
          required: true,
          properties: {
            salle: {
              type: 'string',
              title: 'Salle',
              required: true
            },
            activities: {
              type: 'string',
              title: 'Activit\xe9s',
              required: true
            },
            schedule: {
              type: 'string',
              title: 'Planning',
              required: true
            },
            coaching: {
              type: 'string',
              title: 'Coaching',
              required: true
            },
            osteopathy: {
              type: 'string',
              title: 'Ost\xe9opathie',
              required: true
            },
            contact: {
              type: 'string',
              title: 'Acc\xe8s',
              required: true
            }
          }
        },
        home: {
          type: 'object',
          title: 'Page d\'accueil',
          required: true,
          properties: {
            callToAction: {
              type: 'string',
              title: 'Bouton principal',
              required: true
            }
          }
        },
        schedule: {
          type: 'object',
          title: 'Planning - accueil',
          required: true,
          properties: {
            header: {
              type: 'string',
              title: 'Label',
              required: true
            },
            1: {
              type: 'object',
              title: 'Jour 1',
              required: true,
              properties: {
                name: {
                  type: 'string',
                  title: 'Nom',
                  required: true
                },
                start: {
                  type: 'integer',
                  title: 'Heure de d\xe9but',
                  required: true
                },
                end: {
                  type: 'integer',
                  title: 'Heure de fin',
                  required: true
                },
                hour: {
                  type: 'string',
                  title: 'Horaires',
                  required: true
                }
              }
            },
            2: {
              type: 'object',
              title: 'Jour 2',
              required: true,
              properties: {
                name: {
                  type: 'string',
                  title: 'Nom',
                  required: true
                },
                start: {
                  type: 'integer',
                  title: 'Heure de d\xe9but',
                  required: true
                },
                end: {
                  type: 'integer',
                  title: 'Heure de fin',
                  required: true
                },
                hour: {
                  type: 'string',
                  title: 'Horaires',
                  required: true
                }
              }
            },
            3: {
              type: 'object',
              title: 'Jour 3',
              required: true,
              properties: {
                name: {
                  type: 'string',
                  title: 'Nom',
                  required: true
                },
                start: {
                  type: 'integer',
                  title: 'Heure de d\xe9but',
                  required: true
                },
                end: {
                  type: 'integer',
                  title: 'Heure de fin',
                  required: true
                },
                hour: {
                  type: 'string',
                  title: 'Horaires',
                  required: true
                }
              }
            },
            4: {
              type: 'object',
              title: 'Jour 4',
              required: true,
              properties: {
                name: {
                  type: 'string',
                  title: 'Nom',
                  required: true
                },
                start: {
                  type: 'integer',
                  title: 'Heure de d\xe9but',
                  required: true
                },
                end: {
                  type: 'integer',
                  title: 'Heure de fin',
                  required: true
                },
                hour: {
                  type: 'string',
                  title: 'Horaires',
                  required: true
                }
              }
            },
            5: {
              type: 'object',
              title: 'Jour 5',
              required: true,
              properties: {
                name: {
                  type: 'string',
                  title: 'Nom',
                  required: true
                },
                start: {
                  type: 'integer',
                  title: 'Heure de d\xe9but',
                  required: true
                },
                end: {
                  type: 'integer',
                  title: 'Heure de fin',
                  required: true
                },
                hour: {
                  type: 'string',
                  title: 'Horaires',
                  required: true
                }
              }
            },
            6: {
              type: 'object',
              title: 'Jour 6',
              required: true,
              properties: {
                name: {
                  type: 'string',
                  title: 'Nom',
                  required: true
                },
                start: {
                  type: 'integer',
                  title: 'Heure de d\xe9but',
                  required: true
                },
                end: {
                  type: 'integer',
                  title: 'Heure de fin',
                  required: true
                },
                hour: {
                  type: 'string',
                  title: 'Horaires',
                  required: true
                }
              }
            },
            7: {
              type: 'object',
              title: 'Jour 7',
              required: true,
              properties: {
                name: {
                  type: 'string',
                  title: 'Nom',
                  required: true
                },
                start: {
                  type: 'integer',
                  title: 'Heure de d\xe9but',
                  required: true
                },
                end: {
                  type: 'integer',
                  title: 'Heure de fin',
                  required: true
                },
                hour: {
                  type: 'string',
                  title: 'Horaires',
                  required: true
                }
              }
            }
          }
        }
      }
    };
    $http.get('/api/translations').then(function (response) {
      $scope.translations = response.data;
    });
    $http.get('/api/planning').then(function (response) {
      $scope.planning = response.data;
    });
  }
]).controller('AsyncButtonsController', function ($scope, $http) {
  $scope.onSubmit = function ($event, type) {
    console.log('onSubmit data in async controller', $scope.editor.getValue());
    var payload = $scope.editor.getValue();
    $http.post('/api/' + type, payload).then(function (response) {
    });
  };
});'use strict';
//Setting up route
angular.module('coaching').config([
  '$stateProvider',
  function ($stateProvider) {
    // Coaching state routing
    $stateProvider.state('coaching', {
      url: '/coaching',
      templateUrl: 'modules/coaching/views/coaching.client.view.html'
    });
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
angular.module('core').controller('FooterController', [
  '$scope',
  function ($scope) {
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
  'Posts',
  function ($scope, Authentication, $translate, Posts) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.currentDay = new Date().getDay();
    $translate('contact.phone').then(function (phone) {
      $scope.phone = phone;
    });
    $translate('contact.email').then(function (email) {
      $scope.email = email;
    });
    $scope.posts = Posts.query({ major: true });
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
angular.module('osteopathy').config([
  '$stateProvider',
  function ($stateProvider) {
    // Osteopathy state routing
    $stateProvider.state('osteopathy', {
      url: '/esthetique',
      templateUrl: 'modules/osteopathy/views/osteopathy.client.view.html'
    });
  }
]);'use strict';
angular.module('osteopathy').controller('OsteopathyController', [
  '$scope',
  function ($scope) {
  }
]);'use strict';
//Setting up route
angular.module('planning').config([
  '$stateProvider',
  function ($stateProvider) {
    // Planning state routing
    $stateProvider.state('planning', {
      url: '/planning?name',
      templateUrl: 'modules/planning/views/planning.client.view.html'
    });
  }
]);'use strict';
angular.module('planning').controller('PlanningController', [
  '$scope',
  '$state',
  '$http',
  '$window',
  function ($scope, $state, $http, $window) {
    $scope.search = {};
    $scope.coaches = [];
    $scope.categories = [];
    if ($state.params.name) {
      $scope.search.name = $state.params.name;
    }
    $http.get('/api/planning').then(function (response) {
      $scope.planning = response.data;
      for (var i = 1; i < $scope.planning.length; i++) {
        for (var classIndex = 0; classIndex < $scope.planning[i].classes.length; classIndex++) {
          var coach = $scope.planning[i].classes[classIndex].coach;
          var category = $scope.planning[i].classes[classIndex].category;
          if ($scope.coaches.indexOf(coach) === -1) {
            $scope.coaches.push(coach);
          }
          if ($scope.categories.indexOf(category) === -1) {
            $scope.categories.push(category);
          }
        }
      }
      $scope.coaches.sort();
    });
    $scope.$watch('search', function () {
      for (var key in $scope.search) {
        if (!$scope.search[key]) {
          delete $scope.search[key];
        }
      }
    }, true);
    var getCurrentDate = function () {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      //January is 0!
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = '0' + dd;
      }
      if (mm < 10) {
        mm = '0' + mm;
      }
      today = yyyy + '-' + mm + '-' + dd;
      return today;
    };
    $scope.downloadPlanning = function () {
      // Reinit search view
      var tmpSearch = $scope.search;
      $scope.search = {};
      $window.html2canvas($window.$('.planning.table'), {
        onrendered: function (canvas) {
          var img = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
          var downloadLink = document.createElement('a');
          downloadLink.href = img;
          downloadLink.download = getCurrentDate() + '-MagicFormFAR-planning.png';
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          $scope.search = tmpSearch;
        }
      });
    };
  }
]);'use strict';
//Setting up route
angular.module('posts').config([
  '$stateProvider',
  function ($stateProvider) {
    // Posts state routing
    $stateProvider.state('listPosts', {
      url: '/posts',
      templateUrl: 'modules/posts/views/list-posts.client.view.html'
    }).state('createPost', {
      url: '/posts/create',
      templateUrl: 'modules/posts/views/create-post.client.view.html'
    }).state('viewPost', {
      url: '/posts/:postId',
      templateUrl: 'modules/posts/views/view-post.client.view.html'
    }).state('editPost', {
      url: '/posts/:postId/edit',
      templateUrl: 'modules/posts/views/edit-post.client.view.html'
    });
  }
]);'use strict';
// Posts controller
angular.module('posts').controller('PostsController', [
  '$scope',
  '$stateParams',
  '$location',
  'Authentication',
  'Posts',
  function ($scope, $stateParams, $location, Authentication, Posts) {
    $scope.authentication = Authentication;
    // Create new Post
    $scope.create = function () {
      // Create new Post object
      var post = new Posts({
          name: this.name,
          major: this.major,
          content: this.content
        });
      // Redirect after save
      post.$save(function (response) {
        $location.path('posts/' + response._id);
        // Clear form fields
        $scope.name = '';
        $scope.major = false;
        $scope.content = '';
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
    // Remove existing Post
    $scope.remove = function (post) {
      if (post) {
        post.$remove();
        for (var i in $scope.posts) {
          if ($scope.posts[i] === post) {
            $scope.posts.splice(i, 1);
          }
        }
      } else {
        $scope.post.$remove(function () {
          $location.path('posts');
        });
      }
    };
    // Update existing Post
    $scope.update = function () {
      var post = $scope.post;
      post.$update(function () {
        $location.path('posts/' + post._id);
      }, function (errorResponse) {
        $scope.error = errorResponse.data.message;
      });
    };
    // Find a list of Posts
    $scope.find = function () {
      $scope.posts = Posts.query();
    };
    // Find existing Post
    $scope.findOne = function () {
      $scope.post = Posts.get({ postId: $stateParams.postId });
    };
  }
]);'use strict';
//Posts service used to communicate Posts REST endpoints
angular.module('posts').factory('Posts', [
  '$resource',
  function ($resource) {
    return $resource('posts/:postId', { postId: '@_id' }, { update: { method: 'PUT' } });
  }
]);'use strict';
//Setting up route
angular.module('salle').config([
  '$stateProvider',
  function ($stateProvider) {
    // Salle state routing
    $stateProvider.state('salle', {
      url: '/salle',
      templateUrl: 'modules/salle/views/salle.client.view.html'
    });
  }
]);'use strict';
angular.module('salle').controller('SalleController', [
  '$scope',
  function ($scope) {
    $scope.carouselInterval = 5000;
    $scope.slides = [
      { image: '/modules/salle/img/cardio-header.jpg' },
      { image: '/modules/salle/img/guide-header.jpg' },
      { image: '/modules/salle/img/9.jpg' },
      { image: '/modules/salle/img/3.jpg' },
      { image: '/modules/salle/img/classes-header.jpg' },
      { image: '/modules/salle/img/11.jpg' },
      { image: '/modules/salle/img/12.jpg' },
      { image: '/modules/salle/img/libre-header.jpg' },
      { image: '/modules/salle/img/6.jpg' },
      { image: '/modules/salle/img/7.jpg' },
      { image: '/modules/salle/img/8.jpg' },
      { image: '/modules/salle/img/13.JPG' },
      { image: '/modules/salle/img/freedom.jpg' },
      { image: '/modules/salle/img/freedom-header.jpg' }
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
    // Users state routing
    $stateProvider.state('profile', {
      url: '/settings/profile',
      templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
    }).state('password', {
      url: '/settings/password',
      templateUrl: 'modules/users/views/settings/change-password.client.view.html'
    }).state('accounts', {
      url: '/settings/accounts',
      templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
    }).state('signup', {
      url: '/signup',
      templateUrl: 'modules/users/views/authentication/signup.client.view.html'
    }).state('signin', {
      url: '/signin',
      templateUrl: 'modules/users/views/authentication/signin.client.view.html'
    }).state('forgot', {
      url: '/password/forgot',
      templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
    }).state('reset-invlaid', {
      url: '/password/reset/invalid',
      templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
    }).state('reset-success', {
      url: '/password/reset/success',
      templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
    }).state('reset', {
      url: '/password/reset/:token',
      templateUrl: 'modules/users/views/password/reset-password.client.view.html'
    });
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