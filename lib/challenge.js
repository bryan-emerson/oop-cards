console.log("SUP BRO")

//  Define a Card class with the following properties:

//     - suit (hearts, spades, clubs, diamonds)
//     - rank (Ace, 2, 3, 4, .. Jack, King, Queen)
//     - score (1, 2, 3, 4, ... 11, 12, 13)

class Card {
   constructor(suit, rank, score) {
     this.suit = suit;
     this.rank = rank;
     this.score = score;
   }
 }

  // Define a Deck class with the following properties and methods:

  //   - length (the number of cards - should start at 52)
  //   - cards (an array of cards in the deck)
  //   - draw: return a random card from the cards array

class Deck {
  constructor(cards) {
    this.length = cards.length
    this.cards = cards
  }
  draw() {
    let randomCard = Math.floor(Math.random()*51);
    //console.log(randomCard)
    let newDraw = this.cards[randomCard];
    console.log(newDraw);
  }
  //make a method which checks count of this.length to mutate the length of array(if you wanna get fancy)
}


// When you create an instance of your Deck class (i.e. in your constructor),
// fill in the cards array with 52 instances of your Card class. You can do
// this with a nested for loop - first loop through an array of all possible
// suits, then loop through an array of all possible ranks. Inside your inner
// loop, create an instance of your Card class and push it into the Deck's cards
// array.

// Instantiate an instance of your Deck and start drawing random cards!


//wrap all of these arrays and the loops inside a fucntion so that they can all become one method inside the object.
let fullDeck = [];
let suitsArr =[ "Diamonds", "Clubs", "Hearts", "Spades"];
let rankArr = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
let scoreArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]


for (let i = 0; i < suitsArr.length; i ++) {
  for (let j = 0; j < rankArr.length; j ++) {
    let card = new Card(suitsArr[i], rankArr[j], scoreArr[j]);
    fullDeck.push(card);
  }
}




let newDeck = new Deck(fullDeck);//wrap the loops in an array and pass the evaluation into this

console.log(fullDeck);
console.log(newDeck.draw());
