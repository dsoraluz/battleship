var myGlobalGame; //Global game variable.
var numberOfTries; //Global number of tries variable.


//Place everything that you want to be executed apon page load.
$(document).ready(function(){


  myGlobalGame = new Battleship(); //global game variable is initialized.
  myGlobalGame.board = myGlobalGame._randomBoardGenerator(); //Level 1 game board is created.

  numberOfTries = 25; //Level 1 number of tries is set to 25.


  console.log(myGlobalGame.board);
  renderReferenceBoard(); //Player selection board is rendered on the browser.
  renderBoard(); //For demomstration purpose: board that user will picking at.
  loadSounds(); //Loads ion sounds;

  //Hides Level, Winner, and Game Over modals.

  $('.game-over-modal').hide();
  $('.winner-modal').hide();

  $('.level-modal').css('visibility', 'visible');
  $('.level-modal').fadeOut(5000);

  $('.board').fadeOut(3500);

});


//Renders the user interface.
function renderReferenceBoard(){

  $('.reference-container').empty();
  var referenceHtml;


  myGlobalGame.referenceBoard.forEach(function(row,rowIndex){
    row.forEach(function(col,colIndex){
      if(col === "x"){
        referenceHtml = '<div class="cell pressed hit-cell" data-row = "'+ rowIndex +'" data-col = "'+ colIndex +'"></div>';
        $('.reference-container').append(referenceHtml);
        referenceHtml = '';
      }
      else if(col === "-"){
        referenceHtml = '<div class="cell pressed" data-row = "'+ rowIndex +'" data-col = "'+ colIndex +'"></div>';
        $('.reference-container').append(referenceHtml);
        referenceHtml = '';
      }

      else {
        referenceHtml = '<div class="cell unpressed" data-row = "'+ rowIndex +'" data-col = "'+ colIndex +'"></div>';
        $('.reference-container').append(referenceHtml);
        referenceHtml = '';
      }
    });

  });

  //listener for cell click event.
  $('.cell').click(function(e){
    ion.sound.play('water_droplet_2');

    var rowIndex = this.getAttribute('data-row');
    var colIndex = this.getAttribute('data-col');

    if($(this).hasClass('cell')){
      $('.cell').toggleClass('pressed');
      $(this).removeClass('cell');
    }

    if(!($(this).hasClass('hit-cell'))){

      myGlobalGame._sendHit(rowIndex,colIndex);

      numberOfTries -= 1;
      $('.tries').html(numberOfTries);
      $('.tiles-left').html(myGlobalGame.tilesUndiscovered);


      if (myGlobalGame.hitCounter === 10){
        newLevel();
      }

      if(numberOfTries === 0)
      {
        $('.game-over-modal').show();
      }

      renderReferenceBoard();
      renderBoard();
    }
  });
}

//Function that determines transition of a new level.
function newLevel(){

  myGlobalGame.hitCounter = 0;
  myGlobalGame.tilesUndiscovered = 10;
  $('.tiles-left').html(myGlobalGame.tilesUndiscovered);
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
    $('.tries').removeClass('level-1-text');
    $('.tries').toggleClass('level-2-text');


    $('#level-modal-number').html(2);
    $('.level-modal').show();
    $('.level-modal').fadeOut(5000);

    $('.board').show();
    $('.board').fadeOut(3500);
  }
  else if($('.reference-board').hasClass('level-2')){
    $('.level-number-container').removeClass('level-2-container');
    $('.level-number-container').toggleClass('level-3-container');
    $('.level-number').html(3);
    $('.reference-board').removeClass('level-2');
    $('.reference-board').toggleClass('level-3');
    numberOfTries = 18;
    $('.tries').html(numberOfTries);
    $('.tries').removeClass('level-2-text');
    $('.tries').toggleClass('level-3-text');

    $('#level-modal-number').html(3);
    $('.level-modal').show();
    $('.level-modal').fadeOut(5000);

    $('.board').show();
    $('.board').fadeOut(3500);
  }
  else if($('.reference-board').hasClass('level-3')){
    $('.level-number-container').removeClass('level-3-container');
    $('.level-number-container').toggleClass('level-4-container');
    $('.level-number').html(4);
    $('.reference-board').removeClass('level-3');
    $('.reference-board').toggleClass('level-4');
    numberOfTries = 15;
    $('.tries').html(numberOfTries);
    $('.tries').removeClass('level-3-text');
    $('.tries').toggleClass('level-4-text');

    $('#level-modal-number').html(4);
    $('.level-modal').show();
    $('.level-modal').fadeOut(5000);

    $('.board').show();
    $('.board').fadeOut(3500);

  }
  else if($('.reference-board').hasClass('level-4')){
    $('.level-number-container').removeClass('level-4-container');
    $('.level-number-container').toggleClass('level-5-container');
    $('.level-number').html(5);
    $('.reference-board').removeClass('level-4');
    $('.reference-board').toggleClass('level-5');
    numberOfTries = 12;
    $('.tries').html(numberOfTries);
    $('.tries').removeClass('level-4-text');
    $('.tries').toggleClass('level-5-text');

    $('#level-modal-number').html(5);
    $('.level-modal').show();
    $('.level-modal').fadeOut(5000);

    $('.board').show();
    $('.board').fadeOut(3500);

  }

  else if($('.reference-board').hasClass('level-5')){
    $('.tiles-left').html(0);
    $('.winner-modal').show();
  }

}

//For demonstration purposes...
//Renders board with reveled tiles that user will pick at
//Remove if desired.
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
