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

  /**
   * Actividad: Consigue que el icono de estrella de favoritos esté relleno (star) cuando la película ya exista en favoritos
y hueca (star-outline) cuando no lo esté. Consejos:
detalle.component.html

• Convierte en nombre del icono en una propiedad usando los [] . El valor será una variable.
detalle.component.ts
• Crea una variable que llamaremos estrella para controlar el nombre del icono. Se debe iniciar con ‘star’
• Si la película existe, estrella tomará el valor ‘star’, en caso contrario, tomará el valor ‘star-outline’.
   */

  @Input() id: any;

  pelicula: PeliculaDetalle = {};
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';
  /** 
    slideOptActores = {
      slidesPerView: 3.3,
      freeMode: true,
      spaceBetween: 0
    };
  */



  constructor(private movieService: MovieService,
    private modalCtrl: ModalController,
    private datalocal: DataLocalService) { }

  async ngOnInit() {
    // console.log('ID', this.id );

    const existe = await this.datalocal.existePelicula ( this.id);
    console.log("Detalle Component:", existe);

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
