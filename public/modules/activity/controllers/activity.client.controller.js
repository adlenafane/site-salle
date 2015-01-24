'use strict';

angular.module('activity').controller('ActivityController', ['$scope',
  function($scope) {
    $scope.currentCategory = null;

    $scope.zoomOn = function(category) {
      if ($scope.currentCategory !== category) {
        $scope.currentCategory = category;

      } else {
        $scope.currentCategory = null;
      }
    };

    $scope.activities = [
      {
        name: 'Boot Camp',
        duration: '45\'',
        level: 'hard',
        category: 'renforcement',
        description: 'C’est un cours inspiré de l’entrainement physique dispensé par les militaires et pour les militaires. Ce cours est un enchainements de plusieurs petits ateliers où le pratiquant effectue un exercice puis sans pause ou seulement de quelques secondes va enchainer sur un autre atelier. Les objectifs de ce type de cours sont la perte de poids et la transformation de la masse grasse ( graisse) en masse maigre  (muscle) ainsi que l’amélioration du système cardio vasculaire'
      },
      {
        name: 'Step',
        duration: '45\'',
        level: 'easy',
        category: 'renforcement',
        description: 'C’est un cours basé sur l’enseignement des étirements musculaires afin d’optimiser la souplesse musculaire puis articulaire en favorisant le retour veineux et donc la récupération musculaire'
      },
      {
        name: 'Gym douce',
        duration: '45\'',
        level: 'easy',
        category: 'renforcement',
        description: 'C’est un cours de renforcement musculaire adapté aux débutants, personnes âgées en convalescence. Ce cours permet aux personnes de se muscler tout en douceur afin de faciliter les mouvements du quotidien dans sa globalité'
      },
      {
        name: 'Body Barre',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'C’est un cours de renforcement musculaire basé sur des exercices effectués à l’aide d’une barre lestée. Lors de ce type de cours tous les groupes musculaires sont travaillés pour permettre une fonte adipeuse ( perte de graisse) et prise de masse musculaire sèche ( permettant d’affiner la silhouette pour faire ressortir la musculature dite naturelle)'
      },
      {
        name: 'Cross training',
        duration: '45\'',
        level: 'hard',
        category: 'renforcement',
        description: 'C’est un cours inspiré du cross fit qui est très intense, spécialement conçu pour les personnes en quête de sensations forte souhaitant se dépasser pour repousser les limites de leur propre corps. C’est un cours d’alternance cardio et renfo très difficile'
      },
      {
        name: 'H.I.I.T.',
        duration: '45\'',
        level: 'easy',
        category: 'renforcement',
        description: 'Tous comme le boot camp et le cross fit le H.I.I.T. est le plus difficile des cours de renforcement musculaire car les exercices cardions et renfo sont directement combinés entre eux afin de faire vivre à l’adhérents une séance très intense qui lui permettra d’obtenir de réels résultats visible et rapide en seulement quelques séances'
      },
      {
        name: 'Abdos fessiers',
        duration: '45\'',
        level: 'easy',
        category: 'renforcement',
        description: 'C’est un cours basé sur des exercices d’ados et fessiers spécialement pensés pour les femmes'
      },
      {
        name: 'Postural Shape',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'C’est un cours visant à renforcer les muscles profonds du corps et en particuliers ceux proches de la colonne vertébrale'
      },
      {
        name: 'Pilates',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'Cours de renforcement musculaire et étirement musculaires permettant de lutter contre les problèmes de scoliose, lumbago, sciatiques et hernies discales'
      },
      {
        name: 'Body Sculpt',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'Cours basé sur le renforcement global du corps à l’aide d’haltères, élastiques, step… Ce cours permet de donner de nombreuses idées de renforcement aux clients se trouvant en déplacement loin de leur magic form'
      },
      {
        name: 'C.A.F.',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'Cuisse , Abdos, Fessiers, C’est le cours collectif de référence des femmes car il travaille leur zones de prédilection'
      }
    ];
  }
]);
