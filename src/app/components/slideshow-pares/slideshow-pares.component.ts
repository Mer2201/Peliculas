import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { DetalleComponent } from '../detalle/detalle.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
  standalone:false
})
export class SlideshowParesComponent  implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {

  }


  onClick() {
    this.cargarMas.emit();
  }

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



