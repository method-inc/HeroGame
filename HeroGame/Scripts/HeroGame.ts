/// <reference path="endgate-0.1.0.d.ts" />
/// <reference path="Rock.ts" />
/// <reference path="Monkey.ts" />

module HeroGame {
    export class Game extends eg.Game {
        private _monkey: Monkey;
        private _rock: Rock;
        private _ground: eg.Graphics.Line2d;

        constructor(canvas: HTMLCanvasElement) {
            super(canvas);
            
            this._monkey = new Monkey(50, 330);
            this._rock = new Rock(canvas.width-75, 348);

            this._ground = new eg.Graphics.Line2d(0, 380, canvas.width, 380);
            this._ground.Color = "white";

            this.Scene.Add(this._monkey.Sprite);
            this.Scene.Add(this._ground);
            this.Scene.Add(this._rock.Sprite);
            this.CollisionManager.Monitor(this._monkey);
            this.CollisionManager.Monitor(this._rock);
        }

        public Update(gameTime: eg.GameTime): void {
            this._rock.Roll(gameTime);
        }
    }
}