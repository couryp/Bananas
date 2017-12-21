// var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
//   preload: preload,
//   create: customCreate('giza', 'egypt', 'anubis'),
//   update: update
// });

function preload() {
  game.load.image('grass', 'assets/grass.png');
  game.load.image('hellfire', 'assets/lava.png');
  game.load.image('galaxy', 'assets/space.png');
  game.load.image('giza', 'assets/pyramids.png');

  //grassy
  game.load.image('grass1', 'assets/walls/topbottomwall.png');
  game.load.image('grass2', 'assets/walls/leftrightwall.png');
  game.load.image('grass3', 'assets/walls/topbottomwall.png');
  game.load.image('grass4', 'assets/walls/leftrightwall.png');

  //hellfire
  game.load.image('hell1', 'assets/walls/helltop.png')
  game.load.image('hell2', 'assets/walls/hellright.png')
  game.load.image('hell3', 'assets/walls/hellbot.png')
  game.load.image('hell4', 'assets/walls/hellleft.png')

  //galaxy
  game.load.image('space1', 'assets/walls/spacetop.png')
  game.load.image('space2', 'assets/walls/spaceright.png')
  game.load.image('space3', 'assets/walls/spacebot.png')
  game.load.image('space4', 'assets/walls/spaceleft.png')

  //egypt
  game.load.image('egypt1', 'assets/walls/egypttop.png')
  game.load.image('egypt2', 'assets/walls/egyptright.png')
  game.load.image('egypt3', 'assets/walls/egyptbot.png')
  game.load.image('egypt4', 'assets/walls/egyptleft.png')

  //misc
  game.load.image('kong', 'assets/kong.png');
  game.load.image('yellow', 'assets/banana.png');

  game.load.image('guard', 'assets/jamesbond.png');
  game.load.image('anubis', 'assets/anubis.png');
  game.load.image('ragnaros', 'assets/ragnaros.png');
  game.load.image('warlock', 'assets/warlock.png');

  game.load.image('boom', 'assets/bomb.png');
  game.load.image('lostboy', 'assets/baby.png')
  game.load.image('redboy', 'assets/redboy.png')
  game.load.image('purplebullet', 'assets/purplebullet.png')

  //intro
  game.load.image('loadingscreen', 'assets/loadingscreen.png')
  game.load.image('stagescreen', 'assets/stagescreen.png')
  game.load.audio('intromusic', 'assets/introsong.ogg')

  //victory
  game.load.image('victoryscreen', 'assets/victoryscreen.png')
  game.load.audio('victorymusic', 'assets/victorymusic.ogg')


  //defeat
  game.load.image('defeatscreen', 'assets/defeatscreen.png')
  game.load.audio('defeatmusic', 'assets/defeatmusic.ogg')

  //sounds
  game.load.audio('ouchsound', 'assets/trap.ogg');
  game.load.audio('bulletsound', 'assets/ouch.ogg');

  game.load.audio('nomnomsound1', 'assets/monkeynoise1.ogg');
  game.load.audio('nomnomsound2', 'assets/monkeynoise2.ogg');


  game.load.audio('babyspawn', 'assets/babyalert.ogg')
  game.load.audio('gamingmusic', 'assets/gamesong.ogg')
  game.load.audio('babyintense', 'assets/metalgear.ogg')

  //animation
  game.load.spritesheet('dancingbanana', 'assets/goldenbananas.png', 37.5, 50, 12)
  game.load.spritesheet('dancingbaby', 'assets/bebe.png', 70, 100, 2)
  game.load.spritesheet('moveharambe', 'assets/movingkong.png', 50, 50, 12)


}

var player;
var fence;
var cursors;
var bananas;
var guardtower;
var traps;
var count = 0;
var baby;
var redex;
var testyellow;
var newBoy;
var guardFence;

var shootingAnchor;
var enemyBullets;
var firingTimer = 0;
var fireRate = 300;
var fireButton;

var trapsound;
var eatsound1;
var eatsound2;
var eatsound3;
var eatsound4;
var eatsound5;
var babyalert;
var gamemusic;
var intensemusic;
var hitsound;
var intromusic;
var defeatmusic;
var victorymusic;

function customCreate(myMap, myWall, myEnemy){
  function create() {
    //stopaudio
    
    //console.log(game);
    //physics for the game
    game.physics.startSystem(Phaser.Physics.ARCADE);
    //default background, !!need to add DOM manipulation to allow multiple choices!!

    //grass, galaxy, giza, hellfire, loadingscreen, stagescreen, defeatscreen, victoryscreen
  	game.add.sprite(0, 0, myMap);
    //adding a group for the walls
    walls = game.add.group();
    //adding physics for the group walls
    walls.enableBody = true;

    fence = walls.create(0, 0, myWall+'1');
    fence.body.immovable = true;

    fence = walls.create(0, 50, myWall+'4');
    fence.body.immovable = true;

    fence = walls.create(0, 550, myWall+'3');
    fence.body.immovable = true;

    fence = walls.create(750, 50, myWall+'2');
    fence.body.immovable = true;

    guardFence = walls.create(55, 250, myEnemy);
    guardFence.body.immovable = true;

    // player and settings
    player = game.add.sprite(400, 300, 'moveharambe');
    player.animations.add('idle', [0], 4, true);
    player.animations.add('left', [1,2,3,4], 4, true);
    player.animations.add('right', [5,6,7,8], 4, true);
    player.animations.add('up', [9,10,11], 3, true);
    player.animations.add('down', [9,10,11], 3, true);
    player.animations.play('idle')


    // to enable physics on the player
    game.physics.arcade.enable(player);

    player.body.collideWorldBounds = true;
    player.body.allowGravity = false;



    bananas = game.add.group();
    bananas.enableBody = true;


    var food = bananas.create(65, 70, 'dancingbanana');
    food.animations.add('spin', [0,1,2,3,4,5,6,7,8,9,10,11], 8, true);
    food.animations.play('spin')


    baby = game.add.group();
    baby.enableBody = true;

    redex = game.add.group();
    redex.enableBody = true;



    traps = game.add.group();
    traps.enableBody = true;

    var bomb = traps.create(425, 405, 'boom')
    bomb = traps.create(525, 100, 'boom')
    bomb = traps.create(170, 170, 'boom')





    //sounds
    gamemusic = game.add.audio('gamingmusic');
    gamemusic.play();

    trapsound = game.add.audio('ouchsound');
    eatsound1 = game.add.audio('nomnomsound1')
    eatsound2 = game.add.audio('nomnomsound2')
    babyalert = game.add.audio('babyspawn')
    intensemusic = game.add.audio('babyintense')
    hitsound = game.add.audio('bulletsound')

    intromusic = game.add.audio('intromusic')
    defeatmusic = game.add.audio('defeatmusic')
    victorymusic = game.add.audio('victorymusic')

    //enemyBullets
    enemyBullets = game.add.group();
    enemyBullets.enableBody = true;
    enemyBullets.physicsBodyType = Phaser.Physics.ARCADE;
    enemyBullets.createMultiple(30, 'purplebullet');
    enemyBullets.setAll('anchor.x', 0.5);
    enemyBullets.setAll('anchor.y', 1);
    enemyBullets.setAll('outOfBoundsKill', true);
    enemyBullets.setAll('checkWorldBounds', true);

    fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    setInterval(function(){
      fire()
    }, 1000)

    //controls
    cursors = game.input.keyboard.createCursorKeys();
  }
  return create;
}



function update() {
  game.physics.arcade.collide(player, walls);



  game.physics.arcade.overlap(player, bananas, collectBanana, null, this);
  game.physics.arcade.overlap(player, baby, collectBaby, null, this);
  game.physics.arcade.overlap(player, traps, collectDeath, null, this);
  game.physics.arcade.overlap(player, enemyBullets, enemyHitsPlayer, null, this);


  player.body.velocity.x = 0;


    if (cursors.left.isDown) {
        //move to the left
        player.body.velocity.x = -150;
        player.animations.play('left')
    } else if (cursors.right.isDown) {
        //move to the right
        player.body.velocity.x = 150;
        player.animations.play('right')
    } else if (cursors.up.isDown) {
        //move up
        player.body.velocity.y = -150
        player.animations.play('up')
    } else if (cursors.down.isDown){
        //move down
        player.body.velocity.y = 150
        player.animations.play('down')
    } else {
        //stand still
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        player.animations.play('idle')
    }










}

function collectBanana (player, food) {

    // nomnomnom the food
    food.kill();



    switch (count) {
      case 0:
        eatsound1.play();
        setTimeout(function() {
          food = bananas.create(465, 470, 'dancingbanana');
          food.animations.add('spin', [0,1,2,3,4,5,6,7,8,9,10,11], 8, true);
          food.animations.play('spin')
        }, 3000);
        break;
      case 1:
        eatsound2.play();
        setTimeout(function() {
          food = bananas.create(600, 100, 'dancingbanana');
          food.animations.add('spin', [0,1,2,3,4,5,6,7,8,9,10,11], 8, true);
          food.animations.play('spin')
        }, 4000);
        break;
      case 2:
        eatsound1.play();
        bomb = traps.create(330, 270, 'boom')
        setTimeout(function() {
          food = bananas.create(250, 400, 'dancingbanana');
          food.animations.add('spin', [0,1,2,3,4,5,6,7,8,9,10,11], 8, true);
          food.animations.play('spin')
        }, 5000);
        break;
      case 3:
        eatsound2.play()
        bomb = traps.create(700, 270, 'boom')
        setTimeout(function() {
          food = bananas.create(280, 100, 'dancingbanana');
          food.animations.add('spin', [0,1,2,3,4,5,6,7,8,9,10,11], 8, true);
          food.animations.play('spin')
        }, 3000);
        break;
      case 4:
        eatsound1.play()
        bomb = traps.create(530, 370, 'boom')
        gamemusic.stop();
        setTimeout(function() {
          intensemusic.play()

        }, 1000)
        setTimeout(function() {
          newBoy = redex.create(600, 370, 'redboy')
          babyalert.play();
          var bigBaby = baby.create(600, 450, 'dancingbaby');
          bigBaby.animations.add('twirl', [0,1], 4, true);
          bigBaby.animations.play('twirl')

        }, 8000);
        setTimeout(function() {
          newBoy.kill()
        }, 10000)

        break;

    }

    count++

    if (count == 1){
      document.getElementById("banana1").src = "assets/newtest.png"
    }
    if (count == 2){
      document.getElementById("banana2").src = "assets/newtest.png"
    }
    if (count == 3){
      document.getElementById("banana3").src = "assets/newtest.png"
    }
    if (count == 4){
      document.getElementById("banana4").src = "assets/newtest.png"
    }
    if (count == 5){
      document.getElementById("banana5").src = "assets/newtest.png"
    }


}

function fire() {

    if (game.time.now > firingTimer)
    {
        firingTimer = game.time.now + fireRate;

        var bullet = enemyBullets.getFirstDead();

        bullet.reset(guardFence.x + 100, guardFence.y + 60);

        //game.physics.arcade.moveToPointer(bullet, 200);
        game.physics.arcade.accelerateToObject(bullet, player, 150, 200, 200)
    }

}






function enemyHitsPlayer (player,bullet) {
    hitsound.play();
    player.kill();

}


//stop overlapping music towards end of game

function collectBaby (player, bigBaby) {
  //intensemusic.mute = true;
  //intensemusic.stop()
  //game.sound.mute = true;
  bigBaby.kill()
  eatsound2.play()
}

function collectDeath (player, bomb) {
  trapsound.play();
  player.kill();

}
