import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SobreMi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/service/sobremi.service';

@Component({
  selector: 'app-editsobremi',
  templateUrl: './editsobremi.component.html',
  styleUrls: ['./editsobremi.component.css']
})
export class EditsobremiComponent implements OnInit {
  sobreMi: SobreMi = null;

  constructor(private sobreMiService : SobremiService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sobreMiService.detail(id).subscribe(data => {
      this.sobreMi = data;
    }, err => {
      alert("Hubo un error al modificar la descripción");
      this.router.navigate(['']);
    }
    )
  }
  

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sobreMiService.update(id, this.sobreMi).subscribe(data => {
      this.router.navigate(['']);
    }, err => {
      alert("Ups, hubo un problema al modificar la descripción");
      this.router.navigate(['']);
    }
    )
  }
}
