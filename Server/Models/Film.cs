using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Server.Models;

namespace Server.Models
{
    [Table("Film")]
    public class Film
    {
        [Key]
        [Column("Id")]
        public int Id { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        [Column("Reziser")]
        [MaxLength(255)]
        public string Reziser { get; set; }

        [Column("Zanr")]
        [MaxLength(255)]
        public string Zanr { get; set; }

        [Column("Godina")]
        [Range(1900,2022)]
        public int Godina { get; set; }

        [Column("Ocena")]
        [Range(0,10)]
        public int Ocena { get; set; }

        [Column("Opis")]
        [MaxLength(2000)]
        public string Opis { get; set; }

        [Column("Trajanje")]
        public int Trajanje { get; set; }

        [JsonIgnore]
        public virtual List<Spoj> Glumci { get; set; }

        [JsonIgnore]
        public VideoKlub Klub { get; set; }
    }
}