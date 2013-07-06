/// <reference path="endgate-0.1.0.d.ts" />

module HeroGame {
    export class Game extends eg.Game {
        private _circle: eg.Graphics.Circle;
        constructor(canvas: HTMLCanvasElement) {
            super(canvas);
            this._circle = new eg.Graphics.Circle(100, 150, 40, "red");
            this.Scene.Add(this._circle);
        }

        public Update(gameTime: eg.GameTime): void {
            // Move the circle to the right at 200 pixels per second
            this._circle.Position.X += gameTime.Elapsed.Seconds * 200;
        }
    }
}