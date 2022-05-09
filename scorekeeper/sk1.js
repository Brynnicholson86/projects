/*
1. Color Score Logic X
2. Button Click adds to player Count X
3. Reset Button Logic X
4. Playing to Selector defines Win Condition; Limit Count
5. Player Count Wins! Created;  

*/
$( document ).ready(function() {
  console.log('Ready!')
  let p1Counter = 0;
  let p2Counter = 0;
  let scoreCount = document.querySelector('#dropdownMenuButton1');

  // Strings don't have a change method?
/*   scoreCount.change(function() {
    this.value;
    alert('Test!');
  }); */

  scoreCount.addEventListener('change', function() {
    scoreCount = parseInt(this.value, 10); // can alert this value!
    resetGame();
  })


  $('#playerOne').on('click', () => {
    p1Counter += 1;
    $('#p1score').html(p1Counter);
    $('#p1score').css({
        color: 'green'
      });
      scoreVictory();
  });

  // Makes Scores go up, turn color;
  $('#playerTwo').on('click', (event) => {
    p2Counter += 1;
    $('#p2score').html(p2Counter);
    $('#p2score').css({
        color: 'blue'
      });
    scoreVictory();
  });

  // Button for Reset calls resetGame function
  $('#reset').on('click', (event) => {
    resetGame();
  });

  // Makes Everything Reset
  function resetGame() {
      p2Counter = 0;
      p1Counter = 0;
      //scoreCount = 0;
      $('#p2score').css({
          color: 'black'
        })
      $('#p1score').css({
          color: 'black'
        })
      $('#p1score').html(p1Counter);
      $('#p2score').html(p2Counter);
      $('#playerTwo').show();
      $('#playerOne').show();
  }

  // Helper Function to Alert When Game Score Hit
  const scoreVictory = () => {
    if (p1Counter === scoreCount) {
      alert('Player One has won the game!');
      $('#playerTwo').hide();
      $('#playerOne').hide();
    } else if (p2Counter === scoreCount) {
      alert('Player Two has won the game!');
      $('#playerTwo').hide();
      $('#playerOne').hide();
    }
  };

});
