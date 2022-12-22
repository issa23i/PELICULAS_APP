import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) {}

  getFeature(){
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-09-01&primary_release_date.lte=2021-11-15&api_key=09a5b4a4ca15c3d268a44d5d5fb83522&language=es&include_images_language=es');
  }
}
