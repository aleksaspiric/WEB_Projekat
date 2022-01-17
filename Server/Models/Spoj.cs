using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using Server.Models;

namespace Server.Models
{
    [Table("FilmGlumacSpoj")]
    public class Spoj{
        [Key]
        public int ID { get; set; }
        
        [JsonIgnore]
        public Film Film { get; set; }

        public Glumac Glumac { get; set; }
    }
}