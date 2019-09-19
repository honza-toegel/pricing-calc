import { Url } from 'url';

export enum ControlType {
    RadioBox,
    CheckBox
}

export class Card {
    constructor(
        public id: number,
        public name: string, 
        public imgUrl: Url,
        public gifUrl: Url = null,
        public controlType: ControlType = null,
        public controlName: String = "",
        public controlModel = null,
        public displayWhen: Boolean = true) 
        { }
}

export class CardRadio extends Card {
    constructor(
        public id: number,
        public name: string, 
        public imgUrl: Url,
        public gifUrl: Url = null,
        public controlType: ControlType = null,
        public controlName: String = "",
        public controlModel = null,
        public displayWhen: Boolean = true,
        public radioValue = "") 
        { 
            super(id,name,imgUrl, gifUrl, controlType, controlName, controlModel, displayWhen) 
        }
}