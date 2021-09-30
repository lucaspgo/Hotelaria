using System;
using System.Collections.Generic;

namespace API.Models
{

    public class Quarto
    {
        //Construtor
        public Quarto()
        {
            CriadoEm = DateTime.Now;
        }
        public int Id { get; set; }
        public string Numero { get; set; }
        public double PrecoDiaria { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}