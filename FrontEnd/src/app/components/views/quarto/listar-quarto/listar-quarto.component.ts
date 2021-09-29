import { Component, OnInit } from "@angular/core";
import { Quarto } from "src/app/models/Quarto";
import { QuartoService } from "src/app/services/quarto.service";

@Component({
  selector: "app-listar-quarto",
  templateUrl: "./listar-quarto.component.html",
  styleUrls: ["./listar-quarto.component.scss"],
})
export class ListarQuartoComponent implements OnInit {
  quartos: Quarto[] = [];
  constructor(private service: QuartoService) {}

  ngOnInit(): void {
    this.service.list().subscribe((quartos) => {
      this.quartos = quartos;
    });
  }
}
