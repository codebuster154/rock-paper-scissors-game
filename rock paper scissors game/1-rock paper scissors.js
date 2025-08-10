let computerMove = '';
    let result = '';
    let score = JSON.parse(localStorage.getItem('score'));
    if (score === null) {
      score = { wins: 0, loss: 0, tie: 0 };
    }
    function change() {
      score.wins = score.loss = score.tie = 0;
      localStorage.removeItem('score');
      document.querySelector('.p2').innerHTML = `wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.tie}`;
      alert(`The result has been reset to 0`);
    }
    function compM() {
      const randomNumber = Math.random();
      if (randomNumber < 1/3) {
        computerMove = 'rock';
      } else if (randomNumber < 2/3) {
        computerMove = 'paper';
      } else {
        computerMove = 'scissors';
      }
    }
    function playGame(res) {
      compM();
      if (res === 'rock') {
        if (computerMove === 'rock') result = 'tie';
        else if (computerMove === 'scissors') result = 'you win';
        else result = 'you lose';
      } else if (res === 'paper') {
        if (computerMove === 'rock') result = 'you win';
        else if (computerMove === 'scissors') result = 'you lose';
        else result = 'tie';
      } else {
        if (computerMove === 'scissors') result = 'tie';
        else if (computerMove === 'paper') result = 'you win';
        else result = 'you lose';
      }
      if (result === 'you win') {
        score.wins++;
        document.querySelector('.p1').innerHTML = 'you win';
      } else if (result === 'you lose') {
        score.loss++;
        document.querySelector('.p1').innerHTML = 'you lose';
      } else {
        score.tie++;
        document.querySelector('.p1').innerHTML = 'tie';
      }
      localStorage.setItem('score', JSON.stringify(score));
      document.querySelector('.p2').innerHTML = `wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.tie}`;
      document.querySelector('.js-moves').innerHTML = `you 
        <img src="${res}-emoji.png" class="move-img">
        <img src="${computerMove}-emoji.png" class="move-img">
        Computer`;

    }
