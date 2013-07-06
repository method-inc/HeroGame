var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroGame;
(function (HeroGame) {
    var Monkey = (function (_super) {
        __extends(Monkey, _super);
        function Monkey(startXPos, startYPos, inputManager) {
            var _this = this;
            this._xPos = startXPos;
            this._yPos = startYPos;
            this._movementSpeed = 100;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/monkey.jpg", 104, 91));
            this.Sprite.ZIndex = 100;
            _super.call(this, this.Sprite.GetDrawBounds());

            this._movementController = new eg.MovementControllers.LinearMovementController([this.Sprite], this._movementSpeed);
            this._inputController = new eg.InputControllers.DirectionalInputController(inputManager.Keyboard, function (direction, startMoving) {
                if (direction === "Right" || direction === "Left") {
                    _this._movementController.Move(direction, startMoving);
                }
            });
        }
        Monkey.prototype.Collided = function (data) {
            if (!(data.With instanceof Monkey)) {
                console.log("monkey collided");
                _super.prototype.Collided.call(this, data);
            }
        };

        Monkey.prototype.Update = function (gameTime) {
            this._movementController.Update(gameTime);
        };
        return Monkey;
    })(eg.Collision.Collidable);
    HeroGame.Monkey = Monkey;
})(HeroGame || (HeroGame = {}));
