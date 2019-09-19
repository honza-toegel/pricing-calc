import { Component } from '@angular/core';
import { Card, ControlType, CardRadio } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricing-calc';
  modelMap = {"group1": "horovice"}
  price:Number = 10000;
  cards = [
    new CardRadio(1, "Chatea le papoo france", "assets/chateau.jpg", null, ControlType.RadioBox, "group1", this.modelMap, "papoo"),
    new CardRadio(11, "Chateau Horovice", "assets/horovice.jpeg",    null, ControlType.RadioBox, "group1", this.modelMap, "horovice"),
    new CardRadio(2, "Chateau de la Chatou", "assets/france.jpg",         null, ControlType.RadioBox, "group1", this.modelMap, "france"),
    new Card(3, "Sweet desert", "assets/cake1.jpeg",                 null, ControlType.CheckBox, "desert", this.modelMap),
    new Card(4, "Horses", "assets/sprezeni.jpg",                     null, ControlType.CheckBox, "horses", this.modelMap),
    new Card(6, "Zidlicky", "assets/zidlicky.jpeg",                  null, ControlType.CheckBox, "chairs", this.modelMap),
    new CardRadio(5, "Chateau Horovice", "assets/horovice.jpeg",          null, ControlType.RadioBox, "group2", this.modelMap, "horovice"),
    new CardRadio(1, "Chatea le papoo france", "assets/chateau.jpg",      null, ControlType.RadioBox, "group2", this.modelMap, "chateu"),
    new Card(6, "Kvetinkyy", "assets/marriage-static.jpeg", "assets/marriage-play.gif"),
    new Card(7, "Popelka", "assets/popelka-static.jpeg", "assets/popelka.gif"),
    new Card(8, "Wedding in garden", "assets/france.jpg"),
    new Card(9, "Sweet desert", "assets/cake1.jpeg"),
    new Card(10, "Horses", "assets/sprezeni.jpg"),
    new Card(12, "Zidlicky", "assets/zidlicky.jpeg"),
    new Card(8, "Wedding in garden", "assets/france.jpg"),
    new Card(9, "Sweet desert", "assets/cake1.jpeg"),
    new Card(10, "Horses", "assets/sprezeni.jpg"),
    new Card(12, "Zidlicky", "assets/zidlicky.jpeg"),
  ];

  myRadio = {"group1": "val1"}
  onChangeCard(event) {
    console.log(this.modelMap)
  }

  onInit() {
    this.price = 10000;
  }
}
