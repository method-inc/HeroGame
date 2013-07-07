/// <reference path="endgate-0.1.0.d.ts" />
/// <reference path="RockProvider.ts" />
/// <reference path="CloudProvider.ts" />
/// <reference path="Monkey.ts" />
/// <reference path="BulletProvider.ts" />

module HeroGame {
    export class Game extends eg.Game {
        private _monkey: Monkey;
        private _bulletProvider: BulletProvider;
        private _rockProvider: RockProvider;
        private _cloudProvider: CloudProvider;
        private _ground: eg.Graphics.Line2d;
        private _shield: eg.Graphics.Line2d;
        private _gameOver: boolean;
        private _shootEventHandler: eg.EventHandler;
        private _shieldEventHandler: eg.EventHandler;

        constructor(canvas: HTMLCanvasElement) {
            super(canvas);

            this._shootEventHandler = new eg.EventHandler();
            this._shootEventHandler.Bind(() => this.Shoot());
            this._shieldEventHandler = new eg.EventHandler();
            this._shieldEventHandler.Bind(() => this.Shield());
            this._monkey = new Monkey(50, 330, this.Input, this._shootEventHandler, this._shieldEventHandler);
            this._bulletProvider = new BulletProvider(this.Scene, this.CollisionManager);
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
                this._bulletProvider.Update(gameTime);
                this._monkey.Update(gameTime);
                this._rockProvider.Update(gameTime);
                this._cloudProvider.Update(gameTime);
            }
        }

        public Shoot(): void {
            var startX = this._monkey.Bounds.Position.X + this._monkey.Sprite.Size.Width + 10;
            var startY = this._monkey.Bounds.Position.Y + 10;
            this._bulletProvider.AddBullet(startX, startY);
        }

        public Shield(): void {
            var startX = this._monkey.Bounds.Position.X + this._monkey.Sprite.Size.Width + 10;
            var startY = this._monkey.Bounds.Position.Y;
            this._shield = new eg.Graphics.Line2d(startX, startY - 50, startX, startY + this._monkey.Sprite.Size.Height - 20);
            this._shield.Color = "white";
            this.Scene.Add(this._shield);
            setTimeout(() => this._shield.Dispose(), 1000);
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