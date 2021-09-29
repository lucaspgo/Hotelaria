import { FuncionarioService } from '../../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  constructor(private service: FuncionarioService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
    });
  }

  onEdit(id: number): void {
    this.router.navigate([`funcionario/editar/${id}`]);
  }

  onDelete(funcionario: Funcionario): void {}
}
