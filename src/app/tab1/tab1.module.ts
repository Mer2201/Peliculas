import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';
import { ComponentsModule } from '../components/components.module';






@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SwiperModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    PipesModule,
    ComponentsModule

  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
