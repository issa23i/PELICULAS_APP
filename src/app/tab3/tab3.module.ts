import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { ComponentModule } from '../component/component.module';
import { PipesModule } from '../pipes/pipes.module';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    PipesModule,
    ExploreContainerComponentModule,
    Tab3PageRoutingModule,
    ComponentModule,
    SwiperModule
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
