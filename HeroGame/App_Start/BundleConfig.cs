using System.Web;
using System.Web.Optimization;

namespace HeroGame
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/vendor/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/vendor/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/vendor/jquery.unobtrusive*",
                        "~/Scripts/vendor/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/vendor/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/endgate").Include(
                        "~/Scripts/vendor/endgate-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/herogame").Include(
                        "~/Scripts/Shield.js",
                        "~/Scripts/Rock.js",
                        "~/Scripts/RockProvider.js",
                        "~/Scripts/Bullet.js",
                        "~/Scripts/BulletProvider.js",
                        "~/Scripts/Cloud.js",
                        "~/Scripts/CloudProvider.js",
                        "~/Scripts/Monkey.js",
                        "~/Scripts/HeroGame.js",
                        "~/Scripts/Main.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/site.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));

            bundles.Add(new StyleBundle("~/Content/bootstrap").Include("~/Content/bootstrap.css"));

            bundles.Add(new StyleBundle("~/Content/herogame").Include("~/Content/herogame.css"));

            bundles.Add(new ScriptBundle("~/bundles/herojs").Include(
                        "~/Scripts/vendor/angular.js",
                        "~/Scripts/vendor/angular-resource.js",
                        "~/Scripts/vendor/lodash.js",
                        "~/Scripts/vendor/restangular.js",
                        "~/Scripts/hero/hero.js",
                        "~/Scripts/hero/hero-user.js",
                        "~/Scripts/hero/hero-role.js",
                        "~/Scripts/hero/hero-ability.js",
                        "~/Scripts/hero/hero-authorization.js"));
        }
    }
}