using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Server.Models;

namespace Server.Models{
    public class Glumac{
                [Key]
        [Column("Id")]
        public int Id { get; set; }

        [Column("Ime")]
        [MaxLength(255)]
        public string Ime { get; set; }

        [Column("Prezime")]
        [MaxLength(255)]
        public string Prezime { get; set; }

        [Column("GodRodjenja")]
        [Range(1900,2020)]
        public string GodRodjenja { get; set; }

        [Column("MestoRodjenja")]
        [MaxLength(255)]
        public string MestoRodjenja { get; set; }

        [JsonIgnore]
        public virtual List<Spoj> Film { get; set; }
    }   
}