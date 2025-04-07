import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],  // Incluir CommonModule en imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokeguide';
  generaciones = Array.from({ length: 9 }, (_, i) => {
    const numero = i + 1;
    return {
      numero,
      imagen: `assets/img/${numero}gen.jpg`
    };
  });

  selectedGeneracion: number = 0;
  modalVisible: boolean = false;

  seleccionarGeneracion(generacion: number) {
    this.selectedGeneracion = generacion;
  }
}
