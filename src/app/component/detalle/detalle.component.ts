import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/providers/modal-controller';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { CLIENT_RENEG_LIMIT } from 'tls';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  
  @Input() id: any;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: 0
  };




  constructor( private movieService: MovieService,
    private modalCtrl: ModalController ) { }

ngOnInit() {
// console.log('ID', this.id );


this.movieService.getPeliculaDetalle( this.id )
.subscribe( resp => {
console.log( resp );
this.pelicula = resp;
});

this.movieService.getActoresPelicula( this.id )
.subscribe( resp => {
console.log( resp );
this.actores = resp.cast;
});

}

regresar() {
this.modalCtrl.dismiss();
}
}
