using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(NhaHangTiecCuoi.Web.Startup))]
namespace NhaHangTiecCuoi.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
