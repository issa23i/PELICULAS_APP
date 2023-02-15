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
  
  // almacena todos los objetos de la interfaz creada por mi
  generosPelis: GenrePelis[] = []
  // almacena todos los géneros
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

      // iteramos por los géneros
      this.generos.forEach((genero :Genre) => {
        // creamos un array el género que almacenará las películas de dicho género
        const favoritoGenero: PeliculaDetalle[] = []

        // iteramos por las películas
        this.peliculas.forEach( (peli: PeliculaDetalle) => {

          // iteramos por cada género de la película
          peli.genres.forEach((genr: Genre) => {
            // si el genero de la película es igual al género del array géneros
            if(genr.id === genero.id){
              // añadimos la película al array de ese género
              favoritoGenero.push(peli)
            }
          });

          
        })
        // si tiene peliculas el género
        if (favoritoGenero.length>0){
          // una intefaz creada por mí, para manejar un array de  películas por cada género
          // la inicializo con los datos del genero y el array de películas
            const generoPelis: GenrePelis = {
              genero: {
                id: genero.id,
                name: genero.name
              },
              peliculas: favoritoGenero
            }
          // añadimos el objeto GenrePelis al array generosPelis
          this.generosPelis.push(generoPelis)
        }
      })

    })
    console.log(this.generosPelis)
  }

 
}



