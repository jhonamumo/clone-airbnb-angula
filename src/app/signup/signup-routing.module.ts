import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../signin/signin.component';

const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    pathMatch: 'full',
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignupRoutingModule { }
