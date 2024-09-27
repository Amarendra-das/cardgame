
let player = {
    name: "per",
    chips: 145
}
let firstcard = getRandomCards();
let secondcard = getRandomCards();
let cards = [firstcard,secondcard] //array- ordered list of item 
let sum = firstcard + secondcard;
let hasBlackjack = false
let isAlive = true;
let message = "";



let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
console.log(messageEl)


function getRandomCards(){
          let randomNumber= Math.floor(Math.random()*13) +1; 
          if(randomNumber > 10){
            return 10
          }else if(randomNumber === 1){
            return 11
          }else{
            return randomNumber
          }
}


function startGame(){
    renderGame()
}


function renderGame(){
    //render out firstcard and secondcard 
    cardsEl.textContent = "Cards:" 
    for(let i = 0;i<cards.length;i++){
        cardsEl.textContent += cards[i] +" ";
    }
    //render out all the cards we have
    sumEl.textContent = "Sum:" + sum;
    if (sum < 21){
        message="Do you want to draw a card?";
    }else if (sum ===21){
        message="You've got Blackjack!";
        hasBlackjack = true
    }else {
        message="You're out of the game";
        isAlive= false;
    }
    
    messageEl.textContent = message;
    
}

function newCards(){
    if(isAlive===true && hasBlackjack===false){

    let card = getRandomCards();
    sum += card 
    cards.push(card)
    console.log(cards)
    renderGame()
    }
}
