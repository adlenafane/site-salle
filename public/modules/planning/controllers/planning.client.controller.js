'use strict';

angular.module('planning').controller('PlanningController', [
  '$scope', '$state','$http', '$window',
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

    $scope.$watch('search', function() {
      for (var key in $scope.search) {
        if (!$scope.search[key]) {
          delete $scope.search[key];
        }
      }
    }, true);

    var getCurrentDate = function () {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();

      if(dd < 10) {
          dd = '0' + dd;
      }

      if(mm < 10) {
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
        onrendered: function(canvas) {
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
]);
