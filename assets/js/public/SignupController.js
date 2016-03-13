angular.module('SignupModule')
    .controller('SignupController', ['$scope', '$http', 'toastr', function($scope, $http, toastr){
        $scope.signupForm = {
            loading: false
        };

        $scope.submitSignupForm = function(){
            $scope.signupForm.loading = true;
            $http.post('/signup', {
                'name': $scope.signupForm.name,
                'email': $scope.signupForm.email,
                'password': $scope.signupForm.password
            })
            .then(function onSuccess(res){
                window.location = '/user';
            })
            .catch(function onError(res){
                console.log(res);
            })
            .finally(function andLast(){
                $scope.signupForm.loading = false;
            });
        }
}]);