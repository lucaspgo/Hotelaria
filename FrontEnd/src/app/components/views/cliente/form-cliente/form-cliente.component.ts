import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from 'src/app/models/Cliente';
import { ClienteService } from "src/app/services/cliente.service";

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.scss']
})
export class FormClienteComponent implements OnInit {
  id?: number;
  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ClienteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      cpf: [null, [Validators.required]],
      nome: [null, [Validators.required]],
    });

    let cliente: Cliente;
    this.id = this.route.snapshot.params["id"];
    
    if (this.id) {
      this.service.getById(this.id).subscribe((cliente) => {
        this.form = this.fb.group({
          id: [cliente.id],
          cpf: [cliente.cpf, [Validators.required]],
          nome: [cliente.nome, [Validators.required]],
        });
      });
    }
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      let cliente: Cliente;
      if(this.id){
        cliente = {
          id: this.form.value["id"],
          cpf: this.form.value["cpf"],
          nome: this.form.value["nome"],
        };
      } else {
        cliente = {
          cpf: this.form.value["cpf"],
          nome: this.form.value["nome"],
        };
      }
      
      this.service.save(cliente).subscribe((cliente) =>{
        this.router.navigate(["cliente/listar"]);
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
