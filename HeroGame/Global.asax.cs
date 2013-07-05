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

            Ability ability1 = new Ability("Ability1");
            Ability ability2 = new Ability("Ability2");
            Ability ability3 = new Ability("Ability3");
            Ability ability4 = new Ability("Ability4");
            Ability ability5 = new Ability("Ability5");

            authorizationService.AddAbility(ability1);
            authorizationService.AddAbility(ability2);
            authorizationService.AddAbility(ability3);
            authorizationService.AddAbility(ability4);
            authorizationService.AddAbility(ability5);

            Role role1 = new Role("Role1");
            Role role2 = new Role("Role2");
            Role role3 = new Role("Role3");
            Role role4 = new Role("Role4");
            Role role5 = new Role("Role5");

            role1.Abilities.Add(ability1);
            role1.Abilities.Add(ability2);
            role2.Abilities.Add(ability1);
            role3.Abilities.Add(ability3);
            role3.Abilities.Add(ability4);
            role3.Abilities.Add(ability5);
            role5.Abilities.Add(ability5);

            authorizationService.AddRole(role1);
            authorizationService.AddRole(role2);
            authorizationService.AddRole(role3);
            authorizationService.AddRole(role4);
            authorizationService.AddRole(role5);

            User user1 = new User("User1");
            User user2 = new User("User2");

            user1.Roles.Add(role1);
            user1.Roles.Add(role2);
            user2.Roles.Add(role5);

            authorizationService.AddUser(user1);
            authorizationService.AddUser(user2);
        }
    }
}