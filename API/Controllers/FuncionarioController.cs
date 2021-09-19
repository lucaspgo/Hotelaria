using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionario")]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext _context;
        public FuncionarioController(DataContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]Funcionario funcionario)
        {
            _context.Funcionarios.Add(funcionario);
            _context.SaveChanges();
            return Created("", funcionario);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Funcionarios.ToList());


        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute]int id)
        {
            Funcionario funcionario = _context.Funcionarios.Find(id);
            if(funcionario != null)
            {
                return NotFound();
            }
            return Ok(funcionario);
        }

        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete([FromRoute] string name)
        {
            // Buscar objeto na tabela com base no nome
            Funcionario funcionario = _context.Funcionarios.FirstOrDefault
            (
                funcionario => funcionario.Nome.Equals(name) // && ||
            );

            if(funcionario != null)
            {
                return NotFound();
            }
            _context.Funcionarios.Remove(funcionario);
            _context.SaveChanges();
            return Delete("");
        }

    }
}