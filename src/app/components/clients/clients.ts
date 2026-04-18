import { Component, AfterViewInit, ElementRef, ViewChild, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-clients',
  imports: [],
  templateUrl: './clients.html',
  styleUrl: './clients.scss'
})
export class Clients implements AfterViewInit {
  @ViewChild('sliderTrack') sliderTrack!: ElementRef;
  private platformId = inject(PLATFORM_ID);

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const track = this.sliderTrack.nativeElement;
      
      // Animación infinita lineal (como un teletipo)
      gsap.to(track, {
        xPercent: -50, // Se mueve exactamente la mitad (porque duplicamos los items)
        ease: "none",  // Movimiento constante, sin acelerar ni frenar
        duration: 20,  // Tiempo que tarda en dar la vuelta (ajústalo a tu gusto)
        repeat: -1     // Bucle infinito
      });
    }
  }
}
