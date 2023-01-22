import { Component, Input, OnInit } from '@angular/core';
import { CLIENT_RENEG_LIMIT } from 'tls';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  
  @Input() id: any;

  constructor() { }

  ngOnInit() {
    console.log("ID: ",this.id)
  }

}
