import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SwiperModule } from 'swiper/angular';
import SwiperCore from 'swiper';
import { DetalleComponent } from './detalle/detalle.component';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';



@NgModule({
  entryComponents: [
    DetalleComponent,
  ],
  declarations: [
    SlideshowBackdropComponent,
    DetalleComponent,
    SlideshowPosterComponent
  ],
  exports: [
    SlideshowBackdropComponent,
    DetalleComponent,
    SlideshowPosterComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    SwiperModule,
  ]
})
export class ComponentModule { }
