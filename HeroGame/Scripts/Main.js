(function ($, window) {
    var canvas = window.document.createElement("canvas"), holder = $("#gameHolder"), game = null;

    canvas.width = document.body.clientWidth;
    canvas.height = 400;
    holder.append(canvas);

    game = new HeroGame.Game(canvas);
})($, window);
