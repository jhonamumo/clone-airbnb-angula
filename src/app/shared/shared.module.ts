import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ScoreComponent } from './components/score/score.component';



@NgModule({
  declarations: [TopbarComponent, ScoreComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TopbarComponent, ScoreComponent,
  ],
})
export class SharedModule { }
