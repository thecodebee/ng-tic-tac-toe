import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  title = 'Tic-Tac-Toe in Angular 4';
  matches: number = 8;
  o_wins: number = 2;
  x_wins: number = 4;

  constructor() { }

  ngOnInit() {
  }

  restartGame() {
    this.matches++;
  }

}
