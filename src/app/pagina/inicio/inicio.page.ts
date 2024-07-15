import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon, IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonList, IonLabel, IonThumbnail, IonSearchbar, IonImg, IonButton, IonButtons, IonModal, IonInput } from '@ionic/angular/standalone';
import { TraveldbService } from 'src/app/servicios/traveldb.service';
import { ListaSugerida } from './modelo/trimapDB';
import { addIcons } from 'ionicons';
import { addCircleOutline, airplaneOutline } from 'ionicons/icons'

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
  destinoSeleccionado: ListaSugerida | undefined  = undefined 
  searchTerm: string = '';
  isModalPriceOpen: boolean = false;
  precioAproxStr: string = ""


  constructor(
    private servicio: TraveldbService
  ) {
    addIcons({
      addCircleOutline,
      airplaneOutline
    })
  }

  ngOnInit() { }

  /* async onSearchChange(event: any) {
     const term = event.target.value;
     if (term && term.trim() !== '') {
       this.destinos = await this.servicio.getListaSugerida(term);  
     }
     
   }*/
  //se verifica si el término de búsqueda está vacío (term === ''). Si es así, la lista de destinos (this.destinos) se establece como un arreglo vacío, lo que efectivamente limpia la lista. Si el término no está vacío, se llama al servicio para obtener la lista de sugerencias como de costumbre.

  async onSearchChange(event: any) {
    const term = event.target.value;

    if (term === '') {
      this.destinos = [];  // Limpiar la lista de destinos cuando el término esté vacío
    } else {
      this.destinos = await this.servicio.getListaSugerida(term);
    }
  }






  agregarFavoritos(destino: ListaSugerida) {
    this.favoritos.push(destino)
  }

  setModalPriceOpen(abierto: boolean) {
    this.isModalPriceOpen = abierto
  }


  abrirModalPrecio(destinoSeleccionado: ListaSugerida) {
    this.setModalPriceOpen(true)
    this.destinoSeleccionado = destinoSeleccionado
  }

  guardarPrecio() {
    if (this.destinoSeleccionado != undefined) {
      this.destinoSeleccionado.precioAproxStr = (this.precioAproxStr) 
    } 
    this.setModalPriceOpen(false)
  }

}
