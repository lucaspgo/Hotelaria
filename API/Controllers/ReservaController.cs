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
    [Route("api/reserva")]
    public class ReservaController : ControllerBase
    {
        private readonly DataContext _context;
        public ReservaController(DataContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody]Reserva reserva)
        {
            _context.Reservas.Add(reserva);
            _context.SaveChanges();
            return Created("", reserva);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Reservas.ToList());


        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute]int id)
        {
            Reserva reserva = _context.Reservas.Find(id);
            if(reserva != null)
            {
                return NotFound();
            }
            return Ok(reserva);
        }

        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete([FromRoute] string id)
        {
            // Buscar objeto na tabela com base no nome
            Reserva reserva = _context.Reservas.FirstOrDefault
            (
                reserva => reserva.Id.Equals(id) // && ||
            );

            if(reserva != null)
            {
                return NotFound();
            }
            _context.Reservas.Remove(reserva);
            _context.SaveChanges();
            return Delete("");
        }

    }
}