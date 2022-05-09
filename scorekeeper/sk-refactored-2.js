$( document ).ready(function() {
  console.log('Ready!')

  // Refactoring Code into Object Based Programming!
  const p1 = {
    score: 0,
    button: $('#playerOne'),
    display:$('#p1score'),
    announcement: function() {
      alert('Player One won the Game!')
    }
  }

  const p2 = {
    score: 0,
    button: $('#playerTwo'),
    display: $('#p2score'),
    announcement: function() {
      alert('Player Two won the Game!')
    }
  }

  // Reset Function
  function resetGame(player1, player2) {
    player1.score = 0;
    player2.score = 0;
    player1.display.css({
        color: 'black'
      })
    player2.display.css({
        color: 'black'
      })
    player1.display.html(player1.score);
    player2.display.html(player2.score);
    player1.button.show();
    player2.button.show();
  }

  // Helper Function to Alert When Game Score Hit
  const scoreVictory = (player) => {
    player.score += 1;
    player.display.html(player.score);
    if (player.score === scoreCount) {
      player.announcement();
      $('#playerTwo').hide();
      $('#playerOne').hide();
    }
  };

  // ScoreCount Dropdown captured
  let scoreCount = document.querySelector('#dropdownMenuButton1');

  // ScoreCount DropDown Resets Score & acts as Win parameter
  scoreCount.addEventListener('change', function() {
    scoreCount = parseInt(this.value, 10); // can alert this value!
    alertStart(); //Announces Score Goal
    // Resets game if the score goal is changed
    resetGame(p1, p2);
  })

  function alertStart() {
    if(scoreCount === 6) {
      alert('Goal is 6 Points - Start!');
    } else if(scoreCount === 10) {
      alert('Goal is 10 Points - Start!');
    } else if(scoreCount === 20) {
      alert('Goal is 20 Points - Start!');
    }
  }

  // Button for Player 1 triggers scoreVictory 
  p1.button.on('click', () => {
    p1.display.css({
      color: 'green'
    });
    scoreVictory(p1);
  })

  // Button for Player 2 triggers scoreVictory
  p2.button.on('click', () => {
    p2.display.css({
      color: 'blue'
    });
    scoreVictory(p2);
  })

  // Button for Reset calls resetGame function
  $('#reset').on('click', (event) => {
    resetGame(p1, p2);
  });
});

// For longer ones, could loop the actions!