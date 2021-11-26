import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrls: ['./listar-reserva.component.scss']
})
export class ListarReservaComponent implements OnInit {

  reservas: Reserva[] = [];
  constructor(private service: ReservaService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((reservas) => {
      this.reservas = reservas;
    });
  }

  onEdit(id: number): void {
    this.router.navigate([`reserva/editar/${id}`]);
  }

  onDelete(reserva: Reserva): void {
    this.service.delete(reserva).subscribe(() =>{
      this.service.list().subscribe((reservas) => {
        this.reservas = reservas;
      });
    })
  }

}
