(function ($, window) {
    var canvas = window.document.createElement("canvas"), holder = $("#gameHolder"), game = null;

    canvas.width = document.body.clientWidth;
    canvas.height = 400;
    holder.append(canvas);

    window.GameInstance = new HeroGame.Game(canvas);
})($, window);
