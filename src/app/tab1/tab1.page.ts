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
  peliculasPopulares: Pelicula[] = [];
  
  constructor( private movieService : MovieService) { }

  ngOnInit() {

    this.movieService.getFeature()
    .subscribe( (resp) => {
      this.peliculasRecientes = resp.results;
    });
    

    this.movieService.getPopulares()
    .subscribe( (resp) => {
      this.peliculasPopulares = resp.results
    })
  }

  



}
