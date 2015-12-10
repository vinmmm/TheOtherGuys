 app.controller('Character', function ($scope) {
    $scope.info = {
        'Alan': {
            weapon: 'Calculator',
            job: 'Police Officer'
        },
            'Terry': {
            weapon: 'Gun',
            job: 'Police Officer'
        },
            'Gene': {
            weapon: 'None',
            job: 'Police Captain'
        },
            'Sheila': {
            weapon: 'None',
            job: 'M D'
        },
            'Danson': {
            weapon: 'Gun',
            job: 'Police Detective'
        },
            'Highsmith': {
            weapon: 'Gun',
            job: 'Police Detective'
        },
            'Bob': {
            weapon: 'None',
            job: 'Police Accountant'
        }      
    };
    $scope.currentInfo = $scope.info['Alan'];
    $scope.$on('CharacterChanged', function (event, newCharacter) {
        $scope.currentInfo = $scope.info[newCharacter];
    });
    $scope.deleteChar = function () {
        delete $scope.info[$scope.currentName];
        $scope.$emit('CharacterDeleted', $scope.currentName);
    };
});