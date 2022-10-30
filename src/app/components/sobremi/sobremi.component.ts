import { Component, OnInit } from '@angular/core';
import { SobreMi } from 'src/app/model/sobremi';
import { SobremiService } from 'src/app/service/sobremi.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-sobremi',
  templateUrl: './sobremi.component.html',
  styleUrls: ['./sobremi.component.css']
})
export class SobremiComponent implements OnInit {
  public sobreMi:SobreMi[]=[];

  constructor(private sobreMiService: SobremiService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarsSobreMi();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarsSobreMi(): void {
    this.sobreMiService.lista().subscribe(data => { this.sobreMi = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.sobreMiService.delete(id).subscribe(
        data => {
          this.cargarsSobreMi();
        }, err => {
          alert("Error al intentar borrar el proyecto");
        }
      )
    }
  }
}
