var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1, 
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        /*
        for (var i - 0; i < levelData.gameItems.length;i++){
            var firstObject = levelData.gameItems[i];
            var firstX
            var firstY
            var firstType
                if(){

                }else if {

                }
        }
        */ 
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x, y){
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            
            sawBladeHitZone.x = x;
            sawBladeHitZone.y = y;
            game.addGameItem(sawBladeHitZone);   


            var obstacleImage = draw.bitmap('img/sawblade.png');
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
            createSawBlade(1100, groundY - 10);
            createSawBlade(1500,  groundY - 100);
            createSawBlade(900,  groundY - 100);
            createSawBlade(1300,  groundY - 10);
   
        function createBarrel(x, y){
            var hitZoneSize = 25;
            var damageFromObstacle = 30;
            var barrelHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
            barrelHitZone.x = x;
            barrelHitZone.y = y;
            game.addGameItem(barrelHitZone);   


            var obstacleImage = draw.bitmap('img/barrel.png');
            barrelHitZone.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }

        createBarrel(2000, groundY - 150);
        createBarrel(2200, groundY - 10);
        createBarrel(2600, groundY - 10);
        
            var enemy = game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);

            enemy.x = 600;
            enemy.y = groundY-50;
            
            game.addGameItem(enemy);

            enemy.velocityX = -1;
            enemy.onPlayerCollision = function() {
                console.log('The enemy has hit Halle');
                game.changeIntegrity(-10);
                console.log("Halle has hit the enemy");
                
            };
            game.increaseScore(100);
            
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
