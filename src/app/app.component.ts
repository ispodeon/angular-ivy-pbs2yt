import { Component, VERSION } from '@angular/core';
import { Card } from './interfaces/card';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  // data = { name: 'help', id: 1 };
  color: string = '';

  cards: Card[] = [
    { color: 'Blue' },
    { color: 'Black' },
    { color: 'Red' },
    { color: 'Green' },
  ];

  constructor() {}

  onClick(card: Card) {
    this.color = card.color;
    console.log(card);
  }
}
