import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users/users.service';
import { ILogin } from 'src/app/shared/models/login.models';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  public formGroup: FormGroup;
  private tokenkey: string = 'token';

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.formLoginInit();
  }

  private formLoginInit(): void {
    this.formGroup = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(20)]]
    });
  }

  private store(content: string): void {
    localStorage.setItem(this.tokenkey, content);
  }
    
  public login(): void{
    const dataLogin: ILogin = this.formGroup.value;
    this.usersService.postLogin(dataLogin).subscribe(response => {
      if(response.status === 1){
        let token: string = response.token;
        this.store(token);
        this.router.navigate(['/home']);
      }
    });
    // console.log('data Login', dataLogin);
  }


}
