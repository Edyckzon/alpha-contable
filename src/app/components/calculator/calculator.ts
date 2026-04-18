import { Component, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.html',
  styleUrl: './calculator.scss'
})
export class Calculator implements AfterViewInit {
  private platformId = inject(PLATFORM_ID);
  
  ingresosActuales: number = 500000;
  ingresosMostrados: string = '500,000';

  // Objeto virtual que GSAP va a animar
  contadorAhorro = { valor: 0 };

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Disparamos el cálculo inicial al cargar
      this.ejecutarAnimacionGsap(this.ingresosActuales);
    }
  }

  calcularAhorro(evento: any) {
    const valor = parseFloat(evento.target.value);
    this.ingresosActuales = valor;
    // Formateamos para que se vea bonito (ej: 1,500,000)
    this.ingresosMostrados = valor.toLocaleString('es-PE');
    
    this.ejecutarAnimacionGsap(valor);
  }

  ejecutarAnimacionGsap(ingresos: number) {
    if (!isPlatformBrowser(this.platformId)) return;

    // Asumimos un ahorro fiscal agresivo del 15% como gancho de ventas
    const ahorroEstimado = ingresos * 0.15; 
    const counterElement = document.getElementById('ahorro-counter');

    if (counterElement) {
      // GSAP anima el objeto "contadorAhorro" desde su valor actual hasta el nuevo
      gsap.to(this.contadorAhorro, {
        valor: ahorroEstimado,
        duration: 1.2, // Dura un poco más de 1 segundo para crear suspenso
        ease: 'power3.out',
        onUpdate: () => {
          // Cada microsegundo, actualiza el HTML con el número formateado
          counterElement.innerText = Math.floor(this.contadorAhorro.valor).toLocaleString('es-PE');
        }
      });
    }
  }
}