import { formatDate, getLocaleDateFormat } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReserveService } from 'src/app/services/reserve/reserve.service';
import { IBooking } from 'src/app/shared/models/booking.models';

@Component({
  selector: 'app-form-reserve',
  templateUrl: './form-reserve.component.html',
  styleUrls: ['./form-reserve.component.scss']
})
export class FormReserveComponent implements OnInit {

  public formGroup: FormGroup;
  @Input() experienceId?: string;

  constructor(private formBuilder: FormBuilder, private reserveService: ReserveService, private router: Router) { }

  ngOnInit(): void {
    this.formReserveInit();
  }

  public formReserveInit(): void {
    this.formGroup = this.formBuilder.group({
      booking_date_start: ['', [Validators.required, this.validateReserveDate]],
      booking_date_end: ['', [Validators.required, this.validateReserveDate]],
      description: ['', ],
    }, {
      validators: this.validateDateRange(),
    });
  }

  private validateDateRange() {
    return (formGroup: FormGroup) => {
      const controlBookingDateStart = formGroup.controls['booking_date_start'];
      const controlBookingDateEnd = formGroup.controls['booking_date_end'];
      if(new Date(controlBookingDateStart.value) > new Date(controlBookingDateEnd.value)) {
        controlBookingDateEnd.setErrors({ mustGreaterThan: true });
      }
    };
  }

  private validateReserveDate(control: AbstractControl) {
    const formDate = control.value.split('-');
    const today = new Date();
    const booking_date = new Date(formDate[0], formDate[1] - 1,  formDate[2]);
    let error = null;

    if(booking_date <= today)
      error = { customError: 'La fecha de reserva debe ser mayor al dia de hoy' };
    
    return error;
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.formGroup.get(controlName);

    if(control.dirty && control.errors != null)
      error = this.errorMapping(control.errors);

    return error;
  }

  private errorMapping(errors: any): string {
    let errorMessage = '';

    if(errors.required)
      errorMessage = 'Campo Obligatorio, ';
    
    if(errors.customError)
      errorMessage += errors.customError;
    
    if(errors.mustGreaterThan)
      errorMessage += 'La fecha inicial debe ser Mayor que la fecha final';

    return errorMessage;
  }

  public reserve(): void {
    const dataReserve: IBooking = {
      booking_date_start: this.formGroup.value.booking_date_start,
      booking_date_end: this.formGroup.value.booking_date_end,
      experience_id: this.experienceId,
      comments: this.formGroup.value.description,
    };

    this.reserveService.postReserve(dataReserve).subscribe(response => {
      if(response.status === 1){
        console.log('response', response);
        this.router.navigate(['/home']);
      }
    });
    // console.log('data reserve', dataReserve);
  }

}
