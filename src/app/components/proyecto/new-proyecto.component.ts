import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string ='';

  
  constructor(private proyectoService: ProyectoService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreated(): void {
    const proyecto = new Proyecto(this.nombreP, this.descripcionP);
    this.proyectoService.save(proyecto).subscribe(data => {
      alert("Proyecto añadido correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al cargar el proyecto");
      this.router.navigate(['']);
    })
  }

}
