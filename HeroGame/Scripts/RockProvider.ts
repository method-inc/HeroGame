/// <reference path="typings/endgate/endgate-0.1.0.d.ts" />
/// <reference path="Rock.ts" />

module HeroGame {
    export class RockProvider {
        private _rocks: Array<Rock>;
        private _xPos: number;
        private _yPos: number;
        private _collisionManager: eg.Collision.CollisionManager;
        private _scene: eg.Rendering.Scene2d;

        constructor(xPos: number, yPos: number, scene: eg.Rendering.Scene2d, collisionManager: eg.Collision.CollisionManager) {
            this._xPos = xPos;
            this._yPos = yPos;
            this._scene = scene;
            this._collisionManager = collisionManager;
            this._rocks = new Array<Rock>();
            setTimeout(() => this.AddRock(), 3000);
        }

        public AddRock() {
            var newRock = new Rock(this._xPos, this._yPos);
            this._collisionManager.Monitor(newRock);
            this._rocks.push(newRock);
            this._scene.Add(newRock.Sprite);
            setTimeout(() => this.AddRock(), 10000);
        }

        public Update(gameTime: eg.GameTime) {
            for (var idx in this._rocks) {
                this._rocks[idx].Roll(gameTime);
            }
        }
    }
}