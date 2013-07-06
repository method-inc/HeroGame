/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Cloud {
        public Sprite: eg.Graphics.Sprite2d;
        private _xPos: number;
        private _yPos: number;
        private _movementSpeed: number;
        private _inputController: eg.InputControllers.DirectionalInputController;
        private _movementController: eg.MovementControllers.LinearMovementController;

        constructor(startXPos: number, startYPos: number, inputManager: eg.Input.InputManager) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this._movementSpeed = 100;

            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/cloud.png", 129, 97));
            this.Sprite.ZIndex = 100;

            this._movementController = new eg.MovementControllers.LinearMovementController([this.Sprite], this._movementSpeed, false, false);
            this._inputController = new eg.InputControllers.DirectionalInputController(inputManager.Keyboard, (direction: string, startMoving: boolean) => {
                if (direction === "Right" || direction === "Left") {
                    var newDirection = "";
                    if (direction === "Right")
                        newDirection = "Left";
                    if (direction === "Left")
                        newDirection = "Right";
                    this._movementController.Move(newDirection, startMoving);
                }
            });
        }

        public Update(gameTime: eg.GameTime) {
            this._movementController.Update(gameTime);
        }
    }
}