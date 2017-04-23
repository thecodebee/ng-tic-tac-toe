import { Component, Input, Output, OnChanges, EventEmitter } from '@angular/core';

import { Square } from '../../models/square';

@Component({
  selector: 'cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input()
  pos: string;

  @Input()
  mark: string;
  
  @Output()
  play : EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(changes) {
    if (changes.mark) {
      this.mark = changes.mark.currentValue;
    }
  }

  onPlay(pos: string) {
    this.play.emit(pos);
  }
}
