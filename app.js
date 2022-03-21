const section = document.querySelector('section') // select section for append cards
const lives = document.querySelector('.lives') //select title for append count of lives

lives.lastChild.textContent = 7;

let arr =   [{imgSrc:"./img/flower.jpg", name:"flower"},
             {imgSrc:"./img/fractal.jpg", name:"fractal"},
             {imgSrc:"./img/game.jpg", name:"game"},
             {imgSrc:"./img/cat.jpg", name:"cat"},
             {imgSrc:"./img/geccon.jpg", name:"geccon"},
             {imgSrc:"./img/kimono.jpg", name:"kimono"},
             {imgSrc:"./img/kofe.jpg", name:"kofe"},
             {imgSrc:"./img/love.jpg", name:"love"},
             {imgSrc:"./img/flower.jpg", name:"flower"},
             {imgSrc:"./img/fractal.jpg", name:"fractal"},
             {imgSrc:"./img/game.jpg", name:"game"},
             {imgSrc:"./img/cat.jpg", name:"cat"},
             {imgSrc:"./img/geccon.jpg", name:"geccon"},
             {imgSrc:"./img/kimono.jpg", name:"kimono"},
             {imgSrc:"./img/kofe.jpg", name:"kofe"},
             {imgSrc:"./img/love.jpg", name:"love"},
]

class Card {
    constructor(imgSrc,name) {
        this.name = name;
        this.card = document.createElement('div');
        this.face = document.createElement('img');
        this.back = document.createElement('back');
        this.card.classList = 'card';
        this.face.classList = 'face';
        this.back.classList = 'back';
        this.face.src = imgSrc;
        section.appendChild(this.card);
        this.card.appendChild(this.face);
        this.card.appendChild(this.back);
        this.card.setAttribute("name",name);
    }

}


class Board {
    constructor(array){
        this.array = array;
    }
    randomize() {
      this.array.sort(() => Math.random()-0.5);
      return this;

    } 
    generate() {
      this.array.map(item => new Card(item.imgSrc,item.name));
      return this;
    }
}

class Game {
    constructor() {
        this.board = document.querySelector('section');
        this.clickHandler = this.clickHandler.bind(this);
        this.clickCard();
    }
    clickCard() {
        this.board.addEventListener('click',this.clickHandler);
    }
    clickHandler(e) {
        e.target.classList.toggle("toggleCard");
     
    }
}


let board = new Board(arr);
board.randomize().generate();
const game = new Game(board);







