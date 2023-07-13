app.service("movieService", function ($http) {

  // Popular Data Fetching
  this.getPopular = function () {
    return $http
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c099f179d18c39902dc613403f2fc809"
      )
      .then(function (response) {
        return response.data;
      });
  };

  // Upcoming Data Fetching
  this.getUpcoming = function () {
    return $http
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=c099f179d18c39902dc613403f2fc809"
      )
      .then(function (response) {
        return response.data;
      });
  };


  // Top-Rated Data Fetching
  this.getTopRated = function () {
    return $http
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=c099f179d18c39902dc613403f2fc809"
      )
      .then(function (response) {
        return response.data;
      });
  };


  // NowPlaying Data fetching
  this.getNowPlaying = function () {
    return $http
      .get(
        "https://api.themoviedb.org/3/movie/now_playing?api_key=c099f179d18c39902dc613403f2fc809"
      )
      .then(function (response) {
        return response.data;
      });
  };











  //  Post upcoming movie data into JSON for Favorite 
  this.addUpcoming = function (movie) {
    console.log(movie);
    $http
      .post("http://localhost:3001/favorite", movie)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error in signUp :", error);
      });
  };



  //  Post Top-Rated movie data JSON for Favorite 
  this.addTopRated = function (movie) {
    console.log(movie);
    $http
      .post("http://localhost:3001/favorite", movie)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error in signUp :", error);
      });
  };



  //  Post Popular movie data JSON for Favorite  
  this.addPopular = function (movie) {
    console.log(movie);
    $http
      .post("http://localhost:3001/favorite", movie)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error in signUp :", error);
      });
  };



  //  Post Now-Playing movie data JSON for Favorite 
  this.addNowPlaying = function (movie) {
    console.log(movie);
    $http
      .post("http://localhost:3001/favorite", movie)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error in signUp :", error);
      });
  };







  // Get favorite data and display in favorite section 
  this.fav = function (cardmovie) {
    console.log(cardmovie);
    $http
      .get("http://localhost:3001/favorite")
      .then((response) => {
        cardmovie(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error in signUp :", error);
      });
  };
});
