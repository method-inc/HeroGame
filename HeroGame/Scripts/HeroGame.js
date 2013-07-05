var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroGame = (function (_super) {
    __extends(HeroGame, _super);
    function HeroGame() {
        _super.call(this);
        this._circle = new eg.Graphics.Circle(100, 150, 40, "red");
        this.Scene.Add(this._circle);
    }
    HeroGame.prototype.Update = function (gameTime) {
        this._circle.Position.X += gameTime.Elapsed.Seconds * 200;
    };
    return HeroGame;
})(eg.Game);

(function () {
    var game = new HeroGame();
})();
