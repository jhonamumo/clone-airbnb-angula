import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      reserveDate: ['', [Validators.required, ]],
      description: ['', ],
    });
  }

  public reserve(): void {
    const dataReserve = this.formGroup.value;
    console.log('data reserve', dataReserve);
  }

}
