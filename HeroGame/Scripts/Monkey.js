var HeroGame;
(function (HeroGame) {
    var Monkey = (function () {
        function Monkey(startXPos, startYPos) {
            this.startXPos = startXPos;
            this.startYPos = startYPos;
            this._xPos = startXPos;
            this._yPos = startYPos;
            this.Sprite = new eg.Graphics.Sprite2d(startXPos, startYPos, new eg.Graphics.Assets.ImageSource("/Images/monkey.jpg", 104, 91));
            this.Sprite.ZIndex = 100;
        }
        return Monkey;
    })();
    HeroGame.Monkey = Monkey;
})(HeroGame || (HeroGame = {}));
