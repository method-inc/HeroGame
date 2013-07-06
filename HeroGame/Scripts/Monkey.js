var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroGame;
(function (HeroGame) {
    var Monkey = (function (_super) {
        __extends(Monkey, _super);
        function Monkey(startXPos, startYPos, scene) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/monkey.png", 104, 91));
            this.Sprite.ZIndex = 100;
            this._scene = scene;

            _super.call(this, this.Sprite.GetDrawBounds());
        }
        Monkey.prototype.Collided = function (data) {
            if (!(data.With instanceof Monkey)) {
                _super.prototype.Collided.call(this, data);
            }
        };
        return Monkey;
    })(eg.Collision.Collidable);
    HeroGame.Monkey = Monkey;
})(HeroGame || (HeroGame = {}));
