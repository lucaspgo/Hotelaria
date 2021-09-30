import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Cliente } from "src/app/models/Cliente";
import { Quarto } from "src/app/models/Quarto";
import { Reserva } from "src/app/models/Reserva";
import { ClienteService } from "src/app/services/cliente.service";
import { QuartoService } from "src/app/services/quarto.service";
import { ReservaService } from "src/app/services/reserva.service";

@Component({
  selector: "app-form-reserva",
  templateUrl: "./form-reserva.component.html",
  styleUrls: ["./form-reserva.component.scss"],
})
export class FormReservaComponent implements OnInit {
  id?: number;
  form!: FormGroup;
  submitted = false;
  clientes: Cliente[] = [];
  quartos: Quarto[] = [];
  message?: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ReservaService,
    private serviceCliente: ClienteService,
    private serviceQuarto: QuartoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.serviceCliente.list().subscribe((clientes) => {
      this.clientes = clientes;
    });

    this.serviceQuarto.list().subscribe((quartos) => {
      this.quartos = quartos;
    });

    this.form = this.fb.group({
      id: [null],
      numero: [null, [Validators.required]],
      quarto: [null, [Validators.required]],
      cliente: [null, [Validators.required]],
      inicio: [null, [Validators.required]],
      fim: [null, [Validators.required]],
    });

    // let reserva: Reserva;
    this.id = this.route.snapshot.params["id"];

    if (this.id) {
      this.service.getById(this.id).subscribe((reserva) => {
        this.form = this.fb.group({
          id: [reserva.id],
          numero: [reserva.numero, [Validators.required]],
          quarto: [reserva.quarto, [Validators.required]],
          cliente: [reserva.cliente, [Validators.required]],
          inicio: [reserva.inicio, [Validators.required]],
          fim: [reserva.fim, [Validators.required]],
        });
      });
    }
  }

  compareQuarto(c1: Quarto, c2: Quarto): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  compareCliente(c1: Cliente, c2: Cliente): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.form.valid) {
      let reserva: Reserva;
      if (this.id) {
        reserva = {
          id: this.form.value["id"],
          numero: this.form.value["numero"],
          quarto: this.form.value["quarto"],
          cliente: this.form.value["cliente"],
          inicio: this.form.value["inicio"],
          fim: this.form.value["fim"],
        };
      } else {
        reserva = {
          numero: this.form.value["numero"],
          quarto: this.form.value["quarto"],
          cliente: this.form.value["cliente"],
          inicio: this.form.value["inicio"],
          fim: this.form.value["fim"],
        };
      }
      this.service.save(reserva).subscribe(
        success => {
          console.log(success);
          this.router.navigate(["reserva/listar"]);
        },
        error => {
          this.message = error.error;
        }
      );
    }
  }

  hasError(field: string) {
    return this.form.get(field)!.errors;
  }

  hasMessage() {
    if(this.message != null){
      return true;
    }
    return false;
  }

  onCancel(): void {
    this.submitted = false;
    this.form.reset();
  }

  changeCliente(e: any) {
    this.form.get("cliente")?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  // changeQuarto(e: any) {

  //   this.form.get('quarto')?.setValue(e.target.value, {
  //      onlySelf: true
  //   });
  // }

  changeInicio(e: any) {
    this.form.get("inicio")?.setValue(e.target.value, {
      onlySelf: true,
    });
  }

  changeFim(e: any) {
    this.form.get("fim")?.setValue(e.target.value, {
      onlySelf: true,
    });
  }
  compararQuartos(obj1: Quarto, obj2: Quarto) {
    return obj1 && obj2 ? obj1.id === obj2.id : obj1 && obj2;
  }
}
