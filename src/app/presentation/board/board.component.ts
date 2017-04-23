import { Component } from '@angular/core';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  squares = Array(9).fill(null);
  player = 'X';
  winner = null;

  get gameStatusMessage(){
    return this.winner? `Player ${this.winner} has won!` : 
    `Player ${this.player}'s turn`;
  }

  handleMove(position) {
    if(!this.winner && !this.squares[position] ){
      this.squares[position] = this.player;
      if(this.winnigMove()) {
        this.winner = this.player;
      }
      this.player = this.player === 'X' ? 'O' : 'X';
    }
  }

  winnigMove() {
    const conditions = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // colums
      [0, 4, 8], [2, 4, 6]             // diagonal 
    ];
    for (let condition of conditions) {
        if ( this.squares[condition[0]]
            && this.squares[condition[0]] === this.squares[condition[1]]
            && this.squares[condition[1]] === this.squares[condition[2]]) {
              return true;
        }
    }
    return false;
  }

  restartGame() {
    this.squares = Array(9).fill(null);
    this.player = 'X';
    this.winner = null;
  }
  
}
