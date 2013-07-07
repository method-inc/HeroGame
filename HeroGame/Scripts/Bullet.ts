/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Bullet extends eg.Collision.Collidable {
        public Sprite: eg.Graphics.Sprite2d;
        private _xPos: number;
        private _yPos: number;
        private _movementSpeed: number;
        private _movementController: eg.MovementControllers.LinearMovementController;

        constructor(startXPos: number, startYPos: number) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this._movementSpeed = 300;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/bullet.png", 16, 16));
            this.Sprite.ZIndex = 100;
            super(this.Sprite.GetDrawBounds());

            this._movementController = new eg.MovementControllers.LinearMovementController(new Array<eg.IMoveable>(this.Bounds, this.Sprite), this._movementSpeed, false, false);
        }

        public Collided(data: eg.Collision.Assets.CollisionData): void {
            if (!(data.With instanceof Bullet)) {
                super.Collided(data);
                this.Dispose();
                this.Sprite.Dispose();
            }
        }
        
        public Move(): void {
            this._movementController.Move("Right", true);
        }

        public Update(gameTime: eg.GameTime) {
            this._movementController.Update(gameTime);
        }
    }
}

