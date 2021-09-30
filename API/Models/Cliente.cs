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
        } 
        public int Id { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}