(function () {
  Hero.init().registerAbility("Shoot", HeroGame.Game, HeroGame.Game.prototype.Shoot, "Shoot")
    .registerAbility("Shoot", HeroGame.Monkey, HeroGame.Monkey.prototype.Shoot, "Shoot")
    .registerAbility("MoveLeft", HeroGame.Cloud, HeroGame.Cloud.prototype.MoveLeft, "MoveLeft")
    .registerAbility("MoveRight", HeroGame.Cloud, HeroGame.Cloud.prototype.MoveRight, "MoveRight")
    .registerAbility("Jump", HeroGame.Monkey, HeroGame.Monkey.prototype.Jump, "Jump")
    .registerAbility("Shield", HeroGame.Game, HeroGame.Game.prototype.Shield, "Shield")
    .registerAbility("Shield", HeroGame.Monkey, HeroGame.Monkey.prototype.Shield, "Shield");
})();
