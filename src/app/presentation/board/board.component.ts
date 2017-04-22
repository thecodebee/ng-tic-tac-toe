import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  // can be O or X
  activePlayer: 'O';
  // maintains the status of the game: turn or win or draw
  gameStatus: 'turn';
  gameStatusMessage: string = "O's turn";
  // no. of moves played by both players in a single game (max = 9)
  moves: 0;
  // stores the placement of X and O in cells by their cell number
  cells: {
      1: '', 2: '', 3: '',
      4: '', 5: '', 6: '',
      7: '', 8: '', 9: ''
  };

  winConditions: [
      [1, 2, 3], [4, 5, 6], [7, 8, 9],     // rows
      [1, 4, 7], [2, 5, 8],    [3, 6, 9],  // columns
      [1, 5, 9], [3, 5, 7]                 // diagonals
  ];

  constructor() { }

  ngOnInit() {
  }

}
