import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cast, PeliculaDetalle } from 'src/app/interfaces/interfaces';
import { CLIENT_RENEG_LIMIT } from 'tls';

import { MovieService } from '../../services/movie.service';
import { DataLocalService } from '../../services/data-local.service';

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



  constructor(private movieService: MovieService,
    private modalCtrl: ModalController,
    private datalocal: DataLocalService) { }

  async ngOnInit() {

    const existe = await this.datalocal.existePelicula ( this.id);

   if( await existe) {
      this.estrella  = 'star'
    } else {
      this.estrella = 'star-outline'
    }

    

    this.movieService.getPeliculaDetalle(this.id)
      .subscribe(resp => {
        console.log(resp);
        this.pelicula = resp;
      });

    this.movieService.getActoresPelicula(this.id)
      .subscribe(resp => {
        console.log(resp);
        this.actores = resp.cast;
      });

  }

  
  regresar() {
    this.modalCtrl.dismiss();
  }

  favorito() {
    this.datalocal.guardarPelicula(this.pelicula);
  }
}
