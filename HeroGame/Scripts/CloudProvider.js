var HeroGame;
(function (HeroGame) {
    var CloudProvider = (function () {
        function CloudProvider(xPos, yPos, cloudSizeX, cloudSizeY, scene, inputManager) {
            this._xPos = xPos;
            this._yPos = yPos;
            this._scene = scene;
            this._clouds = new Array();

            for (var i = 0; i < 100; i++) {
                this.AddCloud(inputManager);
                this._xPos += cloudSizeX + 800;
            }
        }
        CloudProvider.prototype.AddCloud = function (inputManager) {
            var newCloud = new HeroGame.Cloud(this._xPos, this._yPos, inputManager);
            this._clouds.push(newCloud);
            this._scene.Add(newCloud.Sprite);
        };

        CloudProvider.prototype.Update = function (gameTime) {
            for (var idx in this._clouds) {
                this._clouds[idx].Update(gameTime);
            }
        };
        return CloudProvider;
    })();
    HeroGame.CloudProvider = CloudProvider;
})(HeroGame || (HeroGame = {}));
