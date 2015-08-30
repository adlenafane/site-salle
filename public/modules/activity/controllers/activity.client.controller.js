'use strict';

angular.module('activity').controller('ActivityController', [
  '$scope', '$state', '$window',
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
        category: 'Etirement / Détente / Renforcement',
        description: 'C’est un cours basé sur l’enseignement des étirements musculaires afin d’optimiser la souplesse musculaire puis articulaire en favorisant le retour veineux et donc la récupération musculaire.'
      },
      {
        name: 'Gym douce',
        duration: '45\'',
        level: 'easy',
        category: 'Etirement / Détente / Renforcement',
        description: 'C’est un cours de renforcement musculaire adapté aux débutants, personnes âgées en convalescence... Ce cours permet aux personnes de se muscler tout en douceur afin de faciliter les mouvements du quotidien dans sa globalité.'
      },
      {
        name: 'Body Barre',
        duration: '45\'',
        level: 'medium',
        category: 'Renfo',
        description: 'C’est un cours de renforcement musculaire basé sur des exercices effectués à l’aide d’une barre lestée. Lors de ce type de cours tous les groupes musculaires sont travaillés pour permettre une fonte adipeuse (perte de graisse) et prise de masse musculaire sèche (permettant d’affiner la silhouette pour faire ressortir la musculature dite naturelle).'
      },
      {
        name: 'Cross training',
        duration: '45\'',
        level: 'hard',
        category: 'Renfo / Cardio',
        description: 'C’est un cours inspiré du cross fit qui est très intense, spécialement conçu pour les personnes en quête de sensations fortes souhaitant se dépasser pour repousser les limites de leur propre corps. C’est un cours d’alternance cardio et renforcement très difficile.'
      },
      {
        name: 'H.I.I.T.',
        duration: '30\'',
        level: 'extreme',
        category: 'Cardio',
        description: 'Tous comme le boot camp et le cross fit, le H.I.I.T. est le plus difficile des cours de renforcement musculaire car les exercices cardios et renfo sont directement combinés entre eux afin de faire vivre à l’adhérent une séance très intense qui lui permettra d’obtenir de réels résultats visibles et rapides en seulement quelques séances.'
      },
      {
        name: 'Abdos fessiers',
        duration: '30\'',
        level: 'easy',
        category: 'Renfo',
        description: 'C’est un cours basé sur des exercices d’abdos et fessiers spécialement pensés pour les femmes.'
      },
      {
        name: 'Postural Shape',
        duration: '45\'',
        level: 'medium',
        category: 'Etirement / Détente / Renforcement',
        description: 'C’est un cours visant à renforcer les muscles profonds du corps et en particulier ceux proches de la colonne vertébrale.'
      },
      {
        name: 'Pilates',
        duration: '45\'',
        level: 'medium',
        category: 'Etirement / Détente / Renforcement',
        description: 'Cours de renforcement musculaire et d\'étirement musculaire permettant de lutter contre les problèmes de scoliose, lumbago, sciatiques et hernies discales.'
      },
      {
        name: 'Body Sculpt',
        duration: '45\'',
        level: 'medium',
        category: 'Renfo',
        description: 'Cours basé sur le renforcement global du corps à l’aide d’haltères, élastiques, step... Ce cours permet de donner de nombreuses idées de renforcement aux adhérents se trouvant en déplacement loin du Magic Form.'
      },
      {
        name: 'C.A.F.',
        duration: '45\'',
        level: 'medium',
        category: 'Renfo',
        description: 'Cuisses, Abdos, Fessiers, c\'est le cours collectif de référence des femmes car il travaille leur zones de prédilection.'
      },
      {
        name: 'Biking',
        duration: '45-60\'',
        level: 'hard',
        category: 'Cardio',
        description: 'Cours collectif visant à remplacer une course cycliste, très intense car le mode de travail est basé sur l’alternance de reproduction de montée de col, de sprint et de récupération... Le but est de développer le muscle cardiaque et la perte de graisse.'
      },
      {
        name: 'Total Body',
        duration: '45-60\'',
        level: 'hard',
        category: 'Renfo / Cardio',
        description: 'Ce type de cours est basé sur l’explosivité musculaire et la combustion maximum des graisses pour pouvoir supporter le rythme soutenu de ce type de cours où le corps est soumis à rude épreuve afin de se délester de son stress et de ses kilos en trop.'
      },
      {
        name: 'Zumba',
        duration: '45-60\'',
        level: 'easy',
        category: 'Cardio dance',
        description: 'Cours de danse très accessible car peu de chorégraphie. Il permet de s’amuser facilement et de se délester de son stress.'
      },
      {
        name: 'Step',
        duration: '45\'',
        level: 'medium',
        category: 'Cardio',
        description: 'Cours aérobic s’effectuant sur un step qui permet à la fois de s’amuser tout en perdant de la masse graisseuse et en musclant le coeur.'
      },
      {
        name: 'Yoga',
        duration: '45\'',
        level: 'medium',
        category: 'Etirement / Détente / Renforcement',
        description: 'C’est une discipline du corps et de l’esprit qui comprend une grande variété d’exercices et de techniques. Les techniques employées utilisent des postures physiques (appelées asanas), des pratiques respiratoires (pranayama) et de méditation, ainsi que la relaxation profonde (yoga nidra).'
      },
      {
        name: 'Abdos Flash',
        duration: '45\'',
        level: 'medium',
        category: 'Renfo',
        description: 'En mettant l’accent sur le travail des abdominaux aussi bien profonds que superficiels, vous allez retrouver un bon gainage abdominale et par conséquent, un ventre plat ! Simple, rapide et efficace.'
      },
      {
        name: 'Body Zen',
        duration: '15\'',
        level: 'medium',
        category: 'Etirement / Détente / Renforcement',
        description: 'Body Zen Associe des exercices de yoga, de tai chi et de Pilates pour acquérir force et flexibilité, centration et calme. La respiration contrôlée, la concentration et une série structurée avec soin d\'étirements, de mouvements et de postures, associés à des musiques savamment choisies, contribuent à créer un entraînement holistique qui plonge votre corps dans un état d\'harmonie et d\'équilibre.'
      },
      {
        name: 'BP Fighting',
        duration: '15\'',
        level: 'medium',
        category: 'Cardio',
        description: 'Cours de fitness avec jeux d\'opposition de forte intensité basé sur des mouvements d\'arts martiaux et sports de combat divers. Cet entrainement complet permet un travail cardio vasculaire et musculaire.'
      },
      {
        name: 'Cardio Fit Boxing',
        duration: '15\'',
        level: 'medium',
        category: 'Renfo / Cardio',
        description: 'Fusion harmonieuse du karaté-fitness et de la boxe training sans contact, un entrainement complet du corps.'
      },
      {
        name: 'Djembel',
        duration: '15\'',
        level: 'medium',
        category: 'Cardio dance',
        description: 'Danse de bien-être basée sur les sonorités, la gestuelle et les mouvements issus des danses africaines'
      }
    ];

    $scope.categories = $window._.chain($scope.activities).pluck('category').uniq().sortBy().value();
  }
]);
