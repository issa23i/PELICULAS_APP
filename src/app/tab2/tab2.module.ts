import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ComponentModule } from '../component/component.module';
import { PipesModule } from '../pipes/pipes.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    ComponentModule,
    PipesModule,
    SwiperModule
  ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
