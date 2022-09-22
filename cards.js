const BASE_URL = 'http://deckofcardsapi.com/api/deck';

newDeck = axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
newDeck
    .then(data => {
        const deckID = data.data.deck_id;
        return axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
    })
    .then(data => {
        console.log(data.data.cards[0].value, data.data.cards[0].suit);
    })
    


let cardOne = null;
let cardTwo = null;
newDeck2 = axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
newDeck2
    .then(data => {
        const deckID = data.data.deck_id;
        req = axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
        return req;
    })
    .then(data => {
        const deckID = data.data.deck_id;
        cardOne = data.data.cards[0];
        req = axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
        return req;
    })
    .then(data => {
        cardTwo = data.data.cards[0];
        cards = [cardOne, cardTwo];
        
        cards.forEach(card => {
            console.log(card.value, card.suit);
        });
    });

let deckID = null;
let button = $('button');

drawDeck = axios.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
drawDeck
    .then(data => {
        deckID = data.data.deck_id;
    })

button.on('click', () => {
    req = axios.get(`${BASE_URL}/${deckID}/draw/?count=1`);
    req.then(data => {
        let cardImg = data.data.cards[0].image;

        $('#card-container').append(
            $('<img>', {src: cardImg})
        );

        if(data.data.remaining === 0){
            button.remove();
        }
    })

})


