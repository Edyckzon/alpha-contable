import { Component } from '@angular/core';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.html',
  styleUrl: './team.scss'
})
export class Team {
  equipo = [
    {
      nombre: 'Carlos Mendoza',
      cargo: 'CEO & Estratega Fiscal',
      descripcion: 'Especialista en auditoría financiera con más de 15 años optimizando la carga tributaria corporativa.',
      imagen: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256' // Placeholder pro
    },
    {
      nombre: 'Ana Velasco',
      cargo: 'Líder de Auditoría',
      descripcion: 'Experta en normas NIIF y peritaje contable. Ojos de lince para detectar anomalías financieras.',
      imagen: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256'
    },
    {
      nombre: 'Luis Aranda',
      cargo: 'Director Legal Tributario',
      descripcion: 'Defensa legal y representación ante la SUNAT. El escudo legal que toda empresa necesita.',
      imagen: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256'
    }
  ];
}