import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonContent, IonGrid, IonRow, IonCard, IonCol } from "@ionic/angular/standalone";
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
  standalone : false

})
export class SlideshowBackdropComponent  implements OnInit {

   @Input() peliculas: Pelicula[] = [];

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

async verDetalle( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }


}
