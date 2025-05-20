import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ParesPipe } from './pares.pipe';




@NgModule({
  declarations: [
    ParesPipe
  ],
  exports:[
    ImagenPipe,
    ParesPipe
  ],
  imports: [
    CommonModule,ImagenPipe
  ]
})
export class PipesModule { }
