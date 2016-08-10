"use strict";

(function(){
  angular
  .module("playlists")
  .controller("PlaylistShowController", [
    "PlaylistFactory",
    "$stateParams",
    "WordFactory",
    PlaylistShowControllerFunction
  ]);

  function PlaylistShowControllerFunction(PlaylistFactory, $stateParams, WordFactory){
    this.playlist = PlaylistFactory.get({id: $stateParams.id});

    console.log("in show controller")

    var vm = this;
    var searchedWords = [];

    vm.search = function(){
      console.log("in fetch")
      new WordFactory.get({phrase: vm.word}).$promise.then(function(response){
        console.log(response.tuc[0].phrase.text)
        searchedWords.push(response.tuc[0].phrase.text)
        console.log(searchedWords)
        vm.usersearch = response.tuc[0].phrase.text
        return response.tuc[0].phrase.text
      }).then(function(response){
        console.log(response)
      })
    }


    // this.search = function(){
    //   console.log("in search");
    //   var word = this.word;
    //   console.log(word);
    //   // $http({
    //   //   method: 'GET',
    //   //   url: 'https://glosbe.com/gapi_v0_1/translate?from=eng&dest=cmn&format=json&tm=true&phrase=' + word
    //   // }).then(function(response){
    //   //   console.log(response)
    //   // })
    //   var url = "https://glosbe.com/gapi_v0_1/translate?from=eng&dest=cmn&format=json&phrase=" + word;
    //   $http.get(url).then(function(response){
    //     console.log(response);
    //   })
    // }



    // this.update = function () {
    //   this.bleet.$update({id: $stateParams.id})
    // };
    // this.destroy = function(){
    //   this.bleet.$delete({id: $stateParams.id});
    // }

  }



}());
