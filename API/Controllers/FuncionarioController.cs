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
        [Route("login")]
        public IActionResult Login([FromBody] Funcionario funcionario)
        {
            Funcionario funcionarioCredencial = _context.Funcionarios.Where(x => x.Login == funcionario.Login).Where(x => x.Senha == funcionario.Senha).FirstOrDefault();
            if (funcionarioCredencial != null)
            {
                return Ok(funcionarioCredencial);
            }
            else
            {
                return Forbid();
            }
        }

        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Funcionario funcionario)
        {
            _context.Funcionarios.Add(funcionario);
            _context.SaveChanges();
            return Created("", funcionario);
        }

        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Funcionario funcionario)
        {
            _context.Funcionarios.Update(funcionario);
            _context.SaveChanges();
            return Created("", funcionario);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Funcionarios.ToList());


        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            Funcionario funcionario = _context.Funcionarios.Find(id);
            if (funcionario == null)
            {
                return NotFound();
            }
            return Ok(funcionario);
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete([FromRoute] Funcionario funcionario)
        {
            if (funcionario == null)
            {
                return NotFound();
            }
            _context.Funcionarios.Remove(funcionario);
            _context.SaveChanges();
            return Ok();
        }

    }
}