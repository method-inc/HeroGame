/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Shield extends eg.Collision.Collidable {
        public Sprite: eg.Graphics.Line2d;
        private _xPos: number;
        private _yPos: number;

        constructor(startXPos: number, startYPos: number) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Line2d(startXPos, startYPos - 50, startXPos, startYPos + 91 - 20);
            this.Sprite.Color = "white";
            this.Sprite.ZIndex = 100;
            super(this.Sprite.GetDrawBounds());
        }

        public Collided(data: eg.Collision.Assets.CollisionData): void {
            if (!(data.With instanceof Shield)) {
                super.Collided(data);
                this.Dispose();
            }
        }

        public Dispose(): void {
            this.Sprite.Dispose();
            super.Dispose();
        }
    }
}
