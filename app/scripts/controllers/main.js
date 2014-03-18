'use strict';

angular.module('conserjeApp')
  .controller('MainCtrl', function ($scope, $resource, $rootScope) {
    var Volunteer = $resource('http://localhost:3000/employees/:volunteerId');
    
    var volunteers = Volunteer.query(function () {
        $scope.volunteers = volunteers;
    });
    
    var Department = $resource('http://localhost:3000/departments');
    
    var departments = Department.query(function () {
        $scope.departments = departments;
    });
    
    $scope.processForm = function () {
      var SignIn = $resource('http://localhost:3000/employees/sign_in');
      var newSignIn = new SignIn($scope.formData);
      newSignIn.$save(function(newSignIn, data) {
          $scope.formData = {};
          var volunteers = Volunteer.query(function () {
            $scope.volunteers = volunteers;
          });
    
      });
    };
    
  });
