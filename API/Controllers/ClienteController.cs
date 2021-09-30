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
    [Route("api/cliente")]
    public class ClienteController : ControllerBase
    {
        private readonly DataContext _context;
        public ClienteController(DataContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]Cliente cliente)
        {
            Console.WriteLine("Entrou");
            _context.Clientes.Add(cliente);
            _context.SaveChanges();
            return Created("", cliente);
        }

        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody]Cliente cliente)
        {
            _context.Clientes.Update(cliente);
            _context.SaveChanges();
            return Created("", cliente);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Clientes.ToList());


        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute]int id)
        {
            Cliente cliente = _context.Clientes.Find(id);
            if(cliente == null)
            {
                return NotFound();
            }
            return Ok(cliente);
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete([FromRoute] Cliente cliente)
        {
            if(cliente == null)
            {
                return NotFound();
            }
            _context.Clientes.Remove(cliente);
            _context.SaveChanges();
            return Ok();
        }

    }
}