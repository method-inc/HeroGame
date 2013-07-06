/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Monkey extends eg.Collision.Collidable {
        public Sprite: eg.Graphics.Sprite2d;
        private _xPos: number;
        private _yPos: number;
        private _shooting: boolean;
        private _movementSpeed: number;
        private _jumpingSpeed: number;
        private _jumpingUp: boolean;
        private _jumpingDown: boolean;
        private _inputController: eg.InputControllers.DirectionalInputController;
        private _movementController: eg.MovementControllers.LinearMovementController;

        constructor(startXPos: number, startYPos: number, inputManager: eg.Input.InputManager) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this._shooting = false;
            this._jumpingUp = false;
            this._jumpingDown = false;
            this._movementSpeed = 100;
            this._jumpingSpeed = 100 / 1000;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/monkey.png", 104, 91));
            this.Sprite.ZIndex = 100;
            super(this.Sprite.GetDrawBounds());

            this._movementController = new eg.MovementControllers.LinearMovementController([this.Sprite], this._movementSpeed, false, false);
            this._inputController = new eg.InputControllers.DirectionalInputController(inputManager.Keyboard, (direction: string, startMoving: boolean) => {
                if (direction === "Right" || direction === "Left") {
                    this._movementController.Move(direction, startMoving);
                }
                else if(direction === "Up" && startMoving === true){
                    this.Jump();
                }
            });

            inputManager.Keyboard.OnCommandDown("Space", () => {
                this.Shoot();
            });
        }

        public Collided(data: eg.Collision.Assets.CollisionData): void {
            if (!(data.With instanceof Monkey)) {
                console.log("monkey collided");
                super.Collided(data);
            }
        }

        private Jump() {
            if (!this._jumpingUp && !this._jumpingDown) {
                this._jumpingUp = true;
                //throttle jumping
                setTimeout(() => { this._jumpingDown = true; this._jumpingUp = false; }, 1000);
                setTimeout(() => { this._jumpingDown = false; }, 2000);
            }
        }

        private Shoot() {
            if (!this._shooting) {
                console.log("shooting bullet");

                this._shooting = true;
                //throttle bullets
                setTimeout(() => this._shooting = false, 1000);
            }
        }

        public Update(gameTime: eg.GameTime) {
            this._movementController.Update(gameTime);

            if (this._jumpingUp) {
                this.Sprite.Position.Y -= gameTime.Elapsed.Milliseconds * this._jumpingSpeed;
            }
            if (this._jumpingDown) {
                this.Sprite.Position.Y += gameTime.Elapsed.Milliseconds * this._jumpingSpeed;
            }
        }
    }
}
