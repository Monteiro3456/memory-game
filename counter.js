const cardArray = [
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
      name:'cheeseburger',
      img:'images/cheeseburger.png'
    },
    {
      name:'hotdog',
      img:'images/hotdog.png'
    },
    {
      name:'milkshake',
      img:'images/milkshake.png'
    },
    {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
    {
      name:'pizza',
      img:'images/pizza.png'
    },
    {
      name:'fries',
      img:'images/fries.png'
    },
    {
      name:'cheeseburger',
      img:'images/cheeseburger.png'
    },
    {
      name:'hotdog',
      img:'images/hotdog.png'
    },
    {
      name:'milkshake',
      img:'images/milkshake.png'
    },
    {
      name:'ice-cream',
      img:'images/ice-cream.png'
    },
    {
      name:'pizza',
      img:'images/pizza.png'
    }
   


];



cardArray.sort(() => 0.5 - Math.random());

// console.log(cardArray);

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.getElementById('result');
const resultReactionCnt = document.getElementById('result-reaction-cnt');
const resultReactionpara = document.getElementById('result-reaction');




const cardsChosen = [];
const cardsChosenId = [];
let score = 0;

function createBoard(){

for(let i = 0; i < cardArray.length; i++){
  const card = document.createElement('img');
  card.setAttribute('src','./images/blank.png');
  card.setAttribute('id',i);
  card.addEventListener('click',flipcard);
  gridDisplay.appendChild(card);
  
}

// console.log(cardArray);
}

// setting up the board with blank images
createBoard();

// function to set back to default

function resettoBlank(){
  document.getElementById(cardsChosenId[0]).setAttribute('src','./images/blank.png');
  document.getElementById(cardsChosenId[1]).setAttribute('src','./images/blank.png');
  
}


function checkMatch(){

if (cardsChosen[0] == cardsChosen[1]){
  score++;
  resultDisplay.textContent = score;
  resultReactionCnt.classList.remove('non-active');
  resultReactionCnt.classList.add('active');
  resultReactionpara.textContent = 'Yay you found a match';
  resultReactionCnt.style.backgroundColor = 'green';
  // console.log('matched');
}
else {
  resultReactionCnt.classList.remove('non-active');
  resultReactionCnt.classList.add('active');
  resultReactionpara.textContent = 'Try Again';
  
  resultReactionCnt.style.backgroundColor = 'red';
  // console.log(resultReactionCnt);


}



resettoBlank();

for (let i =0; i < 2; i++){
  cardsChosen.pop();
  cardsChosenId.pop();
}

setTimeout(function () {
  resultReactionCnt.classList.add('non-active');
},1000);

}


function flipcard(){
// console.log('clicked');
const cardId = this.getAttribute('id');
// console.log(cardId);


 cardsChosen.push(cardArray[cardId].name);
 cardsChosenId.push(cardId);
 this.setAttribute('src',cardArray[cardId].img);
//  console.log(cardArray[cardId].name);
if(cardsChosen.length == 2){
  setTimeout(checkMatch,1000)

}


}












