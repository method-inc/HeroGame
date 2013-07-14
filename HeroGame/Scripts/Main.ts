/// <reference path="typings/endgate/endgate-0.1.0.d.ts" />
/// <reference path="typings/jquery/jquery.d.ts" />
/// <reference path="HeroGame.ts" />

(function ($, window) {
    // Create a game canvas to use.  If we create a game without providing a canvas it will create a
    // canvas that fills the entire viewport.
    var canvas: HTMLCanvasElement = <HTMLCanvasElement>window.document.createElement("canvas"),
        holder: JQuery = $("#gameHolder"),
        game: HeroGame.Game = null;

    // Setup the game canvas DOM
    canvas.width = document.body.clientWidth;
    canvas.height = 400;
    holder.append(canvas);

    // Create our game
    game = new HeroGame.Game(canvas);
})($, window);