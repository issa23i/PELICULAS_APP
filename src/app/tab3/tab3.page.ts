import { Component, OnInit } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { IonicSlides, ModalController } from '@ionic/angular';
import { DetalleComponent } from '../component/detalle/detalle.component';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  peliculas: PeliculaDetalle[] = []
  favoritoGenero: any[] = []
  generos: Genre[] = []



  constructor(private datalocal : DataLocalService, private modalCtrl : ModalController) {}
  async ngOnInit() {
    this.peliculas = await this.datalocal.cargarFavoritos()
    console.log(this.peliculas)
  }
  async verDetalle(id:string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.onDidDismiss().then(()=> {
      this.ngOnInit()
    })
    modal.present();
  }

  async pelisPorGenero(genre:Genre[], peliculas: PeliculaDetalle[]){
    peliculas = await peliculas
    genre.forEach(genero => {
      for (const peli of peliculas) {
        //if(peli.genres)
        // habría que hacer un array de géneros?
      }
    });
  }
}
