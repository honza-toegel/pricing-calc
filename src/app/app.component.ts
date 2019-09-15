import { Component } from '@angular/core';
import { Card } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricing-calc';
  cards = [
    new Card(1, "Chatea in france", "assets/chateau.jpg"),
    new Card(2, "Wedding in garden", "assets/france.jpg"),
    new Card(3, "Sweet desert", "assets/cake1.jpeg"),
    new Card(4, "Horses", "assets/sprezeni.jpg"),
    new Card(5, "Chateau Horovice", "assets/horovice.jpeg"),
    new Card(6, "Zidlicky", "assets/zidlicky.jpeg"),
    new Card(6, "Kvetinkyy", "assets/marriage-static.jpeg", "assets/marriage-play.gif"),
    new Card(7, "Popelka", "assets/popelka-static.jpeg", "assets/popelka.gif"),
    new Card(8, "Wedding in garden", "assets/france.jpg"),
    new Card(9, "Sweet desert", "assets/cake1.jpeg"),
    new Card(10, "Horses", "assets/sprezeni.jpg"),
    new Card(11, "Chateau Horovice", "assets/horovice.jpeg"),
    new Card(12, "Zidlicky", "assets/zidlicky.jpeg"),

  ];
}
