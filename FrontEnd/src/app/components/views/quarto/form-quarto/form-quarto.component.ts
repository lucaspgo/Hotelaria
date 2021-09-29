import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Quarto } from "src/app/models/Quarto";
import { QuartoService } from "src/app/services/quarto.service";

@Component({
  selector: "app-form-quarto",
  templateUrl: "./form-quarto.component.html",
  styleUrls: ["./form-quarto.component.scss"],
})
export class FormQuartoComponent implements OnInit {
  id?: number;
  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private service: QuartoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [null],
      numero: [null, [Validators.required]],
      precoDiaria: [null, [Validators.required]],
    });

    let quarto: Quarto;
    this.id = this.route.snapshot.params["id"];
    
    if (this.id) {
      this.service.getById(this.id).subscribe((quarto) => {
        this.form = this.fb.group({
          id: [quarto.id],
          numero: [quarto.numero, [Validators.required]],
          precoDiaria: [quarto.precoDiaria, [Validators.required]],
        });
      });
    }
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.form.value);
    if (this.form.valid) {
      let quarto: Quarto;
      if(this.id){
        quarto = {
          id: this.form.value["id"],
          numero: this.form.value["numero"],
          precoDiaria: this.form.value["precoDiaria"]
        };
      } else {
        quarto = {
          numero: this.form.value["numero"],
          precoDiaria: this.form.value["precoDiaria"]
        };
      }
      
      this.service.save(quarto).subscribe((quarto) =>{
        this.router.navigate(["quarto/listar"]);
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
