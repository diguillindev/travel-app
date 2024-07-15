import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonThumbnail, IonSearchbar, IonImg, IonButton, IonButtons, IonModal, IonInput } from '@ionic/angular/standalone';
import { TraveldbService } from 'src/app/servicios/traveldb.service';
import { ListaSugerida } from './modelo/trimapDB';
import { addIcons } from 'ionicons';
import {addCircleOutline, airplaneOutline} from 'ionicons/icons'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonInput, IonModal, IonIcon, IonButtons, IonButton, IonImg, IonLabel, IonThumbnail, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {



  destinos: ListaSugerida[] = [];
  favoritos: ListaSugerida[] = [];
  searchTerm: string = '';
  isModalPriceOpen: boolean = false;
  precioAprox: number = 0
  

  constructor(
    private servicio: TraveldbService
  ) { 
    addIcons({
      addCircleOutline,
      airplaneOutline
    })
  }

  ngOnInit() {}

  async onSearchChange(event: any) {
    const term = event.target.value;
    if (term && term.trim() !== '') {
      this.destinos = await this.servicio.getListaSugerida(term);
    }
  }

  agregarFavoritos(destino: ListaSugerida) {
    this.favoritos.push(destino)
}

  setModalPriceOpen(abierto:boolean){
    this.isModalPriceOpen = abierto
  }

  guardarPrecio() {
    throw new Error('Method not implemented.');
    }

}
