using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Web;
using Hero;
using Hero.Interfaces;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace HeroGame.Hubs
{
    public class AbilityBroadcaster
    {
        // Singleton instance
        private readonly static Lazy<AbilityBroadcaster> _instance = new Lazy<AbilityBroadcaster>(() => new AbilityBroadcaster(GlobalHost.ConnectionManager.GetHubContext<AbilityHub>().Clients));

        private AbilityBroadcaster(IHubConnectionContext clients)
        {
            Clients = clients;
        }

        public static AbilityBroadcaster Instance
        {
            get
            {
                return _instance.Value;
            }
        }

        private IHubConnectionContext Clients
        {
            get;
            set;
        }

        public void SendAbilities(IEnumerable<IAbility> abilities)
        {
            foreach (IAbility ability in abilities)
            {
                Clients.All.sendAbility(ability.Name);
            }
        }
    }
}