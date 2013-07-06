/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Monkey extends eg.Collision.Collidable {
        public Sprite: eg.Graphics.Sprite2d;
        private _xPos: number;
        private _yPos: number;

        constructor(startXPos: number, startYPos: number) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/monkey.jpg", 104, 91));
            this.Sprite.ZIndex = 100;

            super(this.Sprite.GetDrawBounds());
        }

        public Collided(data: eg.Collision.Assets.CollisionData): void {
            if (!(data.With instanceof Monkey)) {
                console.log("monkey collided");
                super.Collided(data);
            }
        }
    }
}