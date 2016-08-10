"use strict";

(function(){
  angular
  .module("playlists")
  .factory("PlaylistFactory", [
    "$resource",
    PlaylistFactoryFunction
  ]);

  function PlaylistFactoryFunction( $resource ){
    return $resource("http://localhost:3000/playlists/:id", {}, {update: {method: "PUT"}
  });
  }

}());
