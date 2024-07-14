/*import { Injectable } from '@angular/core';
import { ListaSugerida } from '../pagina/inicio/modelo/trimapDB';

@Injectable({
  providedIn: 'root'
})
export class TraveldbService {

  baseUrl:string = "http://api.opentripmap.com/0.1/ru/places/"
  
  constructor() { }

  async getListaSugerida() :Promise<ListaSugerida> {
    const url = `${this.baseUrl}autosuggest&apikey=5ae2e3f221c38a28845f05b6e29ecad0a7ba6e94d6e61ff847135f31 `
    const respuesta = await fetch (url)
    const data = await respuesta.json()
    return data
  }
    
 
}
*/
import { Injectable } from '@angular/core';
import { ListaSugerida} from '../pagina/inicio/modelo/trimapDB';

@Injectable({
  providedIn: 'root'
})
export class TraveldbService {
  baseUrl: string = "http://api.opentripmap.com/0.1/en/places/";

  constructor() { }

  async getListaSugerida(searchTerm: string): Promise<ListaSugerida[]> {
    const url = `${this.baseUrl}autosuggest?apikey=5ae2e3f221c38a28845f05b6e29ecad0a7ba6e94d6e61ff847135f31&name=city&radius=6371000&lon=-72.1033483467754&lat=-36.60669255`;
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await respuesta.json();
      return data.features.map((item: any) => new ListaSugerida(
        item.properties.xid,
        item.properties.name,
        "", // No hay imagen proporcionada por la API autosuggest
        item.properties.country
      ));
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  /*funcion para imagen busqueda
  async getPlaceDetails(searchTerm:string): Promise<PlaceDetails[]> {
    const url = `${this.baseUrl}xid?apikey=5ae2e3f221c38a28845f05b6e29ecad0a7ba6e94d6e61ff847135f31&name=city&xid=Q372040image=https://commons.wikimedia.org/wiki/File:Gnessinmoscow.jpg`;
    try {
      const respuesta = await fetch(url);
      if (!respuesta.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await respuesta.json();
      return data.features.map((item: any) => new PlaceDetails(
        item.properties.name,
        item.properties.image
      ));
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  }

  
  */

}
