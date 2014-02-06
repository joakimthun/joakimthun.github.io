var game = game || {};

game.initializeGame = function () {
    var requestNewFrame = window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
    var canvas = document.getElementById("canvas");
    var renderer = new Renderer(canvas);
    var lastTime = 0;
    var deltaTime = 0;
    var fps = 0;
    var renderFpsCounter = 19;

    var playerStates = [
        new CharacterState('moving_right', new Sprite('character_walk_right', 12, 80, 80, 40)),
        new CharacterState('moving_left', new Sprite('character_walk_left', 12, 80, 80, 40)),
        new CharacterState('idle_right', new Sprite('character_idle_right', 4, 80, 80, 80)),
        new CharacterState('idle_left', new Sprite('character_idle_left', 4, 80, 80, 80))
    ];

    var player = new Player(renderer, 80, 80, playerStates);
    var box = new WorldObject(renderer, 100, 303);
    var box2 = new WorldObject(renderer, 600, 303);

    player.collsionHandler.registerCollision(box.boundingBox);
    player.collsionHandler.registerCollision(box2.boundingBox);

    function start() {
        requestNewFrame(draw);
    }

    function draw(timeStamp) {
        requestNewFrame(draw);

        deltaTime = ((timeStamp - lastTime) / 1000).toFixed(3);
        lastTime = timeStamp;

        renderer.clear();
        box.render();
        box2.render();

        renderer.drawImage('ground', 0, 373, 800, 600);

        player.update(deltaTime);
        player.render();

        renderer.drawText('FPS: ' + fps, 10, 20);
        if (renderFpsCounter === 20) {
            fps = (1 / deltaTime).toFixed(1);
            renderFpsCounter = 0;
        }
        renderFpsCounter++;
    }

    return {
        start: start
    };
};
