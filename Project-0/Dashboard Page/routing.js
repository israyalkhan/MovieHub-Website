var app = angular.module('movieApp', ['ngRoute']);


app.config(["$routeProvider", function($routeProvider){
    $routeProvider.when("/",{
        templateUrl:"views/mainpage/main.html"
    }).when("/registration.html",{
        templateUrl:"views/registration.html"
    }).when("/login",{
        templateUrl:"views/login.html",
    }).when("/dashboard",{
        templateUrl:"views/dashboard1.html",
    }).when("/upcoming",{
        templateUrl:"views/upcoming/upcoming.html",
        controller:"upcomingCtrl", 
    }).when("/toprated",{
        templateUrl:"views/toprated/toprated.html",
        controller:"topRatedCtrl"
    }).when("/popular",{
        templateUrl:"views/popular/popular.html",
        controller:"popularCtrl"
    }).when("/nowplaying",{
        templateUrl:"views/nowplaying/nowplaying.html",
        controller:"nowPlayingCtrl"
    }).when("/favorite",{
        templateUrl:"views/favorite/favorite.html",
        controller:"FavoritesCtrl"
    })
}]) 


