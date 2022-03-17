const section = document.querySelector('section') // select section for append cards
const lives = document.querySelector('.lives') //select title for append count of lives

lives.lastChild.textContent = 7;

class Card {
    constructor(imgSrc,name) {
        this.imgSrc = imgSrc;
        this.name = name;
    }
    cardGenerate() {
        this.card = document.createElement('div');
        this.face = document.createElement('img');
        this.back = document.createElement('back');
        this.card.classList = 'card';
        this.face.classList = 'face';
        this.back.classList = 'back';
    }
}

class generateBoard {
    constructor(array){
        this.array = array;
    }
    randomize() {
        this.array.sort(() => Math.random()-0.5);
    }  
    generate() {
        this.array.map(item => new Card(item.src, item.name))
    }
}

class Board {
    constructor(cards) {
        this.cards = cards;
    }
}


