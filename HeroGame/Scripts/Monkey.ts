/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Monkey extends eg.Collision.Collidable {
        public Sprite: eg.Graphics.Sprite2d;
        private _xPos: number;
        private _yPos: number;
        private _scene: eg.Rendering.Scene2d;

        constructor(startXPos: number, startYPos: number,
            scene: eg.Rendering.Scene2d) {

            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/monkey.png", 104, 91));
            this.Sprite.ZIndex = 100;
            this._scene = scene;

            super(this.Sprite.GetDrawBounds());
        }

        public Collided(data: eg.Collision.Assets.CollisionData): void {
            if (!(data.With instanceof Monkey)) {
                super.Collided(data);
            }
        }
    }
}