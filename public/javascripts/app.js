//var app = angular.module('myApp', []);

//angular.module(“ng”).config(function($controllerProvider){
//    $controllerProvider.allowGlobals();
//});

var app = angular.module('myApp', ['ngResource']);
app.controller('aaaCtrl', function($scope){
  $scope.name = 'hokaccha';
});

app.controller('MainCtrl', function($scope) {
  $scope.searchText = 'yamada';

  $scope.irCode = [
    'Kazuhito Hokamura',
    'Takeshi Takatsudo',
    'Akihiro Oyamada',
    'Kazunori Tokuda',
    'Yukihisa Yamada',
  ];
});

app.filter('reverse', function() {
  return function(input) {
    // 入力が文字列じゃなかったら空文字を返す
    if (typeof input !== 'string') {
      return '';
    }

    // 入力文字列を逆にして返す
    return input.split('').reverse().join('');
  };
});

app.controller('HttpCtrl', function($scope, $http) {
  $http({ method: 'GET', url: './members.json' })
    .success(function(members, status, headers, config) {
      console.log(members);
      console.log(status);
      console.log(headers('content-type'));
      console.log(config);
      $scope.members = members;
    })
    .error(function() {
      // エラー処理
    });
});

app.controller('ResourceCtrl', function($scope, $resource) {
  var Member = $resource('./members/:id.json', { id: '@id' },
      {
        get: {method: 'GET', isArray: true}, // apiの戻り値が配列の場合は「isArray: true」を指定する
        find: {method: 'GET'},
        create: {method: 'POST'}
      });
    $scope.members = Member.query();
    //Member.get({ id: id },function(user1){
    //$scope.user1 = Member.find();
    //});
});

app.controller('ToggleCtrl', function($scope) {
  $scope.isShow = true;

  $scope.toggle = function() {
    $scope.isShow = !$scope.isShow;
  }
});
