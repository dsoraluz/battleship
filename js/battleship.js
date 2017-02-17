
//Constructor for new game.
//@Var board: random arrangement of tiles that reflects what the player will try to discover.
//            used to demonstrate tile placment in User Interface.
//@Var referenceBoard: board that will be used to reflect tiles that player has discovered.
//@Var initialTries: the number of tries player has upon game initiation (Level 1).
//@var hitCounter: to be used as a running counter for to determine level completion.
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
  this.tilesUndiscovered = 10;

}


//Send hit function that checks users selection against game board and relects
//the outcome on the referenceBoard if selection proves to be a tile.
//Note: Hit counter is incremented each time there is a tile uncovered.
Battleship.prototype._sendHit = function (row, column) {

  if (this.board[row][column] === 'o'){
    this.referenceBoard[row][column] = 'x';
    this.hitCounter += 1;
    this.tilesUndiscovered -= 1;


    console.log(this.referenceBoard);
  }
  else{
    this.referenceBoard[row][column] = '-';
  }


};




//Function that resets the referenceBoard();
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


//Function that generates a random arrangement of 10 tiles by randomly selecting
//one of 5 hard coded tiles arrangements.
//Note: Randomization is acheived by randomly generating an index that references
//      a position in that array of random boards.
//Note: Randomization is further achieved by transposing the game board based on
//      50/50 probalility.
//Note: Returns the randomly chosen array.
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
