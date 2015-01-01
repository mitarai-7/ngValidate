'use strict';

angular.module('myApp.view1', ['ngRoute', 'ui.bootstrap'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])
    .controller('View1Ctrl', function ($scope) {
        $scope.startTime = new Date();
        $scope.endTime = new Date();

        $scope.hstep = 1;
        $scope.mstep = 15;

        $scope.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        };

        $scope.ismeridian = false;
        $scope.isCollectRange = true;
    })
    .directive('vaTimeRange', function(){
        return{
            link: function(scope){
                scope.$watch('startTime',function(){
                    console.log('startTime is change!');
                    if (scope.startTime <= scope.endTime){
                        scope.isCollectRange = true;
                    } else {
                        scope.isCollectRange = false;
                    }
                });
                scope.$watch('endTime',function(){
                    console.log('endTime is change!');
                    if (scope.startTime <= scope.endTime){
                        scope.isCollectRange = true;
                    } else {
                        scope.isCollectRange = false;
                    }
                });
            }
        };
    });
