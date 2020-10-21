import { formatDate, getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { error } from 'protractor';

@Component({
  selector: 'app-form-reserve',
  templateUrl: './form-reserve.component.html',
  styleUrls: ['./form-reserve.component.scss']
})
export class FormReserveComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formReserveInit();
  }

  public formReserveInit(): void {
    this.formGroup = this.formBuilder.group({
      reserveDate: ['', [Validators.required, this.validateReserveDate]],
      description: ['', ],
    });
  }

  private validateReserveDate(control: AbstractControl) {
    const formDate = control.value.split('-');
    const today = new Date();
    const reserveDate = new Date(formDate[0], formDate[1] - 1,  formDate[2]);
    let error = null;

    if(reserveDate <= today)
      error = { customError: 'La fecha de reserva debe ser mayor' };
    
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

    return errorMessage;
  }

  public reserve(): void {
    const dataReserve = this.formGroup.value;
    console.log('data reserve', dataReserve);
  }

}
