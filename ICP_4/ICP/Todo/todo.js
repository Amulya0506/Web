var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.items = [];

    // Write code to push new item


    $scope.submitNewItem = function () {

    };

    // Write code to complete item
    $scope.completeItem = function (index) {

    <script src="angular.min.js"></script>
            <script>
            angular.module('todoApp', [])
                .controller('todoController', function($scope){
                    $scope.tasks = [];
                    $scope.add = function() {
                        $scope.tasks.push($scope.title);
                    }
                })
            </script>
            <div ng-app="todoApp" ng-controller="todoController">
            <input ng-model="title"><button ng-click="add()">Add</button>
            <ul>
            <li ng-repeat="t in tasks">{{ t }}</li>
        </ul>
        </div>

    // Write code to delete item
        <script src="angular.min.js"></script>
            <script>
            angular.module('todoApp', [])
                .controller('todoController', function($scope) {
                    $scope.tasks = [];
                    $scope.add = function() {
                        $scope.tasks.push($scope.title);
                    }
                    $scope.delete = function() {
                        $scope.tasks.splice(this.$index, 1);
                    }
                })
            </script>
            <div ng-app="todoApp" ng-controller="todoController">
            <form ng-submit="add()">
            <input ng-model="title"><button>Delete</button>
            </form>
            <ul>
            <li ng-repeat="t in tasks track by $index">{{ t }} <button ng-click="delete()">x</button></li>
        </ul>
        </div>
    };
}]);