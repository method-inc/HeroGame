using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Hero;
using Hero.Configuration;
using Hero.Interfaces;
using Hero.Services;
using Hero.Services.Interfaces;
using Newtonsoft.Json.Serialization;

namespace HeroGame
{
    // Note: For instructions on enabling IIS6 or IIS7 classic mode, 
    // visit http://go.microsoft.com/?LinkId=9394801

    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();

            WebApiConfig.Register(GlobalConfiguration.Configuration);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            IAbilityAuthorizationService authorizationService = new AbilityAuthorizationService();

            var json = GlobalConfiguration.Configuration.Formatters.JsonFormatter;
            json.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            HeroConfig.Initialize(authorizationService);

            _Seed(authorizationService);
        }

        private static void _Seed(IAbilityAuthorizationService authorizationService)
        {
            Ability shieldAbility = new Ability("Shield");
            Ability moveLeftAbility = new Ability("MoveLeft");
            Ability moveRightAbility = new Ability("MoveRight");
            Ability moveAbility = new Ability("Move");
            moveAbility.Abilities.Add(moveLeftAbility);
            moveAbility.Abilities.Add(moveRightAbility);
            Ability jumpAbility = new Ability("Jump");
            Ability shootAbility = new Ability("Shoot");

            authorizationService.AddAbility(shieldAbility);
            authorizationService.AddAbility(moveLeftAbility);
            authorizationService.AddAbility(moveRightAbility);
            authorizationService.AddAbility(moveAbility);
            authorizationService.AddAbility(jumpAbility);
            authorizationService.AddAbility(shootAbility);

            Role amoeba = new Role("Amoeba");
            Role dumbSlug = new Role("Dumb Slug");
            Role scaredSlug = new Role("Scared Slug");
            Role dodo = new Role("Dodo");
            Role monkey = new Role("Monkey");

            authorizationService.AddRole(amoeba);
            authorizationService.AddRole(dumbSlug);
            authorizationService.AddRole(scaredSlug);
            authorizationService.AddRole(dodo);
            authorizationService.AddRole(monkey);

            User user1 = new User("Hero");

            user1.Roles.Add(amoeba);

            authorizationService.AddUser(user1);
        }
    }
}