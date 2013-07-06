/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Monkey extends eg.Collision.Collidable {
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
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/monkey.jpg", 104, 91));
            this.Sprite.ZIndex = 100;
            super(this.Sprite.GetDrawBounds());

            this._movementController = new eg.MovementControllers.LinearMovementController([this.Sprite], this._movementSpeed);
            this._inputController = new eg.InputControllers.DirectionalInputController(inputManager.Keyboard, (direction: string, startMoving: boolean) => {
                if (direction === "Right" || direction === "Left") {
                    this._movementController.Move(direction, startMoving);
                }
            });
        }

        public Collided(data: eg.Collision.Assets.CollisionData): void {
            if (!(data.With instanceof Monkey)) {
                console.log("monkey collided");
                super.Collided(data);
            }
        }

        public Update(gameTime: eg.GameTime) {
            this._movementController.Update(gameTime);
        }
    }
}