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

            this._monkey = new HeroGame.Monkey(50, 330, this.Input);
            this._rockProvider = new HeroGame.RockProvider(canvas.width + 50, 348, this.Scene, this.CollisionManager);
            this._cloudProvider = new HeroGame.CloudProvider(canvas.width / 4, 100, 129, 97, this.Scene, this.Input);
            this._ground = new eg.Graphics.Line2d(0, 380, canvas.width, 380);
            this._ground.Color = "white";
            this._gameOver = false;

            this.Scene.Add(this._monkey.Sprite);
            this.Scene.Add(this._ground);
            this.CollisionManager.Monitor(this._monkey);
            this.CollisionManager.OnCollision.Bind(function () {
                return _this.GameOver();
            });
        }
        Game.prototype.Update = function (gameTime) {
            if (!this._gameOver) {
                this._monkey.Update(gameTime);
                this._rockProvider.Update(gameTime);
                this._cloudProvider.Update(gameTime);
            }
        };

        Game.prototype.GameOver = function () {
            this.CollisionManager.Unmonitor(this._monkey);
            var gameOverText = new eg.Graphics.Text2d(this.Scene.DrawArea.width / 2, this.Scene.DrawArea.height / 2, "Game Over");
            var fontSettings = new eg.Graphics.Assets.FontSettings();
            gameOverText.FontSettings.FontFamily = eg.Graphics.Assets.FontFamily.Monospace;
            gameOverText.FontSettings.FontSize = "60px";
            gameOverText.Color = "white";

            this.Scene.Add(gameOverText);
            this._gameOver = true;
        };
        return Game;
    })(eg.Game);
    HeroGame.Game = Game;
})(HeroGame || (HeroGame = {}));
