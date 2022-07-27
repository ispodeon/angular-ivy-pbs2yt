import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../interfaces/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() card: Card;
  @Output() cardClicked = new EventEmitter<Card>();

  constructor() {}

  ngOnInit() {}

  onClick(){
    this.cardClicked.emit(this.card);
  }
}
