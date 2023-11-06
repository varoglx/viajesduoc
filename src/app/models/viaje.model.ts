export class Viaje {
    constructor(
      public id: string,
      public conductor: string,
      public origen: string,
      public destino: string,
      public fecha: Date,
      public costo: number
    ) {}
  }
  