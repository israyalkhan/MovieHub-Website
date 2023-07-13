// Popular movie controller
app.controller("popularCtrl", function ($scope, movieService) {
  movieService.getPopular().then(function (data) {
    $scope.movies = data.results;
  });

  // add to favorite
  $scope.addPopular = function (movie) {
    movieService.addPopular(movie);
  };
});







// upcomoing movie controller
app.controller("upcomingCtrl", function ($scope, movieService) {
  movieService.getUpcoming().then(function (data) {
    $scope.movies = data.results;
  });

  // add to favorite
  $scope.addUpcoming = function (movie) {
    movieService.addUpcoming(movie);
  };
});







// topRated movie controller
app.controller("topRatedCtrl", function ($scope, movieService) {
  movieService.getTopRated().then(function (data) {
    $scope.movies = data.results;
  });

  // add to favorite
  $scope.addTopRated = function (movie) {
    movieService.addTopRated(movie);
  };
});







// nowplaying movie controller
app.controller("nowPlayingCtrl", function ($scope, movieService) {
  movieService.getNowPlaying().then(function (data) {
    $scope.movies = data.results;
  });

  // add to favorite
  $scope.addNowPlaying = function (movie) {
    movieService.addNowPlaying(movie);
  };
});



      //  Favroti Controller 
app.controller("FavoritesCtrl", function ($scope, movieService) {
  movieService.fav(function (data) {
    $scope.favorite = data;
  });
});












  // Registration controller 
app.controller("RegistrationController", function ($scope, $http, $location) {
  $scope.register = function (user) {
    $http
      .post("http://localhost:3000/users", user)
      .then((response) => {
        console.log(response);
        $location.path("/login");
      })
      .catch((error) => {
        console.error("Error in signUp :", error);
      });
      alert("Registration Successfully")
  };
});




  //  Login Controller 
app.controller("LoginController", function ($scope, $http, $location) {
  $scope.login = function (credentials) {
    console.log(credentials);
    $http.get("http://localhost:3000/users").then((response) => {
      var users = response.data;
      console.log(users);
      for (var user of users) {
        if (
          user.email === credentials.email &&
          user.password === credentials.password
        ) {
          console.log("succ");
          $location.path("/dashboard");
        }
        else{
          alert("Wrong Details")
        }
      }
    });
  };
});
