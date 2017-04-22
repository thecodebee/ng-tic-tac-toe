import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CellComponent } from './presentation/cell/cell.component';
import { BoardComponent } from './presentation/board/board.component';
import { LayoutComponent } from './presentation/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
