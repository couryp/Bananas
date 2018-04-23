var defeatState = function(game) {

};

defeatState.prototype = {
  preload: function() {
    this.game.load.image('defeatscreen', 'assets/defeatscreen.png')
  },
  create: function() {
    gamemusic.stop();
    intensemusic.stop();
    var gameLoss = this.game.add.sprite(0, 0, 'defeatscreen');
    testdefeatmusic.play()

  }
}
