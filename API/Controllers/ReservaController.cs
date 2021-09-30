using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        public IActionResult Create([FromBody] Reserva reserva)
        {
            if(reserva.Inicio > reserva.Fim){
                return BadRequest("A data início não pode ser maior que a data fim.");
            }

            if(reserva.Inicio == reserva.Fim){
                return BadRequest("Os campos de data não podem ser iguais.");
            }

            Reserva reservasValidation = _context.Reservas
            .Include(x => x.Cliente)
            .Include(x => x.Quarto)
            .Where(x => x.Quarto.Id == reserva.Quarto.Id)
            .Where(x => x.Inicio <= reserva.Inicio)
            .Where(x => x.Fim > reserva.Inicio)
            .AsNoTracking().FirstOrDefault();
            
            if(reservasValidation != null){
                return BadRequest("Este quarto já está reservado nesta data e hora");
            }

            reservasValidation = _context.Reservas
            .Include(x => x.Cliente)
            .Include(x => x.Quarto)
            .Where(x => x.Quarto.Id == reserva.Quarto.Id)
            .Where(x => x.Inicio < reserva.Fim)
            .AsNoTracking().FirstOrDefault();
            
            if(reservasValidation != null){
                return BadRequest("Este quarto já está reservado nesta data e hora");
            }
            
            Cliente cliente = _context.Clientes.Find(reserva.Cliente.Id);
            if (cliente == null)
            {
                return NotFound();
            }
            Quarto quarto = _context.Quartos.Find(reserva.Quarto.Id);
            if (quarto == null)
            {
                return NotFound();
            }
            reserva.Quarto = quarto;
            reserva.Cliente = cliente;

            Console.WriteLine(reserva.Quarto.Id);
            Console.WriteLine(reserva.Cliente.Id);
            _context.Reservas.Add(reserva);
            _context.SaveChanges();
            return Created("", reserva);
        }

        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Reserva reserva)
        {
            Cliente cliente = _context.Clientes.Find(reserva.Cliente.Id);
            if (cliente == null)
            {
                return NotFound();
            }
            Quarto quarto = _context.Quartos.Find(reserva.Quarto.Id);
            if (quarto == null)
            {
                return NotFound();
            }
            reserva.Quarto = quarto;
            reserva.Cliente = cliente;

            Console.WriteLine(reserva.Quarto.Id);
            Console.WriteLine(reserva.Cliente.Id);

            _context.Reservas.Update(reserva);
            _context.SaveChanges();
            return Created("", reserva);
        }

        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Reservas.Include(x => x.Cliente).Include(x => x.Quarto).AsNoTracking().ToList());


        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            Reserva reserva = _context.Reservas.Include(x => x.Cliente).Include(x => x.Quarto).Where(x => x.Id == id).AsNoTracking().FirstOrDefault();
            if (reserva == null)
            {
                return NotFound();
            }
            return Ok(reserva);
        }

        [HttpDelete]
        [Route("delete/{id}")]
        public IActionResult Delete([FromRoute] Reserva reserva)
        {
            if (reserva == null)
            {
                return NotFound();
            }
            _context.Reservas.Remove(reserva);
            _context.SaveChanges();
            return Ok();
        }

    }
}