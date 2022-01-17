using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Models
{
    public class ContextKlasa: DbContext
    {
        public DbSet<VideoKlub> VideoKlubovi { get; set; }
        public DbSet<Film> Filmovi { get; set; }
        public DbSet<Glumac> Glumci { get; set; }
        public DbSet<Spoj> FilmoviGlumci { get; set; }

        public ContextKlasa(DbContextOptions dbContextOptions): base(dbContextOptions)
        {
           
        }
    }
}