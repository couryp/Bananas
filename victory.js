var victoryState = function(game){

};

victoryState.prototype = {
	   preload: function(){
      this.game.load.image('victoryscreen', 'assets/victoryscreen.png')
	},
  	create: function(){
    intensemusic.stop()
		var gameWon = this.game.add.sprite(0, 0, 'victoryscreen');
    victorymusic.play()

	},
  update: function () {
    document.body.onkeyup = function(e){
      if(e.keyCode == 32){
          window.location.reload(false)
      }
    }
  }
}
