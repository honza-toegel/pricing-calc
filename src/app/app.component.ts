import { Component } from '@angular/core';
import { Card, ControlType, CardRadio } from './card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  modelMap = {"place": "horovice", "desert":false, "chairs":true, "horses":true}
  
  /* Calculated price */
  price:number = 0;

  cards = [
    new CardRadio(1, "Chatea le papoo france", "assets/chateau.jpg", null, ControlType.RadioBox, "place", this.modelMap, true, "papoo"),
    new CardRadio(11, "Chateau Horovice", "assets/horovice.jpeg",    null, ControlType.RadioBox, "place", this.modelMap, true, "horovice"),
    new CardRadio(2, "Chateau de la Chatou", "assets/france.jpg",         null, ControlType.RadioBox, "place", this.modelMap, true, "france"),
    new Card(3, "Sweet desert", "assets/cake1.jpeg",                 null, ControlType.CheckBox, "desert", this.modelMap),
    new Card(4, "Horses", "assets/sprezeni.jpg",                     null, ControlType.CheckBox, "horses", this.modelMap),
    new Card(6, "Zidlicky", "assets/zidlicky.jpeg",                  null, ControlType.CheckBox, "chairs", this.modelMap),
    new CardRadio(5, "Chateau Horovice", "assets/horovice.jpeg",          null, ControlType.RadioBox, "group2", this.modelMap, true, "horovice"),
    new CardRadio(1, "Chatea le papoo france", "assets/chateau.jpg",      null, ControlType.RadioBox, "group2", this.modelMap, true, "chateu"),
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

  ngOnInit() {
    this.recalculatePrice()
  }

  onChangeCard(event) {
    console.log(this.modelMap)
    this.recalculatePrice()
  }

  private recalculatePrice() {
    switch (this.modelMap.place) {
      case "papoo":
        this.price = 5000;
        break;
      case "horovice":
        this.price = 3000;
        break;
      case "france":
        this.price = 2000;
        break;
    }
    if (this.modelMap.desert)
      this.price += 2000; 
    if (this.modelMap.place)
      this.price += 1000; 
    if (this.modelMap.chairs)
      this.price += 1500;
    if (this.modelMap.horses)
      this.price += 2000;
  }


}
