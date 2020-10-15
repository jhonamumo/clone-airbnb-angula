import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.scss']
})
export class FormRegisterComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit();
  }

  private formInit(): void {
   this.formGroup = this.formBuilder.group({
     name: ['', Validators.required],
     phone: ['', Validators.required],
     email: ['', [Validators.required, Validators.email]],
     password: ['', [Validators.required, Validators.maxLength(4)]],
   });
  }

  public register(): void{
    const data = this.formGroup.value;
    console.log('data resgister', data)
  }

}
