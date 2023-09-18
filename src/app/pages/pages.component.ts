import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
})
export class PagesComponent {
  showFiller = false;

  links = [
    {
      name: 'Tarjetas',
      path: '/tarjeta',
    },
    {
      name: 'Detalle',
      path: '/conductor/:id',
    },
  ];
}
