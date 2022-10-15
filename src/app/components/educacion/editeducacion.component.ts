import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(private educacionService : EducacionService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.detail(id).subscribe(data => {
      this.educacion = data;
    }, err => {
      alert("Hubo un error al modificar la educación");
      this.router.navigate(['']);
    }
    )
  }
  

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.educacionService.update(id, this.educacion).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Ups, hubo un problema al modificar");
      this.router.navigate(['']);
    }
    )
  }

}
