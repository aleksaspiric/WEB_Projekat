using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Server.Models;

namespace Server.Models
{
    [Table("VideoKlub")]
    public class VideoKlub
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        [Column("Broj filmova")]
        [Range(0, 20)]
        public int Trenutno{get; set;}
        [JsonIgnore]
        public IList<Film> Filmovi { get; set; }
    }
}