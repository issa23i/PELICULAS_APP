import { Injectable } from '@angular/core';
import { PeliculaDetalle } from 'src/app/interfaces/interfaces';
import {Storage} from '@ionic/storage'

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  peliculas: PeliculaDetalle[] = [];
  constructor(private storage: Storage) { }
  guardarPelicula( pelicula: PeliculaDetalle){
    this.peliculas.push(pelicula);
    this.storage.set('peliculas', this.peliculas)
  }
}
