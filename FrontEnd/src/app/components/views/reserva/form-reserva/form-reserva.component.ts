import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reserva } from 'src/app/models/Reserva';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-form-reserva',
  templateUrl: './form-reserva.component.html',
  styleUrls: ['./form-reserva.component.scss']
})
export class FormReservaComponent implements OnInit {

  id?: number;
  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: ReservaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      numero: [null, [Validators.required]],
      precoDiaria: [null, [Validators.required]],
    });

    // let reserva: Reserva;
    // this.id = this.route.snapshot.params["id"];
    
    // if (this.id) {
    //   this.service.getById(this.id).subscribe((reserva) => {
    //     this.form = this.fb.group({
    //       id: [reserva.id],
    //       numero: [reserva.numero, [Validators.required]],
    //       quarto: [quarto.id, [Validators.required]],
    //       cliente: [cliente.id, [Validators.required]],
    //       inicio: [reserva.inicio, [Validators.required]],
    //       fim: [reserva.fim, [Validators.required]],
    //     });
    //   });
    // }
  }

  onSubmit(): void {
    // this.submitted = true;
    // console.log(this.form.value);
    // if (this.form.valid) {
    //   let reserva: Reserva;
    //   if(this.id){
    //     reserva = {
    //       id: this.form.value["id"],
    //       numero: this.form.value["numero"],
    //       precoDiaria: this.form.value["precoDiaria"]
    //     };
    //   } else {
    //     reserva = {
    //       numero: this.form.value["numero"],
    //       precoDiaria: this.form.value["precoDiaria"]
    //     };
    //   }
      
    //   this.service.save(reserva).subscribe((reserva) =>{
    //     this.router.navigate(["reserva/listar"]);
    //   })
    // }
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
