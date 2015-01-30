'use strict';

angular.module('admin').controller('AdminController', ['$scope', '$http',
	function($scope, $http) {
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
                    title: 'Téléphone',
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
                    title: 'Activités',
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
                    title: 'Ostéopathie',
                    required: true
                  },
                  contact: {
                    type: 'string',
                    title: 'Accès',
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
                      title: 'Heure de début',
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
                      title: 'Heure de début',
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
                      title: 'Heure de début',
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
                      title: 'Heure de début',
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
                      title: 'Heure de début',
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
                      title: 'Heure de début',
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
                      title: 'Heure de début',
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

    $http.get('/api/translation').then(function (response) {
      $scope.translations = response.data;
    });

    $http.get('/api/planning').then(function (response) {
      $scope.planning = response.data;
    });
	}
]).controller('AsyncButtonsController', function ($scope) {

    $scope.onSubmit = function () {
        console.log('onSubmit data in async controller', $scope.editor.getValue());
    };

});
