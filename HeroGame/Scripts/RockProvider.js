var HeroGame;
(function (HeroGame) {
    var RockProvider = (function () {
        function RockProvider(xPos, yPos, scene, collisionManager) {
            var _this = this;
            this._xPos = xPos;
            this._yPos = yPos;
            this._scene = scene;
            this._collisionManager = collisionManager;
            this._rocks = new Array();
            setTimeout(function () {
                return _this.AddRock();
            }, 3000);
        }
        RockProvider.prototype.AddRock = function () {
            var _this = this;
            var newRock = new HeroGame.Rock(this._xPos, this._yPos);
            this._collisionManager.Monitor(newRock);
            this._rocks.push(newRock);
            this._scene.Add(newRock.Sprite);
            setTimeout(function () {
                return _this.AddRock();
            }, 3000);
        };

        RockProvider.prototype.Update = function (gameTime) {
            for (var idx in this._rocks) {
                this._rocks[idx].Roll(gameTime);
            }
        };
        return RockProvider;
    })();
    HeroGame.RockProvider = RockProvider;
})(HeroGame || (HeroGame = {}));
