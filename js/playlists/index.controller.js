"use strict";

(function(){
  angular
  .module( "playlists" )
  .controller("PlaylistIndexController", [
    "PlaylistFactory",
    "$state",
    PlaylistIndexControllerFunction
  ]);

  function PlaylistIndexControllerFunction(PlaylistFactory, $state){
    this.playlists = PlaylistFactory.query();

    this.playlist = new PlaylistFactory();
    this.create = function(){
      this.playlist.$save().then(function(response){
        $state.go("playlistShow", ({id: response.id}));
      })
    }

  }


}());
