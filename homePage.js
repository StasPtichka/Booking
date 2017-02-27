/**
 * Created by stas on 24.02.17.
 */
// var config = {
//     apiKey: "AIzaSyB5Wgo5RO_GI5xf6fsaSfH8OdZlx-X7lqw",
//     authDomain: "simpleservice-778ef.firebaseapp.com",
//     databaseURL: "https://simpleservice-778ef.firebaseio.com",
//     storageBucket: "simpleservice-778ef.appspot.com",
//     messagingSenderId: "698110095322"
// };
// firebase.initializeApp(config);

var config = {
    apiKey: "AIzaSyB5Wgo5RO_GI5xf6fsaSfH8OdZlx-X7lqw",
    authDomain: "simpleservice-778ef.firebaseapp.com",
    databaseURL: "https://simpleservice-778ef.firebaseio.com",
    storageBucket: "simpleservice-778ef.appspot.com",
    messagingSenderId: "698110095322"
};
firebase.initializeApp(config);


var appHome = angular.module('appHome', []);


appHome.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/entry', {
            templateUrl: 'entry.html',
            controller: 'Entry'

        }).when('/create', {
            templateUrl: 'create.html',
            controller: 'Create'

        }).otherwise({
            redirectTo: '/'
        });

    }]);

appHome.controller('Entry', function ($scope, $location) {

    $scope.buttEntry = function (sign) {


        email = $scope.Email;
        pass = $scope.pass;
        console.log(email, pass);
        $scope.but = '';
        $scope.pass = $scope.but;

        firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {

            if (error.code) {
                alert(error.message)
            }
            else {

                sign = true;
            }


        });
        if (sign = true) {
            $location.path('/')
        }
        /*Тут надо скрыть вот это:

         <div ng-model = "Menu" id="personalArea">
         <p><a href="#entry">войти</a> или <a href="#create">создать аккаунт</a></p>
         </div>

         там что то типо ng-show/ng-hide ng-if тут смотрел но не пробовал
         https://metanit.com/web/angular/2.11.php
         */
        // <span class = "chek-element" ng-show = "sign">email</span>
        

    }


});
appHome.controller('Create', function ($scope, $location) {


    $scope.buttonReg = function () {


        email = $scope.email;
        pass = $scope.pass;
        passRetry = $scope.passRetry;

        $scope.but = '';
        $scope.pass = $scope.but;
        $scope.passRetry = $scope.but;

        if (pass !== passRetry) {
            alert("Пароли не совпадают")
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {


                if (error.code) {


                    alert(error.message);


                }


            });


            $location.path('/entry');


        }


    };

});





