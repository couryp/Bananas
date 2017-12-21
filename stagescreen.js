// var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
//   preload: preload,
//   create: customCreate('giza', 'egypt', 'anubis'),
//   update: update
// });
var game;
var destroyStage = document.querySelector('.stageselector')
var myStage = document.querySelector('#box1')
var myStage2 = document.querySelector('#box2')
var myFood = document.querySelector('#cssbananas')
///////

function waitStage(){
  var stage1 = document.createElement('img')
  stage1.setAttribute('src', 'assets/zoomap.png')
  myStage.appendChild(stage1)

  stage1.addEventListener('click', function(){
      myFood.style.opacity = 1;
      //myStage.parentNode.removeChild(myStage)
      destroyStage.parentNode.removeChild(destroyStage)
      introAudio.pause();
      game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
      preload: preload,
      create: customCreate('grass', 'grass', 'guard'),
      update: update
    });
    //testing states
    game.state.add('victory', victoryState);
    game.state.add('defeat', defeatState);
  })

  var stage2 = document.createElement('img')
  stage2.setAttribute('src', 'assets/volcanomap.png')
  myStage.appendChild(stage2)

  stage2.addEventListener('click', function(){
      myFood.style.opacity = 1;
      destroyStage.parentNode.removeChild(destroyStage)
      introAudio.pause();
      game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
      preload: preload,
      create: customCreate('hellfire', 'hell', 'ragnaros'),
      update: update
    });
    //testing states
    game.state.add('victory', victoryState);
    game.state.add('defeat', defeatState);
  })


  var stage3 = document.createElement('img')
  stage3.setAttribute('src', 'assets/egyptmap.png')
  myStage2.appendChild(stage3)

  stage3.addEventListener('click', function(){
      myFood.style.opacity = 1;
      destroyStage.parentNode.removeChild(destroyStage)
      introAudio.pause();
      game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
      preload: preload,
      create: customCreate('giza', 'egypt', 'anubis'),
      update: update
    });
    //testing states
    game.state.add('victory', victoryState);
    game.state.add('defeat', defeatState);
  })



  var stage4 = document.createElement('img')
  stage4.setAttribute('src', 'assets/spacemap.png')
  myStage2.appendChild(stage4)

  stage4.addEventListener('click', function(){
      myFood.style.opacity = 1;
      destroyStage.parentNode.removeChild(destroyStage)
      introAudio.pause();
      game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
      preload: preload,
      create: customCreate('galaxy', 'space', 'warlock'),
      update: update
    });
    //testing states
    game.state.add('victory', victoryState);
    game.state.add('defeat', defeatState);
  })

}
