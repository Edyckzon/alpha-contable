import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {
  
  // Señal para controlar si el menú móvil está abierto o cerrado
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.set(!this.isMenuOpen());
  }

  // Función de scroll (modificada para cerrar el menú después de hacer clic)
  scrollTo(sectionId: string) {
    this.isMenuOpen.set(false); // Cerramos el menú móvil
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}