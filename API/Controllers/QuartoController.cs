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
    [Route("api/quarto")]
    public class QuartoController : ControllerBase
    {
        private readonly DataContext _context;
        public QuartoController(DataContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]Quarto produto)
        {
            _context.Quartos.Add(produto);
            _context.SaveChanges();
            return Created("", produto);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Quartos.ToList());


        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute]int id)
        {
            Quarto produto = _context.Quartos.Find(id);
            if(produto != null)
            {
                return NotFound();
            }
            return Ok(produto);
        }

        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete([FromRoute] string name)
        {
            // Buscar objeto na tabela com base no nome
            Quarto produto = _context.Quartos.FirstOrDefault
            (
                produto => produto.Numero.Equals(name) // && ||
            );

            if(produto != null)
            {
                return NotFound();
            }
            _context.Quartos.Remove(produto);
            _context.SaveChanges();
            return Delete("");
        }
    }
}