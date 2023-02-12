import { Component } from '@angular/core';
import { IonicSlides, ModalController } from '@ionic/angular';
import { DetalleComponent } from '../component/detalle/detalle.component';
import { Pelicula } from '../interfaces/interfaces';
import { MovieService } from '../services/movie.service';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  textoBuscar = ''
  buscando = false
  peliculas : Pelicula[] = []
  ideas: string[] = ['Chicago', 'Annie', 'Pesadilla antes de Navidad', 'Bailando en la oscuridad']

  constructor(private MovieService: MovieService, private modalCtrl: ModalController) {}

  buscar( event: any) {
    const valor: string = event.detail.value

    if (valor.length === 0){
      this.buscando = false
      this.peliculas = []
      return
    }
    

    console.log(valor)
    this.buscando = true
    this.MovieService.getBuscarPeliculas(valor)
      .subscribe ( resp => {
        this.peliculas = resp['results']
      })
  }
  async verDetalle(id:string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });
    modal.present();
  }
}
