var HeroGame;
(function (HeroGame) {
    var Rock = (function () {
        function Rock(startXPos, startYPos) {
            this.startXPos = startXPos;
            this.startYPos = startYPos;
            this._movementSpeed = 50;
            this._direction = -1;
            this._rotationSpeed = Math.PI / 4;
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/rock.jpg", 47, 46));
            this.Sprite.ZIndex = 100;
        }
        Rock.prototype.Roll = function (gameTime) {
            var rotationIncrement = this._direction * this._rotationSpeed * gameTime.Elapsed.Seconds;
            var positionIncrement = this._direction * this._movementSpeed * gameTime.Elapsed.Seconds;

            this.Sprite.Rotation += rotationIncrement;
            this.Sprite.Position.X += positionIncrement;
        };
        return Rock;
    })();
    HeroGame.Rock = Rock;
})(HeroGame || (HeroGame = {}));
