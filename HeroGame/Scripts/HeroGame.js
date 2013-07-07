var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroGame;
(function (HeroGame) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game(canvas) {
            var _this = this;
            _super.call(this, canvas);

            this._shootEventHandler = new eg.EventHandler();
            this._shootEventHandler.Bind(function () {
                return _this.Shoot();
            });
            this._monkey = new HeroGame.Monkey(50, 330, this.Input, this._shootEventHandler);
            this._rockProvider = new HeroGame.RockProvider(canvas.width + 50, 348, this.Scene, this.CollisionManager);
            this._cloudProvider = new HeroGame.CloudProvider(canvas.width / 4, 100, 129, 97, this.Scene, this.Input);
            this._ground = new eg.Graphics.Line2d(0, 380, canvas.width, 380);
            this._ground.Color = "white";
            this._gameOver = false;

            this.Scene.Add(this._monkey.Sprite);
            this.Scene.Add(this._ground);
            this.CollisionManager.Monitor(this._monkey);
            this.CollisionManager.OnCollision.Bind(function (first, second) {
                return _this.GameOver(first, second);
            });
        }
        Game.prototype.Update = function (gameTime) {
            if (!this._gameOver) {
                if (this._bullet)
                    this._bullet.Update(gameTime);
                this._monkey.Update(gameTime);
                this._rockProvider.Update(gameTime);
                this._cloudProvider.Update(gameTime);
            }
        };

        Game.prototype.Shoot = function () {
            var startX = this._monkey.Bounds.Position.X + this._monkey.Sprite.Size.Width + 10;
            var startY = this._monkey.Bounds.Position.Y + 10;
            this._bullet = new HeroGame.Bullet(startX, startY);
            this.CollisionManager.Monitor(this._bullet);
            this.Scene.Add(this._bullet.Sprite);
            this._bullet.Move();
        };

        Game.prototype.GameOver = function (first, second) {
            if (first instanceof HeroGame.Monkey) {
                this.CollisionManager.Unmonitor(this._monkey);
                var gameOverText = new eg.Graphics.Text2d(this.Scene.DrawArea.width / 2, this.Scene.DrawArea.height / 2, "Game Over");
                gameOverText.FontSettings.FontFamily = eg.Graphics.Assets.FontFamily.Monospace;
                gameOverText.FontSettings.FontSize = "60px";
                gameOverText.Color = "white";

                this.Scene.Add(gameOverText);
                this._gameOver = true;
            }
        };
        return Game;
    })(eg.Game);
    HeroGame.Game = Game;
})(HeroGame || (HeroGame = {}));
