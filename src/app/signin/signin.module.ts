import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [SigninComponent, FormLoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SigninModule { }
