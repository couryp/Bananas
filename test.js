game.add.sprite(0, 0, 'grass');

walls = game.add.group();
//adding physics for the group walls
walls.enableBody = true;

fence = walls.create(0, 0, 'northsouthwall');
fence.body.immovable = true;

fence = walls.create(0, 50, 'eastwestwall');
fence.body.immovable = true;

fence = walls.create(0, 550, 'northsouthwall');
fence.body.immovable = true;

fence = walls.create(750, 50, 'eastwestwall');
fence.body.immovable = true;

guardFence = walls.create(55, 250, 'guard');
guardFence.body.immovable = true;


///////////////////////

game.add.sprite(0, 0, 'hellfire');

walls = game.add.group();
//adding physics for the group walls
walls.enableBody = true;

fence = walls.create(0, 0, 'hell1');
fence.body.immovable = true;

fence = walls.create(0, 50, 'hell4');
fence.body.immovable = true;

fence = walls.create(0, 550, 'hell3');
fence.body.immovable = true;

fence = walls.create(750, 50, 'hell2');
fence.body.immovable = true;

guardFence = walls.create(55, 250, 'ragnaros');
guardFence.body.immovable = true;

///////////////////////



game.add.sprite(0, 0, 'giza');

walls = game.add.group();
//adding physics for the group walls
walls.enableBody = true;

fence = walls.create(0, 0, 'egypt1');
fence.body.immovable = true;

fence = walls.create(0, 50, 'egypt4');
fence.body.immovable = true;

fence = walls.create(0, 550, 'egypt3');
fence.body.immovable = true;

fence = walls.create(750, 50, 'egypt2');
fence.body.immovable = true;

guardFence = walls.create(55, 250, 'anubis');
guardFence.body.immovable = true;


///////////////////////


game.add.sprite(0, 0, 'galaxy');

walls = game.add.group();
//adding physics for the group walls
walls.enableBody = true;



fence = walls.create(0, 0, 'space1');
fence.body.immovable = true;

fence = walls.create(0, 50, 'space4');
fence.body.immovable = true;

fence = walls.create(0, 550, 'space3');
fence.body.immovable = true;

fence = walls.create(750, 50, 'space2');
fence.body.immovable = true;

guardFence = walls.create(55, 250, 'warlock');
guardFence.body.immovable = true;
