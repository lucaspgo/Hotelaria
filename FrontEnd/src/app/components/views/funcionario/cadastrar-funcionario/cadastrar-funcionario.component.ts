import { Funcionario } from '../../../../models/Funcionario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.scss']
})
export class CadastrarFuncionarioComponent implements OnInit {
  id?: number;
  form!: FormGroup;
  submitted = false;

  constructor(private router: Router, private service: FuncionarioService, private fb: FormBuilder, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      cpf: [null, [Validators.required]],
      nome: [null, [Validators.required]],
      login: [null, [Validators.required]],
      senha: [null, [Validators.required]],
    })

    let funcionario: Funcionario;
    this.id = this.route.snapshot.params["id"];

    if (this.id) {
      this.service.getById(this.id).subscribe((funcionario) => {
        this.form = this.fb.group({
          id: [funcionario.id],
          cpf: [funcionario.cpf, [Validators.required]],
          nome: [funcionario.nome, [Validators.required]],
          login: [funcionario.login, [Validators.required]],
          senha: [funcionario.senha, [Validators.required]],
        });
      });
    }
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      let funcionario: Funcionario;
      if(this.id){
        funcionario = {
          id: this.form.value["id"],
          cpf: this.form.value["cpf"],
          nome: this.form.value["nome"],
          login: this.form.value["login"],
          senha: this.form.value["senha"],
        };
      } else {
        funcionario = {
          cpf: this.form.value["cpf"],
          nome: this.form.value["nome"],
          login: this.form.value["login"],
          senha: this.form.value["senha"],
        };
      }
      
      this.service.save(funcionario).subscribe((funcionario) =>{
        this.router.navigate(["/"]);
      })
    }
  }

  hasError(field: string) {
    return this.form.get(field)!.errors;
  }

  onCancel(): void {
    this.submitted = false;
    this.form.reset();
    console.log("onCancel");
  }

}
