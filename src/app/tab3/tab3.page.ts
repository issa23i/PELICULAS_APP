import { Component, OnInit } from '@angular/core';
import { Genre, GenrePelis, PeliculaDetalle } from '../interfaces/interfaces';
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
  generosPelis: GenrePelis = {
    genero: {
      id: 0,
      name: ''
    },
    peliculas: []
  }
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
    this.movieSrv.getGeneros().subscribe( (resp: any) => {
      this.generos =  resp.genres
      console.log(this.generos)

      this.generos.forEach((genero :Genre) => {
        console.log(genero.id)
        const favoritoGenero: PeliculaDetalle[] = []

        this.peliculas.forEach( (peli: PeliculaDetalle) => {
          peli.genres.forEach((genr: Genre) => {
            // si el genero de la película es igual al género del array géneros
            if(genr.id === genero.id){
              favoritoGenero.push(peli)
            }
          });

          // si tiene peliculas mostrar
          if (favoritoGenero.length>0){
            mostrar(favoritoGenero, genero)
          }
        })


      })


      
      
    })
  }

}

function mostrar( favoritoGenero: PeliculaDetalle[],genero: Genre) {
  generosPelis = {genero,favoritoGenero}
}

