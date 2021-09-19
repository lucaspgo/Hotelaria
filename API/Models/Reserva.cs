using System;

namespace API.Models
{

    public class Reserva
    {
        //Construtor
        public Reserva(){
            CriadoEm = DateTime.Now;
            Quarto = new Quarto();
        }
        public int Id { get; set; }
        public int Numero { get; set; }
        public Quarto Quarto{ get; set; }
        public Cliente Cliente{ get; set; }
        public DateTime Inicio { get; set; }
        public DateTime Fim { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}