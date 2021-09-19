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
            Reservas = new List<Reserva>();
        }
        public int Id { get; set; }
        public int Numero { get; set; }
        public double PrecoDiaria { get; set; }
        public DateTime CriadoEm { get; set; }
        public List<Reserva> Reservas { get; set; }
    }
}