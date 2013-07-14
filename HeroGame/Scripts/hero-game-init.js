(function () {
  Hero.init().registerAbility("Shoot", HeroGame.Game, HeroGame.Game.prototype.Shoot, "Shoot")
    .registerAbility("Shoot", HeroGame.Monkey, HeroGame.Monkey.prototype.Shoot, "Shoot")
    .registerAbility("MoveLeft", HeroGame.Cloud, HeroGame.Cloud.prototype.MoveLeft, "MoveLeft")
    .registerAbility("MoveRight", HeroGame.Cloud, HeroGame.Cloud.prototype.MoveRight, "MoveRight")
    .registerAbility("Jump", HeroGame.Monkey, HeroGame.Monkey.prototype.Jump, "Jump")
    .registerAbility("Shield", HeroGame.Game, HeroGame.Game.prototype.Shield, "Shield")
    .registerAbility("Shield", HeroGame.Monkey, HeroGame.Monkey.prototype.Shield, "Shield");

  Hero.setupSignalRAddEvent($.connection.abilityHub, function(abilityName) {
    var gainAbilityText = new eg.Graphics.Text2d(GameInstance.Scene.DrawArea.width / 2, GameInstance.Scene.DrawArea.height / 2, "You have gained the " + abilityName + " ability!");
    gainAbilityText.FontSettings.FontFamily = eg.Graphics.Assets.FontFamily.Monospace;
    gainAbilityText.FontSettings.FontSize = "60px";
    gainAbilityText.Color = "white";
    GameInstance.Scene.Add(gainAbilityText);

    setTimeout(function() {
      GameInstance.Scene.Remove(gainAbilityText);
    }, 2000);
  });
  $.connection.hub.start();
})();
