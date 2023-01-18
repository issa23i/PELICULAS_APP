import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SwiperModule } from 'swiper/angular';
import SwiperCore from 'swiper';



@NgModule({
  declarations: [SlideshowBackdropComponent],
  exports: [SlideshowBackdropComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    SwiperModule
  ]
})
export class ComponentModule { }
