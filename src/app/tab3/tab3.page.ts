import { Component, OnInit } from '@angular/core';
import { Genre, PeliculaDetalle } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { IonicSlides, ModalController } from '@ionic/angular';
import { DetalleComponent } from '../component/detalle/detalle.component';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { MovieService } from '../services/movie.service';
import { Observable } from 'rxjs';

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



  constructor(private datalocal : DataLocalService, 
    private modalCtrl : ModalController,
    private movieSrv: MovieService) {}
  async ngOnInit() {
    this.peliculas = await this.datalocal.cargarFavoritos()
    console.log(this.peliculas)
    this.pelisPorGenero()
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

  async pelisPorGenero (){
    this.movieSrv.getGeneros().subscribe( (resp) => {
      this.generos =  resp
      console.log(this.generos)
      return  this.generos
      // tengo que poner aquí la siguiente función
    })
  }

  async verGeneros(genres: Genre[]){
    await this.pelisPorGenero()
    await console.log(this.generos.length)
    this.generos.forEach((gen: Genre) => {
      console.log(gen)
    });
    
  }
}
