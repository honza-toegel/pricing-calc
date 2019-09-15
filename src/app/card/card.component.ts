import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Card } from '../card';
import { Url } from 'url';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() imgUrl: Url;
  @Input() card: Card;

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

}
