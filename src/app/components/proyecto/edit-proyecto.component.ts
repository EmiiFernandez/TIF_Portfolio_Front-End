import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})

export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;

  constructor(private proyectoService : ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.detail(id).subscribe(data => {
      this.proyecto = data;
    }, err => {
      alert("Hubo un error al modificar la experiencia");
      this.router.navigate(['']);
    }
    )
  }
  

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.proyectoService.update(id, this.proyecto).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Ups, hubo un problema al modificar el proyecto");
      this.router.navigate(['']);
    }
    )
  }
}
