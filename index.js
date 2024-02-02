// Code your solutions in this file


const cards = ["Charlie", "Samip", "Ali"] 


function writeCards(cards, event){
    const birth =[] 

    for (let x = 0; x < cards.length; x++){
        birth.push(`Thank you, ${cards[x]}, for the wonderful ${event} gift!`)   
    }

   return birth
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    let i = 0;
    while (i < gifts.length) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        i++;
    }

     return gifts;
}

wrapGifts(gifts)

function countDown(number){
    for (let n = number; n >= 0; n--)
    console.log(n)
}

