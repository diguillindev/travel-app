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
import { ListaSugerida } from '../pagina/inicio/modelo/trimapDB';

@Injectable({
  providedIn: 'root'
})
export class TraveldbService {
  baseUrl: string = "http://api.opentripmap.com/0.1/en/places/";

  constructor() { }

  async getListaSugerida(term: string): Promise<ListaSugerida[]> {
    const urls = [
      `${this.baseUrl}xid/R4682064?apikey=5ae2e3f221c38a28845f05b6e29ecad0a7ba6e94d6e61ff847135f31`,
      // Agrega más URLs según sea necesario
      `${this.baseUrl}xid/W286786280?apikey=5ae2e3f221c38a28845f05b6e29ecad0a7ba6e94d6e61ff847135f31`,

      `${this.baseUrl}xid/N2706089579?apikey=5ae2e3f221c38a28845f05b6e29ecad0a7ba6e94d6e61ff847135f31`,

      `${this.baseUrl}xid/Q2901485?apikey=5ae2e3f221c38a28845f05b6e29ecad0a7ba6e94d6e61ff847135f31`,

      `${this.baseUrl}xid/Q372040?apikey=5ae2e3f221c38a28845f05b6e29ecad0a7ba6e94d6e61ff847135f31`
      
    
    
    
    ];

    try {
      const responses = await Promise.all(urls.map(url => fetch(url)));

      const data = await Promise.all(
        responses.map(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
      );

      //  utilizar map seguido de concat para aplanar el arreglo, lo cual es más compatible con las configuraciones de TypeScript más antiguas.
      const items = data
        .map((item: any) => Array.isArray(item.features) ? item.features : [item])
        .reduce((acc, val) => acc.concat(val), []);


      return items.map((item: any) => new ListaSugerida(
        item.xid,
        item.name,
        item.preview?.source || item.image || '',
        item.address?.country || ''
      ));

    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
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


