import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './booking.component';
import { FormReserveComponent } from './components/form-reserve/form-reserve.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingRoutingModule } from './booking-routing.module';



@NgModule({
  declarations: [BookingComponent, FormReserveComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BookingRoutingModule,
  ]
})
export class BookingModule { }
