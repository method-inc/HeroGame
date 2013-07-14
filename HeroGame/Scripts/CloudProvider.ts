/// <reference path="typings/endgate/endgate-0.1.0.d.ts" />
/// <reference path="Cloud.ts" />

module HeroGame {
    export class CloudProvider {
        private _clouds: Array<Cloud>;
        private _xPos: number;
        private _yPos: number;
        private _scene: eg.Rendering.Scene2d;

        constructor(xPos: number, yPos: number, cloudSizeX: number, cloudSizeY: number, scene: eg.Rendering.Scene2d, inputManager: eg.Input.InputManager) {
            this._xPos = xPos;
            this._yPos = yPos;
            this._scene = scene;
            this._clouds = new Array<Cloud>();

            for (var i = 0; i < 100; i++) {
                this.AddCloud(inputManager);
                this._xPos += cloudSizeX + 800;
            }
        }

        public AddCloud(inputManager: eg.Input.InputManager) {
            var newCloud = new Cloud(this._xPos, this._yPos, inputManager);
            this._clouds.push(newCloud);
            this._scene.Add(newCloud.Sprite);
        }

        public Update(gameTime: eg.GameTime) {
            for (var idx in this._clouds) {
                this._clouds[idx].Update(gameTime);
            }
        }
    }
}