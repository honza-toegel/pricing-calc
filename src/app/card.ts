import { Url } from 'url';

export class Card {
    constructor(
        public id: number,
        public name: string, 
        public imgUrl: Url,
        public gifUrl: Url = null) { }
}