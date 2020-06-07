function solve() {
   const imgs = Array.from(document.getElementsByTagName('img'));
   imgs.forEach((img) => img.addEventListener('click', showCard));

   function showCard() {
      let card = this;
      card.src = './images/whiteCard.jpg';
      card.removeEventListener('click', showCard);
      
      let spans = document.getElementById('result').children;
      let [leftSpan, rightSpan] = [spans[0], spans[2]];

      if (card.parentNode.id === 'player1Div') {
         leftSpan.textContent = card.name;

      } else if (card.parentNode.id === 'player2Div') {
         rightSpan.textContent = card.name;
      }

      if (spans[0].textContent && spans[2].textContent) {
         let winner;
         let loser;

         if (Number(leftSpan.textContent) > Number(rightSpan.textContent)) {
            winner = document.querySelector(`#player1Div img[name='${leftSpan.textContent}']`);
            loser = document.querySelector(`#player2Div img[name='${rightSpan.textContent}']`);

         } else if (+leftSpan.textContent < +rightSpan.textContent) {
            loser = document.querySelector(`#player1Div img[name='${leftSpan.textContent}']`);
            winner = document.querySelector(`#player2Div img[name='${rightSpan.textContent}']`);
         }

         winner.style.border = '2px solid green';
         loser.style.border = '2px solid red';

         document.getElementById('history').textContent += `[${leftSpan.textContent} vs ${rightSpan.textContent}] `;

         [leftSpan.textContent, rightSpan.textContent] = ['', ''];
      }
   }
}

function solve2() {
   const player1Cards = Array.from(document.getElementById('player1Div').children);
   const player2Cards = Array.from(document.getElementById('player2Div').children);
   const history = document.getElementById('history');
   const resultSpans = Array.from(document.getElementById('result').children);
   const [player1Result, player2Result] = [resultSpans[0], resultSpans[2]];
   let [player1, player2] = [null, null];
   
   player1Cards.forEach(c => c.addEventListener('click', showPlayer1Card));
   player2Cards.forEach(c => c.addEventListener('click', showPlayer2Card));

   function showPlayer1Card(e) {
      e.preventDefault();
      e.target.removeEventListener('click', showPlayer1Card);

      e.target.src = 'images/whiteCard.jpg';
      player1Result.textContent = e.target.name;
      player1 = e.target;

      if (check2Players) {
         finishHand();
      }     
   }

   function showPlayer2Card(e) {
      e.preventDefault();
      e.target.removeEventListener('click', showPlayer2Card);

      e.target.src = 'images/whiteCard.jpg';
      player2Result.textContent = e.target.name;
      player2 = e.target;

      if (check2Players) {
         finishHand();
      }
   }

   function addHistory(){
      history.textContent += `[${player1Result.textContent} vs ${player2Result.textContent}] `;
      player1Result.textContent = '';
      player2Result.textContent = '';
   }

   function colorWinnerLoser(winner, loser){
      winner.style.border = '2px solid green';
      loser.style.border = '2px solid red';
   }

   function check2Players() {
      return player1 && player2;
   }

   function finishHand() {
      const player1Value = Number(player1.name);
      const player2Value = Number(player2.name);

      if (player1Value > player2Value) {
         colorWinnerLoser(player1, player2);
      } else if (player2Value > player1Value) {
         colorWinnerLoser(player2, player1);
      }

      addHistory();
      [player1, player2] = [null, null];
   }
}