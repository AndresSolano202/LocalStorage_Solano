export class Frase{ //Clase que representa una frase con una clave y un valor asociados.
  key:string; //Clave asociada a la frase.
  value:string; //Valor asociado a la frase.


  constructor(key:string, value:string){ //Crea una instancia de Frase
    //@param key Clave asociada a la frase.
    this.key=key; 
    //@param value Valor asociado a la frase.
    this.value=value;
  }

  public getkey() : string { //Retorna la clave asociada a la frase.
    return this.key
  }

}
