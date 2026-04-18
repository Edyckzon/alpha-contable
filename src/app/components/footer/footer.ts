import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      // Animación en cascada para las columnas principales del footer
      gsap.from('.footer-col', {
        scrollTrigger: {
          trigger: '.cyber-footer',
          start: 'top 90%', // Se activa apenas el footer asoma en la pantalla
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2, // Retraso de 0.2s entre cada columna
        ease: 'power3.out'
      });

      // Animación sutil para la barra de créditos (OSZ Software)
      gsap.from('.footer-bottom', {
        scrollTrigger: {
          trigger: '.cyber-footer',
          start: 'top 70%',
        },
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6, // Se ejecuta justo después de las columnas
        ease: 'power2.out'
      });
    }
  }
}