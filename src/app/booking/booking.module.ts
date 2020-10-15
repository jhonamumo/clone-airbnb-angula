import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { FormReserveComponent } from './components/form-reserve/form-reserve.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookingComponent, FormReserveComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class BookingModule { }
