import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  src = 'https://miro.medium.com/max/1200/1*3ILWYysD5A3wSiEUCAS4oQ.jpeg';
  description = 'Obi Wan Kenobi';

  funcionPrueba(): number {
    let numero: number;
    numero = 3;
    return numero;
  }

  constructor() {}

}
