"use strict";

(function(){
  angular
  .module("playlists")
  .controller("PlaylistShowController", [
    "PlaylistFactory",
    "$stateParams",
    "WordFactory",
    "VocabFactory",
    "$state",
    PlaylistShowControllerFunction
  ]);

  function PlaylistShowControllerFunction(PlaylistFactory, $stateParams, WordFactory, VocabFactory, $state){
    var vm = this;

    //calling my api for playlist
    vm.playlist = PlaylistFactory.get({id: $stateParams.id})

    vm.destroy = function(){
      this.playlist.$delete({id: $stateParams.id}).then(function(response){
        $state.go("playlistIndex");
      })
    }


    // searching for a word in api from wordFactory
    vm.search = function(){
      new WordFactory.get({phrase: vm.phrase}).$promise.then(function(response){
        vm.usersearch = response.tuc[0].phrase.text
        return vm.usersearch
      })
    }

    // this adds searched words to the playlist and database
    vm.add = function(){
      vm.word = new VocabFactory({
        englishword: vm.phrase,
        otherword: vm.usersearch,
        playlist_id: vm.playlist.id});
      console.log(vm.word)
      vm.word.$save().then(function(response){
        $state.reload()
      })
    }

    //to start flashcards
    vm.start = function(){
      vm.flashcard = vm.playlist.words[Math.floor((Math.random() * this.playlist.words.length) + 1)]
      vm.myVar = false
    }

    vm.english = function(){
      console.log(vm.flashcard.englishword)
      vm.show = true;
    }





  }



}());
