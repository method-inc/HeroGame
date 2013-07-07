var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var HeroGame;
(function (HeroGame) {
    var Shield = (function (_super) {
        __extends(Shield, _super);
        function Shield(startXPos, startYPos) {
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Line2d(startXPos, startYPos - 50, startXPos, startYPos + 91 - 20);
            this.Sprite.Color = "white";
            this.Sprite.ZIndex = 100;
            _super.call(this, this.Sprite.GetDrawBounds());
        }
        Shield.prototype.Collided = function (data) {
            if (!(data.With instanceof Shield)) {
                _super.prototype.Collided.call(this, data);
                this.Dispose();
            }
        };

        Shield.prototype.Dispose = function () {
            this.Sprite.Dispose();
            _super.prototype.Dispose.call(this);
        };
        return Shield;
    })(eg.Collision.Collidable);
    HeroGame.Shield = Shield;
})(HeroGame || (HeroGame = {}));
