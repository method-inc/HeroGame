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
            _super.call(this, canvas);

            this._monkey = new HeroGame.Monkey(50, 330);
            this._rock = new HeroGame.Rock(canvas.width - 75, 348);

            this._ground = new eg.Graphics.Line2d(0, 380, canvas.width, 380);

            this.Scene.Add(this._monkey.Sprite);
            this.Scene.Add(this._ground);
            this.Scene.Add(this._rock.Sprite);
        }
        Game.prototype.Update = function (gameTime) {
            this._rock.Roll(gameTime);
        };
        return Game;
    })(eg.Game);
    HeroGame.Game = Game;
})(HeroGame || (HeroGame = {}));
