import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SobreMi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/service/sobremi.service';

@Component({
  selector: 'app-newsobremi',
  templateUrl: './newsobremi.component.html',
  styleUrls: ['./newsobremi.component.css']
})
export class NewsobremiComponent implements OnInit {
  descripcionSM: string ='';

  
  constructor(private sobreMiService: SobremiService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreated(): void {
    const sobreMi = new SobreMi(this.descripcionSM);
    this.sobreMiService.save(sobreMi).subscribe(data => {
      alert("Descripción añadida correctamente");
      this.router.navigate(['']);
    }, err => {
      alert("Error al cargar la descripción");
      this.router.navigate(['']);
    })
  }

}

