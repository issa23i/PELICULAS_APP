import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SwiperModule } from 'swiper/angular';
import SwiperCore from 'swiper';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  entryComponents: [
    DetalleComponent,
  ],
  declarations: [SlideshowBackdropComponent,
    DetalleComponent],
  exports: [SlideshowBackdropComponent,
    DetalleComponent],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
    SwiperModule,
  ]
})
export class ComponentModule { }
