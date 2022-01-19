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
    public class FilmController: ControllerBase
    {
        public ContextKlasa DbContext { get; set; }

        public FilmController(ContextKlasa dataContext)
        {
            DbContext= dataContext;
        }   
        
        [HttpGet]
        [Route("vratiSveFilmove")]

        public IEnumerable<Film> vratiSveFilmove()
        {
            var filmovi = DbContext.Filmovi.ToArray();

            return filmovi;    
        }

        [HttpGet]
        [Route("vratiSveFilmoveIzKluba/{id}")]

        public IEnumerable<Film> vratiSveFilmoveIzKluba(int id)
        {
            var filmovi = DbContext.Filmovi.Where(x => x.Klub.Id == id);

            return filmovi.ToArray();    
        }
        
        [HttpPost]
        [Route("dodajFilmUKlub/{idk}")]
        public async Task<ActionResult> dodajFilm(int idk, [FromBody] Film film)
        {
            var videoklub = DbContext.VideoKlubovi.Find(idk);

            if(film.Naziv == "" || film.Reziser == "" || film.Opis=="" || film.Zanr==""|| film.Opis=="")
                throw new System.Exception("Greska!");

            film.Klub = videoklub;
            DbContext.Filmovi.Add(film);
            videoklub.Trenutno++;
            DbContext.VideoKlubovi.Update(videoklub);
            await DbContext.SaveChangesAsync();

            return Ok(); 
        }

        [HttpPut]
        [Route("izmeniFilm")]
        public async Task<ActionResult> izmeniFilm([FromBody] Film film)
        {

            if(film.Naziv == "" || film.Reziser == "" || film.Opis=="" || film.Zanr=="")
                return StatusCode(406);

            DbContext.Filmovi.Update(film);
            await DbContext.SaveChangesAsync();
            return Ok();
        }
        
        [HttpPut]
        [Route("izmeniVidoklubFilma/{idk}/{idf}")]
        public async Task<ActionResult> izmeniFilm(int idk, int idf)
        {
            var film = DbContext.Filmovi.Find(idf);
            var videoklub = DbContext.VideoKlubovi.Find(idk);

            if(film.Klub == null)
            {
                film.Klub = videoklub;
                DbContext.Filmovi.Update(film);
                await DbContext.SaveChangesAsync();
                return Ok();
            }

            return StatusCode(406);
        }

        [HttpDelete]
        [Route("IzbrisiFilm/{idk}/{idf}")]
        public IEnumerable<Film> obrisiFilm(int idk, int idf)
        {
            var film = DbContext.Filmovi.Find(idf);
            var videoklub = DbContext.VideoKlubovi.Find(idk);

            if(film.Klub == videoklub)
            {
                DbContext.Filmovi.Remove(film);
                videoklub.Trenutno--;
                DbContext.VideoKlubovi.Update(videoklub);
                DbContext.SaveChanges();
            }

            return DbContext.Filmovi.ToArray();
        }
    }
}