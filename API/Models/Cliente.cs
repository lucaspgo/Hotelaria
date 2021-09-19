using System;
using System.Collections.Generic;

namespace API.Models
{

    public class Cliente
    {
        //Construtor
        public Cliente()
        {
            CriadoEm = DateTime.Now;
            Reservas = new List<Reserva>();
        } 
        public int Id { get; set; }
        public int Cpf { get; set; }
        public string Nome { get; set; }
        public List<Reserva> Reservas { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}