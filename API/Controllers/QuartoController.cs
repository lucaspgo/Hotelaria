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
        public IActionResult Create([FromBody]Quarto quarto)
        {
            Console.WriteLine("oi");
            _context.Quartos.Add(quarto);
            _context.SaveChanges();
            return Created("", quarto);
        }

        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody]Quarto quarto)
        {
            _context.Quartos.Update(quarto);
            _context.SaveChanges();
            return Created("", quarto);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Quartos.ToList());


        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute]int id)
        {
            Quarto quarto = _context.Quartos.Find(id);
            Console.WriteLine(quarto);
            if(quarto == null)
            {
                return NotFound();
            }
            return Ok(quarto);
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