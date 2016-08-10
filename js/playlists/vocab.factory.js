"use strict";

(function(){
  angular
  .module("playlists")
  .factory("VocabFactory", [
    "$resource",
    VocabFactoryFunction
  ]);

  function VocabFactoryFunction($resource){


  return $resource("http://localhost:3000/playlists/:id/words");

} // end of factory function

}());
