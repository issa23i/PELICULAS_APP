import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB, PeliculaDetalle, RespuestaCredits, Genre, Pelicula } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';


const URL    = environment.url;
const apiKey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor( private http: HttpClient) { }

  private ejecutarQuery<T>( query: string ) {

    query = URL + query;
    query += `&api_key=${ apiKey }&language=es&include_image_language=es`;

    return this.http.get<T>( query );

  }

 
  getFeature() {

    const hoy = new Date();
    const ultimoDia = new Date( hoy.getFullYear(), hoy.getMonth() + 1, 0 ).getDate();
    const mes = hoy.getMonth() + 1;

    let mesString;

    if ( mes < 10 ) {
      mesString = '0' + mes;
    } else {
      mesString = mes;
    }


    const inicio = `${ hoy.getFullYear() }-${ mesString }-01`;
    const fin    = `${ hoy.getFullYear() }-${ mesString }-${ ultimoDia }`;

    console.log(inicio)
    console.log(fin)

  // tslint:disable-next-line:max-line-length
  return this.ejecutarQuery<RespuestaMDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);



  }

  getPeliculaDetalle( id:string){
    return this.ejecutarQuery<PeliculaDetalle>(`/movie/${id}?a=1`)
  }
  getActoresPelicula( id:string){
    return this.ejecutarQuery<RespuestaCredits>(`/movie/${id}/credits?a=1`)
  }
  getBuscarPeliculas( texto : string){
    return this.ejecutarQuery<any>(`/search/movie?query=${texto}`)
  }
  getPopulares() {
    return this.ejecutarQuery<RespuestaMDB>('/discover/movie?sort_by=popularity.desc')
  }

  getGeneros() {
    return this.ejecutarQuery<Genre[]>('/genre/movie/list?a=1')
  }
}
