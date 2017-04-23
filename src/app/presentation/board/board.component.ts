import { Component } from '@angular/core';

import { Square } from '../../models/square';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  PLAYER_ONE: string = 'X';
  PLAYER_TWO: string = 'O';
  
  activePlayer = '';

  gameStatus: string = 'turn';
  gameStatusMessage: string = "X's turn";

  moves: number = 0;
  squares: Square[] = [
    {pos: '1', mark: ''},
    {pos: '2', mark: ''},
    {pos: '3', mark: ''},
    {pos: '4', mark: ''},
    {pos: '5', mark: ''},
    {pos: '6', mark: ''},
    {pos: '7', mark: ''},
    {pos: '8', mark: ''},
    {pos: '9', mark: ''}
  ];

  winConditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], 
      [0, 3, 6], [1, 4, 7], [2, 5, 8], 
      [0, 4, 8], [2, 4, 6]
    ];

  constructor() {}

  handleGame(event: String) {
    this.activePlayer = this.activePlayer === this.PLAYER_ONE ? this.PLAYER_TWO : this.PLAYER_ONE;
    let nextPlayer = this.activePlayer === this.PLAYER_ONE ? this.PLAYER_TWO : this.PLAYER_ONE;
    this.gameStatusMessage = `${nextPlayer}'s turn`;
    this.moves++;
    this.squares = this.squares.map((square: Square) => {
      if(square.pos === event){
        square = Object.assign({}, square, {pos: event, mark: this.activePlayer})
      }
      return square;
    });
    this.checkForWin();
  }

  checkForWin(){
    for (let i = 0; i < this.winConditions.length; i++) {
        let wc = this.winConditions[i];
        let cells = this.squares;
        if ( cells[wc[0]].mark !== "" && cells[wc[1]].mark !== "" && 
          cells[wc[2]].mark !== "" && 
          cells[wc[0]].mark === cells[wc[1]].mark && 
          cells[wc[1]].mark === cells[wc[2]].mark) {
          console.log("winning player => ", cells[wc[0]].mark);
            return true;
        }
    }
    return false
  }
}
