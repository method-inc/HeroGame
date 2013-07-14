using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace HeroGame.Hubs
{
    public class AbilityHub: Hub
    {
        private readonly AbilityBroadcaster _abilityBroadcaster;

        public AbilityHub() : this(AbilityBroadcaster.Instance) { }

        public AbilityHub(AbilityBroadcaster abilityBroadcaster)
        {
            _abilityBroadcaster = abilityBroadcaster;
        }
    }
}