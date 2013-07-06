var HeroGame;
(function (HeroGame) {
    var Cloud = (function () {
        function Cloud(startXPos, startYPos, inputManager) {
            var _this = this;
            this._xPos = startXPos;
            this._yPos = startYPos;
            this._movementSpeed = 100;

            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/cloud.png", 129, 97));
            this.Sprite.ZIndex = 100;

            this._movementController = new eg.MovementControllers.LinearMovementController([this.Sprite], this._movementSpeed, false, false);
            this._inputController = new eg.InputControllers.DirectionalInputController(inputManager.Keyboard, function (direction, startMoving) {
                if (direction === "Right" || direction === "Left") {
                    var newDirection = "";
                    if (direction === "Right")
                        newDirection = "Left";
                    if (direction === "Left")
                        newDirection = "Right";
                    _this._movementController.Move(newDirection, startMoving);
                }
            });
        }
        Cloud.prototype.Update = function (gameTime) {
            this._movementController.Update(gameTime);
        };
        return Cloud;
    })();
    HeroGame.Cloud = Cloud;
})(HeroGame || (HeroGame = {}));
