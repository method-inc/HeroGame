/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Rock extends eg.Collision.Collidable {
        public Sprite: eg.Graphics.Sprite2d;
        private _xPos: number;
        private _yPos: number;

        private _movementSpeed: number;
        private _direction: number;
        private _rotationSpeed: number;

        constructor(startXPos: number, startYPos: number) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/rock.png", 47, 46));
            this.Sprite.ZIndex = 100;
            this._movementSpeed = 50;
            this._direction = -1;
            this._rotationSpeed = Math.PI / 4;

            super(this.Sprite.GetDrawBounds());
        }

        public Roll(gameTime: eg.GameTime): void {
            var rotationIncrement = this._direction * this._rotationSpeed * gameTime.Elapsed.Seconds;
            var positionIncrement = this._direction * this._movementSpeed * gameTime.Elapsed.Seconds;

            this.Sprite.Rotation += rotationIncrement;
            this.Sprite.Position.X += positionIncrement;
        }

        public Collided(data: eg.Collision.Assets.CollisionData): void {
            if (!(data.With instanceof Rock)) {
                super.Collided(data);
                this.Dispose();
                this.Sprite.Dispose();
            }
        }
    }
}