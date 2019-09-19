import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card, ControlType } from '../card';
import { Url } from 'url';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  ControlType = ControlType;

  @Input() imgUrl: Url;
  @Input() card: Card;

  @Output()
  changeCard = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.imgUrl = this.card.imgUrl;
  }

  mouseEnter(div: string) {
    if (this.card.gifUrl) {
      this.imgUrl = this.card.gifUrl;
    }
  }

  mouseLeave(div: string) {
    if (this.card.gifUrl) {
      this.imgUrl = this.card.imgUrl;
    }
  }

  onChange(event) {
    this.changeCard.emit(event)
  }

}
