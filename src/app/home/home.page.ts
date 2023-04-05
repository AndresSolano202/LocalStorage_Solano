import { Component } from '@angular/core'; // Importa el componente Component de Angular
import { IonicModule } from '@ionic/angular'; // Importa el módulo IonicModule de Ionic
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importa los módulos FormsModule y ReactiveFormsModule de Angular
import { LoaderService } from '../Services/loader.service'; // Importa el servicio LoaderService del archivo loader.service.ts en la carpeta Services


@Component({
  selector: 'app-home', // Define el nombre de la etiqueta HTML que se utilizará para insertar el componente
  templateUrl: 'home.page.html', // Define la ubicación del archivo de plantilla HTML para el componente
  styleUrls: ['home.page.scss'], // Define la ubicación del archivo de hoja de estilo CSS para el componente
  standalone: true, // Indica que el componente debe cargarse por sí solo
  imports: [IonicModule,FormsModule,ReactiveFormsModule], // Importa los módulos que se utilizarán en el componente
})
export class HomePage {

  receivetext:string; // Declara una variable de cadena llamada "receivetext"
  recovertext:string; // Declara una variable de cadena llamada "recovertext"
  constructor(private loader:LoaderService) {
    this.receivetext=""; // Inicializa "receivetext" como una cadena vacía
    this.recovertext=""; // Inicializa "recovertext" como una cadena vacía
  }

   // Método que se ejecuta cuando la página se carga
  async ngOnInit() { 
    // Carga el valor de la clave "test" del almacenamiento local y lo asigna a "recovertext"
    this.recovertext = await this.loader.load("test");
  }

  // Método que se ejecuta al hacer clic en el botón "Print"


  async print(){


    if(this.receivetext){
      // Guarda el valor de "receivetext" en el almacenamiento local con la clave "test" utilizando el método save del servicio LoaderService
      this.loader.save("test",this.receivetext); 
      // Asigna el valor de "receivetext" a "recovertext"
      this.recovertext = this.receivetext;
      // Vacía el valor de "receivetext"
      this.receivetext="";
    }
  }

}
