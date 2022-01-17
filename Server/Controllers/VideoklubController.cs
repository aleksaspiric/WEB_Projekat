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
    public class VideoKlubController: ControllerBase
    {
        public ContextKlasa DbContext { get; set; }

        public VideoKlubController(ContextKlasa dataContext)
        {
            DbContext= dataContext;
        }

        [HttpGet]
        [Route("vratiSveVideoKlubove")]

        public IEnumerable<VideoKlub> vratiSveVideoKlubove()
        {
            var videoklubovi = DbContext.VideoKlubovi.Include(x => x.Filmovi).ToArray();

            return videoklubovi;
        }
        
        [HttpGet]
        [Route("vratiVideoKlub/{id}")]
        public VideoKlub vratiKlub(int id)
        {
            var videoklub = DbContext.VideoKlubovi.Where(x => x.Id == id)
                                                  .Include(y => y.Filmovi)
                                                  .FirstOrDefault();

            return videoklub;
        }

        [HttpPost]
        [Route("dodajVideoKlub")]
        public async Task<ActionResult> DodajStudenta([FromBody] VideoKlub videoKlub)
        {
            DbContext.VideoKlubovi.Add(videoKlub);
            await DbContext.SaveChangesAsync();
            return Ok($"Videoklub dodat. ID je: {videoKlub.Id}");
        }

        [HttpPut]
        [Route("izmeniVideoKlub/{id}")]
        public async Task<ActionResult> izmeniVideoKlub(int id, [FromBody] string naziv)
        {
            var videoklub = DbContext.VideoKlubovi.Where(p => p.Id == id).FirstOrDefault();

            if (videoklub != null)
            {
                videoklub.Naziv = naziv;

                await DbContext.SaveChangesAsync();
                return Ok($"Uspešno promenjen naziv videokluba! ID: {videoklub.Id}");
            }
            else
            {
                return BadRequest("Videoklub nije pronađen!");
            }
        }

        [HttpDelete]
        [Route("obrisiVideoKlub/{id}")]
        public async Task<ActionResult> obrisiVideoKlub(int id)
        {
            var klub= await DbContext.VideoKlubovi.FindAsync(id);
            if(klub == null)
            {
                return BadRequest("Videoklubn nije nadjen");
            }

            DbContext.VideoKlubovi.Remove(klub);
            await DbContext.SaveChangesAsync();

            return Ok();
        }
    }
}