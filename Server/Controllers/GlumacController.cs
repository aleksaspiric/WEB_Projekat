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
    public class GlumacController: ControllerBase
    {
        public ContextKlasa DbContext { get; set; }

        public GlumacController(ContextKlasa dataContext)
        {
            DbContext= dataContext;
        }   

        
        [HttpGet]
        [Route("VratiGlumce")]
        public IEnumerable<Glumac> vratiGlumce()
        {

            var glumci = DbContext.Glumci;

            return glumci.ToArray();
        }

        [HttpGet]
        [Route("VratiGlumca/{idg}")]
        public Glumac vratiGlumca(int idg)
        {
            var glumac = DbContext.Glumci.Find(idg);

            return glumac;
        }

        
        [HttpPost]
        [Route("DodajGlumca")]
        public async Task<ActionResult> dodajGlumca([FromBody] Glumac glumac)
        {
            if(glumac.Ime=="" || glumac.Prezime=="" || glumac.MestoRodjenja=="")
                return StatusCode(406);

            DbContext.Glumci.Add(glumac);
            await DbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut]
        [Route("IzmeniGlumca")]
        public async Task<ActionResult> izmeniGlumca([FromBody] Glumac glumac)
        {
            if(glumac.Ime=="" || glumac.Prezime=="" || glumac.MestoRodjenja=="")
                return StatusCode(406);
            
            DbContext.Glumci.Update(glumac);
            await DbContext.SaveChangesAsync();
            return Ok();
        }
        
        [HttpDelete]
        [Route("obrisiGlumca/{idg}")]
        public async Task<ActionResult> obrisiGlumca(int idg)
        {
            var glumac= await DbContext.Glumci.FindAsync(idg);

            DbContext.Glumci.Remove(glumac);

            await DbContext.SaveChangesAsync();
            return Ok();
        }

    }
}
        