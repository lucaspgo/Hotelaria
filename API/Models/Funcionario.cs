using System;

namespace API.Models
{

    public class Funcionario
    {
        //Construtor
        public Funcionario() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Cpf { get; set; }
        public string Nome { get; set; }
        public string Login { get; set; }
        public string Senha { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}