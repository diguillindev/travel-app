// TripMapDB.ts // aqui se a;ade el mapeo 
/*
export interface ListaSugerida {
    xid: string;
    name: string;
    image: string;
    country: string;
  }
  
  export interface PlaceDetails {
    xid: string;
    name: string;
    image: string;
    address: {
      country: string;
    };
  }
  */
  export class ListaSugerida {
    constructor(
      public xid: string,
      public name: string, 
      public image: string, // Imagen vacía ya que no es proporcionada por la API
      public country: string
    ) {}
  }
  
  export class PlaceDetails {

  constructor(
    public image: string,
    public name: string
  ){}

  }

 