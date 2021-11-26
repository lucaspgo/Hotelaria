import { FuncionarioService } from './funcionario.service';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/Funcionario';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private funcionarioAuth : boolean = false;

  showNavEmitter = new EventEmitter<boolean>();

  constructor(private router:Router, private funcionarioService:FuncionarioService) { }



  loginFuncionario(funcionario:Funcionario){
    console.log(1);

    this.funcionarioService.login(funcionario).subscribe(
      success => {
        this.funcionarioAuth = true;
        this.showNavEmitter.emit(true);
        this.router.navigate(["reserva/listar"]);
      },
      error => {
        alert('dados incorretos')
        this.funcionarioAuth = false;
        this.showNavEmitter.emit(false);
      }
    );
  }
}
