"use strict";

(function(){
  angular
  .module("language", [
    "ui.router",
    "playlists"])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("Welcome", {
      url: "",
      templateUrl: "welcome.html",
    })
    .state("playlistIndex", {
      url: "/playlists",
      templateUrl: "js/playlists/index.html",
      controller: "PlaylistIndexController",
      controllerAs: "PlaylistIndexViewModel"
    });

  } // end of router function



}());
