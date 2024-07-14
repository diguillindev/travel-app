/*import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel } from '@ionic/angular/standalone';
import { TraveldbService } from 'src/app/servicios/traveldb.service';
import { ListaSugerida, PlaceDetails } from './modelo/trimapDB';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  destinos: ListaSugerida [] = []


  constructor(
    private servicio: TraveldbService
  ) { }
    
  async ngOnInit() {
    const res: PlaceDetails[] = await this.servicio.getListaSugerida();
    this.destinos = [];
    for (const place of res) {
      this.destinos.push({
        xid: place.xid,
        name: place.name,
        image: place.image,
        country: place.address.country
      });
    }
  }

}*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonThumbnail, IonSearchbar } from '@ionic/angular/standalone';
import { TraveldbService } from 'src/app/servicios/traveldb.service';
import { ListaSugerida } from './modelo/trimapDB';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonLabel, IonThumbnail, IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonSearchbar, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  destinos: ListaSugerida[] = [];
  searchTerm: string = '';
  

  constructor(
    private servicio: TraveldbService
  ) { }

  ngOnInit() {}

  async onSearchChange(event: any) {
    const term = event.target.value;
    if (term && term.trim() !== '') {
      this.destinos = await this.servicio.getListaSugerida(term);
    }
  }
}




