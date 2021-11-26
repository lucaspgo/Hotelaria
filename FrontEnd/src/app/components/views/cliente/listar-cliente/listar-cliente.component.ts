import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Cliente } from "src/app/models/Cliente";
import { ClienteService } from "src/app/services/cliente.service"
@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss']
})
export class ListarClienteComponent implements OnInit {
  clientes: Cliente[] = [];
  constructor(private service: ClienteService, private router: Router) { }

  ngOnInit(): void {
    this.service.list().subscribe((clientes) => {
      this.clientes = clientes;
    });
  }

  onEdit(id: number): void {
    this.router.navigate([`cliente/editar/${id}`]);
  }

  onDelete(cliente: Cliente): void {
    this.service.delete(cliente).subscribe(() =>{
      this.service.list().subscribe((clientes) => {
        this.clientes = clientes;
      });
    })
  }
}