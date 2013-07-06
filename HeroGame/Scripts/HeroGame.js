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
            this._circle = new eg.Graphics.Circle(100, 150, 40, "red");
            this.Scene.Add(this._circle);
        }
        Game.prototype.Update = function (gameTime) {
            this._circle.Position.X += gameTime.Elapsed.Seconds * 200;
        };
        return Game;
    })(eg.Game);
    HeroGame.Game = Game;
})(HeroGame || (HeroGame = {}));
