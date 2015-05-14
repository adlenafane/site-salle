'use strict';

angular.module('activity').controller('ActivityController', [
  '$scope', '$state',
  function ($scope, $state) {
    $scope.currentCategory = null;
    $scope.search = {};

    if ($state.params.name) {
      $scope.search.name = $state.params.name;
    }

    $scope.activities = [
      {
        name: 'Boot Camp',
        duration: '30\'',
        level: 'hard',
        category: 'renforcement',
        description: 'C’est un cours inspiré de l’entrainement physique dispensé par les militaires et pour les militaires. Ce cours est un enchainement de plusieurs petits ateliers où le pratiquant effectue un exercice puis sans pause ou seulement de quelques secondes va enchainer sur un autre atelier. Les objectifs de ce type de cours sont la perte de poids et la transformation de la masse grasse (graisse) en masse maigre (muscle) ainsi que l’amélioration du système cardio vasculaire.'
      },
      {
        name: 'Stretching',
        duration: '15\'',
        level: 'easy',
        category: 'renforcement',
        description: 'C’est un cours basé sur l’enseignement des étirements musculaires afin d’optimiser la souplesse musculaire puis articulaire en favorisant le retour veineux et donc la récupération musculaire.'
      },
      {
        name: 'Gym douce',
        duration: '45\'',
        level: 'easy',
        category: 'renforcement',
        description: 'C’est un cours de renforcement musculaire adapté aux débutants, personnes âgées en convalescence... Ce cours permet aux personnes de se muscler tout en douceur afin de faciliter les mouvements du quotidien dans sa globalité.'
      },
      {
        name: 'Body Barre',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'C’est un cours de renforcement musculaire basé sur des exercices effectués à l’aide d’une barre lestée. Lors de ce type de cours tous les groupes musculaires sont travaillés pour permettre une fonte adipeuse (perte de graisse) et prise de masse musculaire sèche (permettant d’affiner la silhouette pour faire ressortir la musculature dite naturelle).'
      },
      {
        name: 'Cross training',
        duration: '45\'',
        level: 'hard',
        category: 'renforcement',
        description: 'C’est un cours inspiré du cross fit qui est très intense, spécialement conçu pour les personnes en quête de sensations fortes souhaitant se dépasser pour repousser les limites de leur propre corps. C’est un cours d’alternance cardio et renforcement très difficile.'
      },
      {
        name: 'Cross fit',
        duration: '60\'',
        level: 'hard',
        category: 'renforcement',
        description: 'Le CrossFit est une méthode d\'entraînement physique dont l\'objectif est de développer simultanément dix qualités : l\'agilité, l\'équilibre, la résistance, la coordination, la vitesse, la puissance, la précision, la force, l\'endurance cardiovasculaire et la flexibilité. Pour ce faire, les différents exercices font travailler plusieurs muscles à la fois pour dépenser un maximum d\'énergie. L\'entraînement est particulièrement intensif. Cette discipline est très populaire aux Etats-Unis.'
      },
      {
        name: 'H.I.I.T.',
        duration: '30\'',
        level: 'extreme',
        category: 'renforcement',
        description: 'Tous comme le boot camp et le cross fit, le H.I.I.T. est le plus difficile des cours de renforcement musculaire car les exercices cardios et renfo sont directement combinés entre eux afin de faire vivre à l’adhérent une séance très intense qui lui permettra d’obtenir de réels résultats visibles et rapides en seulement quelques séances.'
      },
      {
        name: 'Abdos fessiers',
        duration: '30\'',
        level: 'easy',
        category: 'renforcement',
        description: 'C’est un cours basé sur des exercices d’abdos et fessiers spécialement pensés pour les femmes.'
      },
      {
        name: 'Postural Shape',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'C’est un cours visant à renforcer les muscles profonds du corps et en particulier ceux proches de la colonne vertébrale.'
      },
      {
        name: 'Pilates',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'Cours de renforcement musculaire et d\'étirement musculaire permettant de lutter contre les problèmes de scoliose, lumbago, sciatiques et hernies discales.'
      },
      {
        name: 'Body Sculpt',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'Cours basé sur le renforcement global du corps à l’aide d’haltères, élastiques, step... Ce cours permet de donner de nombreuses idées de renforcement aux adhérents se trouvant en déplacement loin du Magic Form.'
      },
      {
        name: 'C.A.F.',
        duration: '45\'',
        level: 'medium',
        category: 'renforcement',
        description: 'Cuisses, Abdos, Fessiers, c\'est le cours collectif de référence des femmes car il travaille leur zones de prédilection.'
      },
      {
        name: 'Biking',
        duration: '45-60\'',
        level: 'hard',
        category: 'cardio',
        description: 'Cours collectif visant à remplacer une course cycliste, très intense car le mode de travail est basé sur l’alternance de reproduction de montée de col, de sprint et de récupération... Le but est de développer le muscle cardiaque et la perte de graisse.'
      },
      {
        name: 'Total Body',
        duration: '45-60\'',
        level: 'hard',
        category: 'cardio',
        description: 'Ce type de cours est basé sur l’explosivité musculaire et la combustion maximum des graisses pour pouvoir supporter le rythme soutenu de ce type de cours où le corps est soumis à rude épreuve afin de se délester de son stress et de ses kilos en trop.'
      },
      {
        name: 'Piloxing',
        duration: '45\'',
        level: 'hard',
        category: 'cardio',
        description: 'C’est un mélange de boxe, pilates, course à pied, sprint et renforcement global du corps. Ce cours est la solution tout-en-un pour les personnes actives physiquement.'
      },
      {
        name: 'Full body',
        duration: '45\'',
        level: 'medium',
        category: 'cardio',
        description: 'Comme le Total Body ce cours est basé sur l’expressivité musculaire mais à un niveau moindre permettant aux débutant de commencer plus en douceur ces types de cours.'
      },
      {
        name: 'Zumba',
        duration: '45-60\'',
        level: 'easy',
        category: 'danse',
        description: 'Cours de danse très accessible car peu de chorégraphie. Il permet de s’amuser facilement et de se délester de son stress.'
      },
      {
        name: 'Latinva',
        duration: '60\'',
        level: 'easy',
        category: 'danse',
        description: 'Cours de danse très accessible basé sur des pas de mérengué, bachata et salsa permettant à tout le monde de s\'amuser.'
      },
      {
        name: 'Bachata',
        duration: '45\'',
        level: 'medium',
        category: 'danse',
        description: 'Cours de danse latino très à la mode qui peut se danser seul ou à deux.'
      },
      {
        name: 'Salsa',
        duration: '45\'',
        level: 'medium',
        category: 'danse',
        description: 'Cours de danse qui peut se pratiquer seul ou accompagné.'
      },
      {
        name: 'Step',
        duration: '45\'',
        level: 'medium',
        category: 'danse',
        description: 'Cours aérobic s’effectuant sur un step qui permet à la fois de s’amuser tout en perdant de la masse graisseuse et en musclant le coeur.'
      }
    ];
  }
]);
