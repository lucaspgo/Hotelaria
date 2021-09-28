import { FuncionarioService } from './../../../services/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Funcionario } from 'src/app/models/Funcionario';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.scss']
})
export class ListarFuncionarioComponent implements OnInit {
  funcionarios: Funcionario[] = [];
  constructor(private service: FuncionarioService) {}

  ngOnInit(): void {
    this.service.listFuncionario().subscribe((funcionarios) => {
      this.funcionarios = funcionarios;
  });
  }

}
