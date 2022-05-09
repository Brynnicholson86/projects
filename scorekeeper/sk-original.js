/* Build Plan:
1. Color Score Logic X
2. Button Click adds to player Count X
3. Reset Button Logic X
4. Playing to Selector defines Win Condition; Limit Count X
5. Player Count Wins! Created; X

*/

$( document ).ready(function() {
  console.log('Ready!')
  let p1Counter = 0;
  let p2Counter = 0;

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

  // Makes Everything Reset
  $('#reset').on('click', (event) => {
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
  });

  // Score Chooser Changes when selected
  $('.dropdown-item6').on('click', (event) => {
    $('#dropdownMenuButton1').text('6')
  });
  $('.dropdown-item10').on('click', (event) => {
    $('#dropdownMenuButton1').text('10')
  });
  $('.dropdown-item20').on('click', (event) => {
    $('#dropdownMenuButton1').text('20')
  });

  // Helper Function to Alert When Game Score Hit
  const scoreVictory = () => {
    let scoreCount = parseInt($('#dropdownMenuButton1').text(), 10);
    if (p1Counter === scoreCount) {
      alert('Player One has won the game!');
    } else if (p2Counter === scoreCount) {
      alert('Player Two has won the game!');
    }
  };

});
