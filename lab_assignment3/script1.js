var app = angular.module('search', [])
    .controller('searchEng', function($scope, $http) {
        $scope.getNews = function () {
            var x = $scope.search;
            var currentVideos = [];
            $http.get('https://www.googleapis.com/youtube/v3/search?q='+x+'&part=snippet&type=video&key=AIzaSyBFBx7wSQ1Vyi4YwLe3b8XDQeJzGaTpKzk').success(function (data) {

                console.log(data);
                $scope.currentVideos = data.items;})
        }});