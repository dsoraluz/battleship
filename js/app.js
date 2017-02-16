var myGlobalGame;
var numberOfTries;

$(document).ready(function(){


  myGlobalGame = new Battleship();
  myGlobalGame.board = myGlobalGame._randomBoardGenerator();

  numberOfTries = 25;


  console.log(myGlobalGame.board);
  renderReferenceBoard();
  renderBoard();
  loadSounds();


  $('.game-over-modal').hide();
  $('.winner-modal').hide();

  $('.level-modal').css('visibility', 'visible');
  $('.level-modal').fadeOut(5000);


  $('.ship-cell').click(function(e){
    ion.sound.play('water_droplet_2');
  });

  $('.cell').click(function(e){
    ion.sound.play('water_droplet_2');

    // var rowIndex = this.getAttribute('data-row');
    // var colIndex = this.getAttribute('data-col');
    //
    // myGlobalGame._sendHit(rowIndex,colIndex);
    //renderReferenceBoard();

    // console.log("row = " + rowIndex + " column = " + colIndex);

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

    numberOfTries -= 1;
    $('.tries').html(numberOfTries);

    if (myGlobalGame.hitCounter === 10){
      newLevel();
    }

    if(numberOfTries === 0)
    {
      $('.game-over-modal').show();
    }

    renderReferenceBoard();
    renderBoard();
  });
}

function newLevel(){
  myGlobalGame.hitCounter = 0;
  myGlobalGame.board = myGlobalGame._randomBoardGenerator();
  myGlobalGame.referenceBoard = myGlobalGame._resetReferenceBoard();

  if($('.reference-board').hasClass('level-1')){
    $('.level-number-container').removeClass('level-1-container');
    $('.level-number-container').toggleClass('level-2-container');
    $('.level-number').html(2);
    $('.reference-board').removeClass('level-1');
    $('.reference-board').toggleClass('level-2');
    numberOfTries = 20;
    $('.tries').html(numberOfTries);

    $('#level-modal-number').html(2);
    $('.level-modal').show();
    $('.level-modal').fadeOut(5000);
  }
  else if($('.reference-board').hasClass('level-2')){
    $('.level-number-container').removeClass('level-2-container');
    $('.level-number-container').toggleClass('level-3-container');
    $('.level-number').html(3);
    $('.reference-board').removeClass('level-2');
    $('.reference-board').toggleClass('level-3');
    numberOfTries = 18;
    $('.tries').html(numberOfTries);

    $('#level-modal-number').html(3);
    $('.level-modal').show();
    $('.level-modal').fadeOut(5000);
  }
  else if($('.reference-board').hasClass('level-3')){
    $('.level-number-container').removeClass('level-3-container');
    $('.level-number-container').toggleClass('level-4-container');
    $('.level-number').html(4);
    $('.reference-board').removeClass('level-3');
    $('.reference-board').toggleClass('level-4');
    numberOfTries = 15;
    $('.tries').html(numberOfTries);

    $('#level-modal-number').html(4);
    $('.level-modal').show();
    $('.level-modal').fadeOut(5000);

  }
  else if($('.reference-board').hasClass('level-4')){
    $('.level-number-container').removeClass('level-4-container');
    $('.level-number-container').toggleClass('level-5-container');
    $('.level-number').html(5);
    $('.reference-board').removeClass('level-4');
    $('.reference-board').toggleClass('level-5');
    numberOfTries = 12;
    $('.tries').html(numberOfTries);

    $('#level-modal-number').html(5);
    $('.level-modal').show();
    $('.level-modal').fadeOut(5000);

  }

  else if($('.reference-board').hasClass('level-5')){
    $('.winner-modal').show();
  }

}

//Renders board with reveled tiles that user will pick at
//Remove is desired.
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
