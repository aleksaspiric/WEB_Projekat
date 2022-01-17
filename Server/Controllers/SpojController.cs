using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SpojController: ControllerBase
    {
        public ContextKlasa DbContext { get; set; }

        public SpojController(ContextKlasa dataContext)
        {
            DbContext= dataContext;
        }   

        [HttpGet]
        [Route("VratiGlumceIzFilma/{idf}")]
        public IEnumerable<Spoj> vratiGlumceIzFilma(int idf)
        {
            var spoj = DbContext.FilmoviGlumci.Where(y=>y.Film.Id == idf).Include(x=>x.Glumac);

            return spoj.ToArray();
        }

        [HttpGet]
        [Route("VratiGlumca/{id}")]
        public Glumac vratiGlumca(int id)
        {
            var glumacSpoj = DbContext.FilmoviGlumci.Where(x=> x.ID == id).Include(y=>y.Glumac).FirstOrDefault();

            var glumac =DbContext.Glumci.Find(glumacSpoj.Glumac.Id);
            
            return glumac;
        }
        
        [HttpGet]
        [Route("VratiFilmoveGlumca/{idg}")]
        public IEnumerable<Spoj> VratiFilmoveGlumca(int idg)
        {
            var spoj = DbContext.FilmoviGlumci.Where(y=>y.Glumac.Id == idg).Include(x=>x.Film);

            return spoj.ToArray();
        }
        [HttpGet]
        [Route("Vrati spoj/{idf}/{idg}")]
        public Spoj vrati(int idf, int idg)
        {
            var provera = DbContext.FilmoviGlumci.Where(x=>x.Film.Id==idf)
                                                 .Where(y=>y.Glumac.Id==idg).FirstOrDefault();

            return provera;
        }
        [HttpPost]
        [Route("DodajGlumcaUFilm/{idf}/{idg}")]
        public async Task<ActionResult> dodajGlumcaIzFilma(int idf, int idg)
        {
            var film= DbContext.Filmovi.Find(idf);
            var glum= DbContext.Glumci.Find(idg);
            
            var provera = DbContext.FilmoviGlumci.Where(x=>x.Film.Id==idf)
                                                 .Where(y=>y.Glumac.Id==idg).FirstOrDefault();
            if(provera!=null)
                return BadRequest("Vec postoji!");
            Spoj fg = new Spoj{
                Glumac = glum,
                Film = film
            };
            DbContext.FilmoviGlumci.Add(fg);
            await DbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete]
        [Route("ObrisiGlumcaIzFilma/{idf}/{idg}")]
        public async Task<ActionResult> obrisiGlumcaIzFilma(int idf, int idg)
        {
            var fg = await DbContext.FilmoviGlumci.Where(x=>x.Film.Id == idf)
                                                .Where(y=>y.Glumac.Id == idg)
                                                .FirstOrDefaultAsync();
            DbContext.FilmoviGlumci.Remove(fg);
            await DbContext.SaveChangesAsync();
            return Ok();
        }

    }
}