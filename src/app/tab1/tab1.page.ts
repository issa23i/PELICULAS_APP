import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { IonicSlides } from '@ionic/angular';
import { MovieService } from '../services/movie.service';
import { Pelicula } from '../interfaces/interfaces';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom, IonicSlides]);




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  peliculasRecientes: Pelicula[] = [];

  constructor( private movieService : MovieService) { }


  /** 
  arrayPeliculas: any[] = Array(0);
  arrayCartelera: any[] = Array(0);
  arrayPopular: any[] = Array(0);
  */
  ngOnInit() {

    this.movieService.getFeature()
    .subscribe( (resp) => {
      console.log('Resp',resp);
      this.peliculasRecientes = resp.results;
    });
    /**
    for (let i = 1; i < 21; i++) {
      this.arrayPeliculas.push(`Pelicula ${i}`);
    }
    for (let i = 1; i < 21; i++) {
      this.arrayCartelera.push(`Cartelera ${i}`);
    }
    for (let i = 1; i < 21; i++) {
      this.arrayPopular.push(`Popular ${i}`);
    } */
  }

  



}
