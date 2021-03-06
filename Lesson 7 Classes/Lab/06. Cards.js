let result = (function () {
    const validateFace = function (face) {
        return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"].indexOf(face);
    };

    const Suits = { SPADES: '♠', HEARTS: '♥', DIAMONDS: '♦', CLUBS: '♣' };

    const validateSuit = function (suit) {
        return Object.values(Suits).includes(suit);
    };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(value) {
            if (validateFace(value) === -1) {
                throw new Error('invalid face');
            }

            this._face = value;
        }

        get suit() {
            return this._suit;
        }

        set suit(value) {
            if (validateSuit(value) === false) {
                throw new Error('invalid suit');
            }

            this._suit = value;
        }
    }

    return { Suits, Card };
}());

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS);
card.face = 'A';
card.suit = Suits.DIAMONDS;
let card2 = new Card('1', Suits.DIAMONDS);