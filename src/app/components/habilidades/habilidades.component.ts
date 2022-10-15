import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-habilidades', 
  templateUrl: './habilidades.component.html', 
  styleUrls: ['./habilidades.component.css'],
})


export class HabilidadesComponent implements OnInit {

  constructor(private config:NgbProgressbarConfig) { 
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }

  ngOnInit(): void {
  }
}



