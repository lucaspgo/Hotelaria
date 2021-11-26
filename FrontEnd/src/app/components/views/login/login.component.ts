import { AuthService } from './../../../services/auth.service';
import { Funcionario } from './../../../models/Funcionario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login!: string;
  senha!: string;
  constructor(private router: Router, private service: FuncionarioService, private authService: AuthService) {}

  ngOnInit(): void {}

  loginFuncionario(): void{
    let funcionario: Funcionario = {
      login: this.login,
      senha: this.senha,
    };
    this.authService.loginFuncionario(funcionario);
  }



}
