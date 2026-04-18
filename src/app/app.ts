import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar'; // <-- Importar
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { Contact } from './components/contact/contact';
import { Team } from './components/team/team';
import { Footer } from './components/footer/footer';
import { Clients } from './components/clients/clients';
import { Calculator } from './components/calculator/calculator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, Services, Team, Footer, Clients, Calculator, Contact], // <-- Agregar
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('alpha-contable');
}