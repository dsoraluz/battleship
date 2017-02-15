function Battleship(){
  this.player = '';
                      // 0       1       2        3       4
  this.board = [['null', 'null', 'null', 'null', 'null'], // 0
                      ['null', 'null', 'null', 'null', 'null'],  // 1
                      ['null', 'null', 'null', 'null', 'null'],  // 2
                      ['null', 'null', 'null', 'null', 'null'],  // 3
                      ['null', 'null', 'null', 'null', 'null']   // 4
                    ];

                        // 0       1       2        3       4
this.referenceBoard = [['null', 'null', 'null', 'null', 'null'], // 0
                    ['null', 'null', 'null', 'null', 'null'],   // 1
                    ['null', 'null', 'null', 'null', 'null'],   // 2
                    ['null', 'null', 'null', 'null', 'null'],   // 3
                    ['null', 'null', 'null', 'null', 'null']    // 4
                  ];


  this.hasWon = false;


  this._placeShip();
}

//
// var newGame = new Battleship();
// console.log(this.board);



Battleship.prototype._sendHit = function (row, column) {

  if (this.board[row][column] === 'o'){
    this.referenceBoard[row][column] = 'x';
    console.log("That was a hit!");

    // if (this._shipSunk){
    //   console.log("You have sunk my battleship!");
    // }

    console.log(this.referenceBoard);
  }
  else{
    this.referenceBoard[row][column] = '?';
    console.log("That was a miss.");
    console.log(this.referenceBoard);
  }


};

Battleship.prototype._shipSunk = function(){

  this.board.forEach(function(row, rowIndex){
    row.forEach(function(col, colIndex){
      if (col === 'o'){
      return false;
    }
    else{
      return true;
    }
    });
  });

};


//Public function that user will interact to execute game logic.
Battleship.prototype.play = function () {

};


Battleship.prototype._placeShip = function(){

  //Generates a random number (0 or 1) to be used to determine the direction the
  //ship will be placed on the board. 0 = vertical, 1 = horizontal.
  var randomNum= Math.random()*1;

  var arrayOfShipSizes = [2,3,5];

  if (randomNum < 0.5){

    this._placeHorizontal(arrayOfShipSizes[Math.floor(Math.random()*3)]);
    console.log("The ship  (length 3) was placed vertically.");
  }else{
    this._placeVertical(arrayOfShipSizes[Math.floor(Math.random()*3)]);
    console.log("The ship (length 3) was placed horizontally.");
  }


};



// //Function that accepts length ship as an argument and initially places the bow
// //(front of the ship) with the middle and stern (back of ship) laid to
// //vertically on the players board
Battleship.prototype._placeVertical = function(shipLength){
  var randomRowIndex;
  var randomColumnIndex;

  //For ship is of length 5
  if(shipLength == 5){

    //Generates a random number 0-4
    // randomRowIndex = Math.floor(Math.random()*5);
    // console.log("Random row index for ship size 5: " + randomRowIndex);

    //Generates a random number 0-4
    randomColumnIndex = Math.floor(Math.random()*5);
    console.log("Random row index for ship size 5: " + randomRowIndex);

    ////We cannnot place the board out of bounds so this accounts for the end
    ////of the board column index.
      this.board[0][randomColumnIndex] = 'o';
      this.board[1][randomColumnIndex] = 'o';
      this.board[2][randomColumnIndex] = 'o';
      this.board[3][randomColumnIndex] = 'o';
      this.board[4][randomColumnIndex] = 'o';
  }

  //For ship is of length 3
  else if (shipLength == 3) {

    //Generates a random number 0-4
    randomRowIndex = Math.floor(Math.random()*5);
    console.log("Random row index for ship size 3: " + randomRowIndex);

    //Generates a random number 0-4
    randomColumnIndex = Math.floor(Math.random()*5);
    console.log("Random col index for ship size 3: " + randomColumnIndex);

    ////We cannnot place the board out of bounds so this accounts for the end
    ////of the board column index.
    if (randomRowIndex == 4){
      this.board[randomRowIndex][randomColumnIndex] = 'o';
      this.board[randomRowIndex - 1][randomColumnIndex] = 'o';
      this.board[randomRowIndex - 2][randomColumnIndex] = 'o';
    }
    else if(randomRowIndex == 3){
      this.board[randomRowIndex][randomColumnIndex] = 'o';
      this.board[randomRowIndex - 1][randomColumnIndex] = 'o';
      this.board[randomRowIndex - 2][randomColumnIndex] = 'o';
    }

    else{
      this.board[randomRowIndex][randomColumnIndex] = 'o';
      this.board[randomRowIndex + 1][randomColumnIndex] = 'o';
      this.board[randomRowIndex + 2][randomColumnIndex] = 'o';
    }

  }

  //For ship is of length 2
  else if (shipLength == 2){

    //Generates a random number 0-2
    randomRowIndex = Math.floor(Math.random()*2);
    console.log("Random row index for ship size 2: " + randomRowIndex);
    //Generates a random number 0-4
    randomColumnIndex = Math.floor(Math.random()*2);
    console.log("Random row index for ship size 2: " + randomColumnIndex);

    ////We cannnot place the board out of bounds so this accounts for the end
    ////of the board column index.
    if (randomRowIndex == 4){
      this.board[randomRowIndex][randomColumnIndex] = 'o';
      this.board[randomRowIndex - 1][randomColumnIndex] = 'o';
    } else{
      this.board[randomRowIndex][randomColumnIndex] = 'o';
      this.board[randomRowIndex + 1][randomColumnIndex] = 'o';
    }

  }

};


// //Places ship horizontally
// //Ship is denoted by 'o' on game board.
Battleship.prototype._placeHorizontal = function(shipLength){
var randomRowIndex;
var randomColumnIndex;

//For ship is of length 5
if(shipLength == 5){

  //Generates a random number 0-4
  // randomRowIndex = Math.floor(Math.random()*5);
  // console.log("Random row index for ship size 5: " + randomRowIndex);

  //Generates a random number 0-4
  randomRowIndex = Math.floor(Math.random()*5);
  console.log("Random row index for ship size 5: " + randomColumnIndex);

  ////We cannnot place the board out of bounds so this accounts for the end
  ////of the board column index.

    this.board[randomRowIndex][0] = 'o';
    this.board[randomRowIndex][1] = 'o';
    this.board[randomRowIndex][2] = 'o';
    this.board[randomRowIndex][3] = 'o';
    this.board[randomRowIndex][4] = 'o';
}

//For ship is of length 3
else if (shipLength == 3) {


  //Generates a random number 0 - length of emptyArray column.
  randomRowIndex = Math.floor(Math.random()*5);
  console.log("Random row index for ship size 5: " + randomRowIndex);

  //Generates a random number less than length of emptyArray column.
  randomColumnIndex = Math.floor(Math.random()*5);
  console.log("Random col index for ship size 5: " + randomColumnIndex);

  ////We cannnot place the board out of bounds so this accounts for the end
  ////of the board column index.
  if (randomColumnIndex == 4){
    this.board[randomRowIndex][randomColumnIndex] = 'o';
    this.board[randomRowIndex][randomColumnIndex - 1] = 'o';
    this.board[randomRowIndex][randomColumnIndex - 2] = 'o';
  }
  else if(randomColumnIndex == 3){
    this.board[randomRowIndex][randomColumnIndex] = 'o';
    this.board[randomRowIndex][randomColumnIndex - 1] = 'o';
    this.board[randomRowIndex][randomColumnIndex - 2] = 'o';
  }

  else{
    this.board[randomRowIndex][randomColumnIndex] = 'o';
    this.board[randomRowIndex][randomColumnIndex + 1] = 'o';
    this.board[randomRowIndex][randomColumnIndex + 2] = 'o';
  }

}

//For ship is of length 2
else if (shipLength == 2){

  //Generates a random number 0-4
  randomRowIndex = Math.floor(Math.random()*5);
  console.log("Random row index for ship size 2: " + randomRowIndex);
  //Generates a random number 0-4
  randomColumnIndex = Math.floor(Math.random()*5);
  console.log("Random row index for ship size 2: " + randomColumnIndex);

  ////We cannnot place the board out of bounds so this accounts for the end
  ////of the board column index.
  if (randomColumnIndex == 4){
    this.board[randomRowIndex][randomColumnIndex] = 'o';
    this.board[randomRowIndex][randomColumnIndex - 1] = 'o';
  } else{
    this.board[randomRowIndex][randomColumnIndex] = 'o';
    this.board[randomRowIndex][randomColumnIndex + 1] = 'o';
  }

}

};




// Battleship.prototype._getAvailableSpaces = function(){
//   //An array to hold the available spaces on the board where a ship is not
//   //placed.
//   var emptySpaces = [];
//
//   //Scans the board and determines which spaces do not have a ship occupying them.
//   //the row index and col index is is saved as an object with x (row index) and y (col index properties)
//   this.board.forEach(function(row, rowIndex){
//     row.forEach(function(col, colIndex){
//
//       emptySpaces.push({x: rowIndex, y: colIndex});
//
//     });
//   });
//
//   if (emptySpaces.length === 0){
//     return null;
//   }
//
//   var randomIndex = Math.floor(Math.random()* emptySpaces.length);
//
//   return emptySpaces[randomIndex];
// };
