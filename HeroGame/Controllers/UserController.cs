using System.Collections.Generic;
using System.Web.Http;
using Hero; //do not remove
using Hero.Configuration;
using Hero.Interfaces;
using HeroGame.Hubs;


namespace HeroGame
{
    public class UserController : ApiController
    {
        public IEnumerable<IUser> Get()
        {
            return HeroConfig.AuthorizationService.GetUsers();
        }

        public IUser Get(string id)
        {
            return HeroConfig.AuthorizationService.GetUser(id);
        }

        public IUser Post([FromBody]User user)
        {
            return HeroConfig.AuthorizationService.AddUser(user);
        }

        public IUser Put([FromBody]User user)
        {
            IUser temp = HeroConfig.AuthorizationService.UpdateUser(user);
            AbilityBroadcaster.Instance.SendAbilities(HeroConfig.AuthorizationService.GetAbilitiesForUser(temp.Name));
            return temp;
        }

        public void Delete(string id)
        {
            HeroConfig.AuthorizationService.RemoveUser(id);
        }
    }
}
