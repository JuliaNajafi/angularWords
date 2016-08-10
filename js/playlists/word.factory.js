"use strict";

(function(){
  angular
  .module("playlists")
  .factory("WordFactory", [
    "$resource",
    WordFactoryFunction
  ]);

  function WordFactoryFunction($resource){


  // return $resource("https://glosbe.com/gapi_v0_1/translate?from=eng&dest=cmn&format=json&tm=true");

  return $resource("http://localhost:3000/getapi");

} // end of factory function

}());
