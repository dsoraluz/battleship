var myGlobalGame;

$(document).ready(function(){



  myGlobalGame = new Battleship();

  // myGlobalGame.player = prompt("Enemy ships approaching! \n Who is the captain?");

  console.log(myGlobalGame.board);
  console.time('renderBoard');

renderBoard(); // run whatever needs to be timed in between the statement
loadSounds();

console.timeEnd('renderBoard');

$('.ship-cell').click(function(e){
  ion.sound.play('water_droplet_2');
});

$('.cell').click(function(e){
  ion.sound.play('water_droplet_2');
});


});

function renderBoard(){

  $('.ship-container').empty();
  var shipHtml;



  myGlobalGame.board.forEach(function(row,rowIndex){
    row.forEach(function(col,colIndex){
      if(col === "o"){
        shipHtml = '<div class="ship-cell"></div>';
        $('.ship-container').append(shipHtml);
        shipHtml = '';
      }
      else {
        shipHtml = '<div class="cell"></div>';
        $('.ship-container').append(shipHtml);
        shipHtml = '';
      }
    });

  });
}

////ION SOUND////

//Each sound is a giant object
// function loadSounds () {
//   ion.sound({
//     sounds: [{name: "snap"}, {name: "tap"}],
//
//     path: "../lib/ion.sound-3.0.7/sounds/",
//     preload: true,
//     volume: 1.0
//   });
// }

function loadSounds (){
  ion.sound({
    sounds: [{name: 'water_droplet_2'}],
    path: '../lib/ion.sound-3.0.7/sounds/',
    preload: true,
    volume: 1.0
  });
}
