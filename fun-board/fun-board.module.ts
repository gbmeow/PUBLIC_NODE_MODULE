///<reference path="../node_modules/@angular/core/index.d.ts"/>
///<reference path="../node_modules/@angular/common/index.d.ts"/>
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FunBoardComponent } from './fun-board.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FunBoardComponent],
  declarations: [FunBoardComponent]
})
export class FunBoardModule { }
