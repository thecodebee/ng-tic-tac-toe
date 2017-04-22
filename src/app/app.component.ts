import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tic Tac Toe in Angular 4 with AngularCLI';
  matches: number = 8;
  o_wins: number = 2;
  x_wins: number = 4;
}
