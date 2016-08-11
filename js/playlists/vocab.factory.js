"use strict";

(function(){
  angular
  .module("playlists")
  .factory("VocabFactory", [
    "$resource",
    VocabFactoryFunction
  ]);

  function VocabFactoryFunction($resource){


  return $resource("http://localhost:3000/words/:id", {}, {update: {method: "PUT"}
});
} // end of factory function

}());
