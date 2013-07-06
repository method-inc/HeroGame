/// <reference path="endgate-0.1.0.d.ts" />
/// <reference path="RockProvider.ts" />
/// <reference path="Monkey.ts" />

module HeroGame {
    export class Game extends eg.Game {
        private _monkey: Monkey;
        private _rockProvider: RockProvider;
        private _ground: eg.Graphics.Line2d;

        constructor(canvas: HTMLCanvasElement) {
            super(canvas);
            
            this._monkey = new Monkey(50, 330);
            this._rockProvider = new RockProvider(canvas.width + 50, 348, this.Scene, this.CollisionManager);

            this._ground = new eg.Graphics.Line2d(0, 380, canvas.width, 380);
            this._ground.Color = "white";

            this.Scene.Add(this._monkey.Sprite);
            this.Scene.Add(this._ground);
            this.CollisionManager.Monitor(this._monkey);
        }

        public Update(gameTime: eg.GameTime): void {
            this._rockProvider.Update(gameTime);
        }
    }
}