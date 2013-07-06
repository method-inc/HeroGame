var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroGame;
(function (HeroGame) {
    var Rock = (function (_super) {
        __extends(Rock, _super);
        function Rock(startXPos, startYPos) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/rock.png", 47, 46));
            this.Sprite.ZIndex = 100;
            this._movementSpeed = 300;
            this._direction = -1;
            this._rotationSpeed = Math.PI / 4;

            _super.call(this, this.Sprite.GetDrawBounds());
        }
        Rock.prototype.Roll = function (gameTime) {
            var rotationIncrement = this._direction * this._rotationSpeed * gameTime.Elapsed.Seconds;
            var positionIncrement = this._direction * this._movementSpeed * gameTime.Elapsed.Seconds;

            this.Sprite.Rotation += rotationIncrement;
            this.Sprite.Position.X += positionIncrement;
        };

        Rock.prototype.Collided = function (data) {
            if (!(data.With instanceof Rock)) {
                console.log("rock collided");
                _super.prototype.Collided.call(this, data);
            }
        };
        return Rock;
    })(eg.Collision.Collidable);
    HeroGame.Rock = Rock;
})(HeroGame || (HeroGame = {}));
