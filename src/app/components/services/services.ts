import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services implements AfterViewInit {
  // Inyectamos el ID de plataforma para que GSAP no choque con el servidor (SSR)
  private platformId = inject(PLATFORM_ID);

  servicios = [
    {
      titulo: 'Gestión Tributaria',
      descripcion:
        'Declaraciones a la SUNAT, liquidación de impuestos y planeamiento fiscal estratégico.',
      icono: 'bx bx-bar-chart-alt-2',
    },
    {
      titulo: 'Asesoría Laboral',
      descripcion: 'Elaboración de planillas, manejo de T-Registro, PLAME y gestión de AFPs.',
      icono: 'bx bx-network-chart',
    },
    {
      titulo: 'Contabilidad Integral',
      descripcion:
        'Estados financieros precisos, balances de comprobación y libros electrónicos al día.',
      icono: 'bx bx-data',
    },
    {
      titulo: 'Comercio Exterior',
      descripcion: 'Costeo detallado de importaciones, exportaciones y gestión aduanera.',
      icono: 'bx bx-globe',
    },
  ];

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      gsap.registerPlugin(ScrollTrigger);

      // Animación del título
      gsap.from('.header-content', {
        scrollTrigger: {
          trigger: '.services-section',
          start: 'top 70%', // Más abajo para que lo veas bien
        },
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
      });

      // Animación súper visible para las tarjetas
      // Animación súper visible para las tarjetas
      gsap.from('.glass-card', {
        scrollTrigger: {
          trigger: '.cards-grid',
          start: 'top 60%',
          // markers: true  <--- ¡BORRA ESTA LÍNEA!
        },
        y: 200,
        opacity: 0,
        scale: 0.8,
        duration: 1.5,
        stagger: 0.3,
        ease: 'back.out(1.5)',
      });
    }
  }
}
