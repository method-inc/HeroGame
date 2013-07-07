/// <reference path="endgate-0.1.0.d.ts" />
/// <reference path="RockProvider.ts" />
/// <reference path="CloudProvider.ts" />
/// <reference path="Monkey.ts" />
/// <reference path="Bullet.ts" />

module HeroGame {
    export class Game extends eg.Game {
        private _monkey: Monkey;
        private _bullet: Bullet;
        private _rockProvider: RockProvider;
        private _cloudProvider: CloudProvider;
        private _ground: eg.Graphics.Line2d;
        private _gameOver: boolean;
        private _shootEventHandler: eg.EventHandler;

        constructor(canvas: HTMLCanvasElement) {
            super(canvas);

            this._shootEventHandler = new eg.EventHandler();
            this._shootEventHandler.Bind(() => this.Shoot());
            this._monkey = new Monkey(50, 330, this.Input, this._shootEventHandler);
            this._rockProvider = new RockProvider(canvas.width + 50, 348, this.Scene, this.CollisionManager);
            this._cloudProvider = new CloudProvider(canvas.width / 4, 100, 129, 97, this.Scene, this.Input);
            this._ground = new eg.Graphics.Line2d(0, 380, canvas.width, 380);
            this._ground.Color = "white";
            this._gameOver = false;

            this.Scene.Add(this._monkey.Sprite);
            this.Scene.Add(this._ground);
            this.CollisionManager.Monitor(this._monkey);
            this.CollisionManager.OnCollision.Bind((first, second) => this.GameOver(first, second));
        }

        public Update(gameTime: eg.GameTime): void {
            if (!this._gameOver) {
                if (this._bullet)
                    this._bullet.Update(gameTime);
                this._monkey.Update(gameTime);
                this._rockProvider.Update(gameTime);
                this._cloudProvider.Update(gameTime);
            }
        }

        public Shoot(): void {
            var startX = this._monkey.Bounds.Position.X + this._monkey.Sprite.Size.Width + 10;
            var startY = this._monkey.Bounds.Position.Y + 10;
            this._bullet = new Bullet(startX, startY); 
            this.CollisionManager.Monitor(this._bullet);
            this.Scene.Add(this._bullet.Sprite);
            this._bullet.Move();
        }

        public GameOver(first: eg.Collision.Collidable, second: eg.Collision.Collidable): void {
            if (first instanceof Monkey)
            {
                this.CollisionManager.Unmonitor(this._monkey);
                var gameOverText = new eg.Graphics.Text2d(this.Scene.DrawArea.width / 2, this.Scene.DrawArea.height / 2, "Game Over");
                gameOverText.FontSettings.FontFamily = eg.Graphics.Assets.FontFamily.Monospace;
                gameOverText.FontSettings.FontSize = "60px";
                gameOverText.Color = "white";

                this.Scene.Add(gameOverText);
                this._gameOver = true;
            }
        }
    }
}