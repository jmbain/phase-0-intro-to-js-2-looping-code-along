/* 
Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        debugger;
    }
    return gifts;
}

wrapGifts(gifts);
*/

// Starting point for building writeCards() function
const fullCards = []
function writeCards(cards,eventName) {
    for (let i = 0; i < cards.length; i++) {
        fullCards.push(`Thank you, ${cards[i]}, for the wonderful ${eventName} gift!`);
        debugger;
    }
    return fullCards;
}
// writeCards(["Josh", "Jon"], "birthday");
//While Loop notes...

//Starting point for building countdown

function countDown(countNum) {
    while (countNum >= 0) {
        console.log(countNum--);
    }
}


countDown(5)