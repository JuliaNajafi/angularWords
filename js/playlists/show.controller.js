"use strict";

(function(){
  angular
  .module("playlists")
  .controller("PlaylistShowController", [
    "PlaylistFactory",
    "$stateParams",
    "WordFactory",
    "$scope",
    PlaylistShowControllerFunction
  ]);

  function PlaylistShowControllerFunction(PlaylistFactory, $stateParams, WordFactory, $scope){
    var vm = this;

    //calling my api for playlist
    vm.playlist = PlaylistFactory.get({id: $stateParams.id})



    // searching for a word in api from wordFactory
    var searchedWords = [];
    vm.search = function(){
      new WordFactory.get({phrase: vm.word}).$promise.then(function(response){
        searchedWords.push(response.tuc[0].phrase.text)
        vm.usersearch = response.tuc[0].phrase.text
        return response.tuc[0].phrase.text
      })
    }

    vm.save = function(){
      console.log(vm.usersearch)
      vm.playlist.words.push({
        englishword: vm.word,
        otherword: vm.usersearch
      })
      vm.playlist.$save({id: $stateParams.id})
      console.log(vm.playlist.words)
    }




    // what i need to do is put an add button then update current playlist with the added word
    // this.update = function () {
    //   this.bleet.$update({id: $stateParams.id})
    // };



    // this.destroy = function(){
    //   this.bleet.$delete({id: $stateParams.id});
    // }

  }



}());
