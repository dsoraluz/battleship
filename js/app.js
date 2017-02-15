var myGlobalGame;

$(document).ready(function(){


  myGlobalGame = new Battleship();
  myGlobalGame.board = myGlobalGame._randomBoardGenerator();


  console.log(myGlobalGame.board);
  renderReferenceBoard();
  renderBoard();
  loadSounds();



  $('.ship-cell').click(function(e){
    ion.sound.play('water_droplet_2');
  });

  $('.cell').click(function(e){
    ion.sound.play('water_droplet_2');

    // var rowIndex = this.getAttribute('data-row');
    // var colIndex = this.getAttribute('data-col');
    //
    // myGlobalGame._sendHit(rowIndex,colIndex);
    renderReferenceBoard();

    // console.log("row = " + rowIndex + " column = " + colIndex);

  });


  $('.row-entry-box').focus(function(e){
    $(this).val('');
  });

// $(".row-entry-box").focusout(function(e){
//   if ($(this).val('')){
//     $(this).val('Enter Row');
//   }
// });

  $('.column-entry-box').focus(function(e){
          $(this).val('');
  });
// $(".column-entry-box").focusout(function(e){
//   if ($(this).val('')){
//     $(this).val('Enter Column');
//   }
// });

$('#send-hit').click(function(e){
  var row = $('.row-entry-box').val();
  var column = $('.column-entry-box').val();

  myGlobalGame._sendHit(row, column);
  renderReferenceBoard();
  $('.cell').click();
});

});

function renderReferenceBoard(){

  $('.reference-container').empty();
  var referenceHtml;




  myGlobalGame.referenceBoard.forEach(function(row,rowIndex){
    row.forEach(function(col,colIndex){
      if(col === "x"){
        referenceHtml = '<div class="cell hit-cell" data-row = "'+ rowIndex +'" data-col = "'+ colIndex +'"></div>';
        $('.reference-container').append(referenceHtml);
        referenceHtml = '';
      }

      else {
        referenceHtml = '<div class="cell" data-row = "'+ rowIndex +'" data-col = "'+ colIndex +'"></div>';
        $('.reference-container').append(referenceHtml);
        referenceHtml = '';
      }
    });

  });

  $('.cell').click(function(e){
    ion.sound.play('water_droplet_2');

    var rowIndex = this.getAttribute('data-row');
    var colIndex = this.getAttribute('data-col');

    myGlobalGame._sendHit(rowIndex,colIndex);
    renderReferenceBoard();

    // console.log("row = " + rowIndex + " column = " + colIndex);

  });
}

function renderBoard(){

  $('.ship-container').empty();
  var shipHtml;



  myGlobalGame.board.forEach(function(row,rowIndex){
    row.forEach(function(col,colIndex){
      if(col === "o"){
        shipHtml = '<div class="cell ship-cell" data-row = "'+ rowIndex +'" data-col = "'+ colIndex +'"></div>';
        $('.ship-container').append(shipHtml);
        shipHtml = '';
      }
      else {
        shipHtml = '<div class="cell" data-row = "'+ rowIndex +'" data-col = "'+ colIndex +'"></div>';
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
