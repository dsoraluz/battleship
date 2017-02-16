function Battleship(){
                      // 0       1       2        3       4
  this.board =        [['o', 'null', 'null', 'null', 'o'], // 0
                      ['o', 'null', 'null', 'null', 'o'],  // 1
                      ['o', 'null', 'null', 'null', 'null'],  // 2
                      ['o', 'null', 'o', 'o', 'o'],  // 3
                      ['o', 'null', 'null', 'null', 'null']   // 4
                    ];

                        // 0       1       2        3       4
this.referenceBoard = [['null', 'null', 'null', 'null', 'null'], // 0
                    ['null', 'null', 'null', 'null', 'null'],   // 1
                    ['null', 'null', 'null', 'null', 'null'],   // 2
                    ['null', 'null', 'null', 'null', 'null'],   // 3
                    ['null', 'null', 'null', 'null', 'null']    // 4
                  ];


  this.initialTries = 25;
  this.hitCounter = 0;

}



Battleship.prototype._sendHit = function (row, column) {

  if (this.board[row][column] === 'o'){
    this.referenceBoard[row][column] = 'x';
    this.hitCounter += 1;


    console.log(this.referenceBoard);
  }
  else{
    this.referenceBoard[row][column] = '?';
    console.log("That was a miss.");
    console.log(this.referenceBoard);
  }


};



//Public function that user will interact to execute game logic.
Battleship.prototype.play = function () {

};

Battleship.prototype._resetReferenceBoard = function () {
                                  // 0       1       2        3       4
          this.referenceBoard = [['null', 'null', 'null', 'null', 'null'],  // 0
                                ['null', 'null', 'null', 'null', 'null'],   // 1
                                ['null', 'null', 'null', 'null', 'null'],   // 2
                                ['null', 'null', 'null', 'null', 'null'],   // 3
                                ['null', 'null', 'null', 'null', 'null']    // 4
                      ];

      return this.referenceBoard;
};



Battleship.prototype._randomBoardGenerator = function(){
                    // 0       1       2        3       4
var boardOne =      [['o', 'null', 'null', 'null', 'o'], // 0
                    ['o', 'null', 'null', 'null', 'o'],   // 1
                    ['o', 'null', 'null', 'null', 'null'],   // 2
                    ['o', 'null', 'o', 'o', 'o'],   // 3
                    ['o', 'null', 'null', 'null', 'null']    // 4
                  ];

var boardTwo =      [['null', 'o', 'null', 'null', 'null'], // 0
                    ['null', 'o', 'null', 'null', 'o'],   // 1
                    ['null', 'o', 'null', 'null', 'o'],   // 2
                    ['null', 'o', 'null', 'null', 'null'],   // 3
                    ['null', 'o', 'o', 'o', 'o']    // 4
                  ];

var boardThree =    [['null', 'null', 'null', 'null', 'o'], // 0
                    ['null', 'o', 'o', 'null', 'o'],   // 1
                    ['null', 'null', 'null', 'null', 'o'],   // 2
                    ['null', 'null', 'null', 'null', 'null'],   // 3
                    ['o', 'o', 'o', 'o', 'o']    // 4
                  ];

var boardFour =      [['o', 'o', 'o', 'o', 'o'], // 0
                     ['null', 'null', 'null', 'null', 'null'],   // 1
                     ['null', 'null', 'o', 'null', 'null'],   // 2
                     ['null', 'null', 'o', 'null', 'o'],   // 3
                     ['null', 'null', 'o', 'null', 'o']    // 4
                  ];

var boardFive =      [['null', 'null', 'o', 'null', 'null'], // 0
                    ['null', 'null', 'o', 'null', 'o'],   // 1
                    ['o', 'o', 'o', 'null', 'o'],   // 2
                    ['null', 'null', 'o', 'null', 'o'],   // 3
                    ['null', 'null', 'o', 'null', 'null']    // 4
                  ];

var randomBoards = [];
randomBoards.push(boardOne,boardTwo, boardThree, boardFour, boardFive);

var randomIndex = Math.floor(Math.random()*5);

var boardToReturn = randomBoards[randomIndex];

var randomNumber = Math.random()*1;

//50/ 50 chance of transposing board to add to randomness.
if (randomNumber > 0.5){
  for (var row = 0; row < boardToReturn.length; row++) {
    for (var column = row+1; column < boardToReturn.length; column++) {
      var temp = boardToReturn[row][column];
      boardToReturn[row][column] = boardToReturn[column][row];
      boardToReturn[column][row] = temp;
    }
  }
}

return boardToReturn;
};

// Function to transpose a matrix
///1.Flip on Y axis
//2. Turn 90 degrees counter clockwise.
Battleship.prototype._transposeMatrix = function () {
  for (var row = 0; row < this.board.length; row++) {
    for (var column = row+1; column < this.board.length; column++) {
      var temp = this.board[row][column];
      this.board[row][column] = this.board[column][row];
      this.board[column][row] = temp;
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
