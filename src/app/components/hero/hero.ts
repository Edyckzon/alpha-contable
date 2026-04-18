import { AfterViewInit, Component, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap'; // <-- Importación limpia

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit {
  // Inyectamos el ID de la plataforma para evitar errores en SSR (Server Side Rendering)
  private platformId = inject(PLATFORM_ID);

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  ngAfterViewInit() {
    // Solo ejecutamos animaciones si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      
      // Animación del título (Efecto reveal)
      gsap.from('.title', {
        duration: 1.5,
        y: 80,
        opacity: 0,
        ease: 'power4.out',
        skewY: 5,
        stagger: 0.3,
      });

      // Animación del subtítulo
      gsap.from('.subtitle', {
        duration: 1.2,
        opacity: 0,
        y: 30,
        delay: 0.5,
        ease: 'power3.out'
      });

      // Animación de los botones
      gsap.from('.cta-group', {
        duration: 1,
        opacity: 0,
        y: 20,
        delay: 1,
        ease: 'back.out(1.7)'
      });
    }
  }
}