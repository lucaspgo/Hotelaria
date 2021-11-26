import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Quarto } from "src/app/models/Quarto";
import { QuartoService } from "src/app/services/quarto.service";

@Component({
  selector: "app-listar-quarto",
  templateUrl: "./listar-quarto.component.html",
  styleUrls: ["./listar-quarto.component.scss"],
})
export class ListarQuartoComponent implements OnInit {
  quartos: Quarto[] = [];
  constructor(private service: QuartoService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((quartos) => {
      this.quartos = quartos;
    });
  }

  onEdit(id: number): void {
    this.router.navigate([`quarto/editar/${id}`]);
  }

  onDelete(quarto: Quarto): void {
    this.service.delete(quarto).subscribe(() =>{
      this.service.list().subscribe((quartos) => {
        this.quartos = quartos;
      });
    })
  }
}
