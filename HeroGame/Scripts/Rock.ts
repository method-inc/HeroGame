/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Rock {
        public Sprite: eg.Graphics.Sprite2d;

        private _movementSpeed: number = 50;
        private _direction: number = -1;
        private _rotationSpeed: number = Math.PI / 4;
        private _xPos: number;
        private _yPos: number;

        constructor(private startXPos: number, private startYPos: number) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/rock.jpg", 47, 46));
            this.Sprite.ZIndex = 100;
        }

        public Roll(gameTime: eg.GameTime): void {
            var rotationIncrement = this._direction * this._rotationSpeed * gameTime.Elapsed.Seconds;
            var positionIncrement = this._direction * this._movementSpeed * gameTime.Elapsed.Seconds;

            this.Sprite.Rotation += rotationIncrement;
            this.Sprite.Position.X += positionIncrement;
        }
    }
}