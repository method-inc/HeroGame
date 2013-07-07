var HeroGame;
(function (HeroGame) {
    var BulletProvider = (function () {
        function BulletProvider(scene, collisionManager) {
            this._scene = scene;
            this._collisionManager = collisionManager;
            this._bullets = new Array();
        }
        BulletProvider.prototype.AddBullet = function (xPos, yPos) {
            var newBullet = new HeroGame.Bullet(xPos, yPos);
            this._collisionManager.Monitor(newBullet);
            this._bullets.push(newBullet);
            this._scene.Add(newBullet.Sprite);
            newBullet.Move();
        };

        BulletProvider.prototype.Update = function (gameTime) {
            for (var idx in this._bullets) {
                this._bullets[idx].Roll(gameTime);
            }
        };
        return BulletProvider;
    })();
    HeroGame.BulletProvider = BulletProvider;
})(HeroGame || (HeroGame = {}));
