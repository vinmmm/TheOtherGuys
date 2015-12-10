app.controller('Characters', function ($scope) {
    $scope.names = ['Alan', 'Terry', 'Gene', 'Sheila', 'Danson', 'Highsmith', 'Bob'];
    $scope.currentName = $scope.names[0];
    $scope.changeName = function () {
        $scope.currentName = this.name;
        $scope.$broadcast('CharacterChanged', this.name);
    };
    $scope.$on('CharacterDeleted', function (event, removeName) {
        var i = $scope.names.indexOf(removeName);
        $scope.names.splice(i, 1);
        $scope.currentName = $scope.names[0];
        $scope.$broadcast('CharacterChanged', $scope.currentName);

    });
})