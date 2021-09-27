import { Funcionario } from './../../../models/Funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.scss']
})
export class CadastrarFuncionarioComponent implements OnInit {
  cpf!: number;
  nome!: string;
  login!: string;
  senha!: string;

  constructor(private router: Router, private service: FuncionarioService) { }

  ngOnInit(): void {}

  cadastrarFuncionario(): void{
    let funcionario: Funcionario = {
      cpf: this.cpf,
      nome: this.nome,
      login: this.login,
      senha: this.senha,
    };
    this.service.createFuncionario(funcionario).subscribe((funcionario) =>{
      console.log(funcionario);
      this.router.navigate([""]);
    })
  }

}
