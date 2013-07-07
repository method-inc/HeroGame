/// <reference path="endgate-0.1.0.d.ts" />
/// <reference path="Bullet.ts" />

module HeroGame {
    export class BulletProvider {
        private _bullets: Array<Bullet>;
        private _collisionManager: eg.Collision.CollisionManager;
        private _scene: eg.Rendering.Scene2d;

        constructor(scene: eg.Rendering.Scene2d, collisionManager: eg.Collision.CollisionManager) {
            this._scene = scene;
            this._collisionManager = collisionManager;
            this._bullets = new Array<Bullet>();
        }

        public AddBullet(xPos: number, yPos: number) {
            var newBullet = new Bullet(xPos, yPos);
            this._collisionManager.Monitor(newBullet);
            this._bullets.push(newBullet);
            this._scene.Add(newBullet.Sprite);
            newBullet.Move();
        }

        public Update(gameTime: eg.GameTime) {
            for (var idx in this._bullets) {
                this._bullets[idx].Roll(gameTime);
            }
        }
    }
}
