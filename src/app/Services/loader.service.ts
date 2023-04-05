//Aquí se importan las clases Storage de @ionic/storage-angular y Injectable de @angular/core.
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';

@Injectable({ // La anotación @Injectable indica que este servicio se proporcionará en la raíz de la aplicación y se inyectará automáticamente donde sea necesario
  providedIn: 'root',
})
export class LoaderService { // Define la clase LoaderService, que implementa un servicio que maneja el almacenamiento local


  constructor(private storage:Storage) { // Constructor que toma una dependencia de Storage como parámetro

    this.initstorage(); // Llama al método initstorage() para inicializar el almacenamiento
  }

  // Método privado que inicializa el almacenamiento local

  private async initstorage(){
      await this.storage.create(); // Espera a que se cree el almacenamiento, y lo crea si no existe
  }

  // Método público que guarda un valor en el almacenamiento local

  public save(key:string, value:string){
    return this.storage.set(key,value) // Devuelve la promesa devuelta por set()
  }

  // Método público asincrónico que carga un valor del almacenamiento local

  public async load(key:string):Promise<string>{
    return new Promise<string>((resolve,reject)=>{ // Devuelve una promesa que se resuelve o rechaza cuando se complete
      this.storage.get(key).then((text)=>{ // Llama a get() de Storage y espera a que se resuelva con then()
        resolve(text); // Resuelve la promesa con el valor cargado
      })
    })
  }
}
