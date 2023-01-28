import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../interfaces/interfaces';
import { MovieService } from '../services/movie.service';

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
        console.log(resp)
        this.peliculas = resp['results']
      })
  }

}
