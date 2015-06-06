angular.module('Search', [])
  .controller('Search', function($scope) {
    $scope.data = [
      { text: "St' Thomas college was able secure first place at provinsonal school IT awards festival. Following students earned destinction pass certificates for their web development project.</p><p><li>Anuruddha Hewawasam</li><li>Menuka Ishan</li><li>Sanjeewa Jayasena</li><li>Thilina Madhusanka</li><li>Pubudu Indrasiri</li>" }
    ]
  })
  .filter('highlight', function($sce) {
    return function(text, phrase) {
      if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
        '<span class="highlighted">$1</span>')

      return $sce.trustAsHtml(text)
    }
  })
