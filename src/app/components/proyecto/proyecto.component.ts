import { Component, OnInit } from "@angular/core";
import { Proyecto } from "src/app/model/proyecto";
import { ProyectoService } from "src/app/service/proyecto.service";
import { TokenService } from "src/app/service/token.service";


@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})

export class ProyectoComponent implements OnInit {
 public proyecto:Proyecto[]=[];

  constructor(private proyectoService: ProyectoService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(data => { this.proyecto = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("Error al intentar borrar el proyecto");
        }
      )
    }
  }
}