import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quarto } from 'src/app/models/Quarto';
import { QuartoService } from 'src/app/services/quarto.service';

@Component({
  selector: 'app-cadastrar-quarto',
  templateUrl: './cadastrar-quarto.component.html',
  styleUrls: ['./cadastrar-quarto.component.scss']
})
export class CadastrarQuartoComponent implements OnInit {
  numero!: string;
  precoDiaria!: number;

  constructor(private router: Router, private service: QuartoService) { }

  ngOnInit(): void {
  }

  cadastrar(): void{
    let quarto: Quarto = {
      numero: this.numero,
      precoDiaria: this.precoDiaria
    };
    this.service.create(quarto).subscribe((quarto) =>{
      this.router.navigate(["quarto/listar"]);
    })
  }

}
