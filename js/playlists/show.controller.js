"use strict";

(function(){
  angular
  .module("playlists")
  .controller("PlaylistShowController", [
    "PlaylistFactory",
    "$stateParams",
    "WordFactory",
    "VocabFactory",
    PlaylistShowControllerFunction
  ]);

  function PlaylistShowControllerFunction(PlaylistFactory, $stateParams, VocabFactory, WordFactory){
    this.playlist = PlaylistFactory.get({id: $stateParams.id});
    this.vocab = VocabFactory.get({id: $stateParams.id}).$promise.then(function(response){
      console.log(response)
    })
    

    console.log("in show controller")

    var vm = this;
    var searchedWords = [];

    vm.search = function(){
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





    // this.update = function () {
    //   this.bleet.$update({id: $stateParams.id})
    // };
    // this.destroy = function(){
    //   this.bleet.$delete({id: $stateParams.id});
    // }

  }



}());
