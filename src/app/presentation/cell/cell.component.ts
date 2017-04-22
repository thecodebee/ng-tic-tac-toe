import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {
  // enables the player to place a mark
  frozen: false;
  // holds either X or O to be displayed in the td
  mark: string = 'X';

  constructor() { }
  
  ngOnInit() {
  }
  
  strike() {
    console.log("clicked ==");
  }
}
