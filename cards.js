// Card class

// Suit, rank

// Deck class

// cards (array), shuffle, deal, reset

class Card {
	constructor(rank, suit){
		this.suit = suit
		this.rank = rank
	}

	to_string(){
		return `${this.rank} of ${this.suit}`
	}
}

function Deck(){
	let cards = []

	this.shuffle = () => {
		for(let i=0; i<cards.length; i++){
			let swap = Math.floor(Math.random()*cards.length)
			let temp = cards[swap]
			cards[swap] = cards[i]
			cards[i] = temp
		}
	}

	this.deal = () => {
		return cards.pop()
	}

	this.reset = () => {
		cards = []

		let suits = ["hearts", "clubs", "diamonds", "spades"]
		let ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]

		for(let suit of suits){
			for(let rank of ranks){
				cards.push(new Card(rank, suit))
			}
		}

		this.shuffle()
	}

	this.reset()
}

let my_deck = new Deck()
my_deck.shuffle()

console.log(my_deck.deal().to_string())
console.log(my_deck.deal().to_string())
console.log(my_deck.deal().to_string())

console.log(my_deck.cards)