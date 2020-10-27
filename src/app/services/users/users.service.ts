import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ILogin } from 'src/app/shared/models/login.models';
import { ILoginResponse } from 'src/app/shared/models/loginResponse.models';
import { ISignup } from 'src/app/shared/models/signup.models';
import { ISignupResponse } from 'src/app/shared/models/signupResponse.models';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlAPI: string = ' https://bankairbnbapp.herokuapp.com';
  private serviceName: string = '/users';

  constructor(private httpCliente: HttpClient) { }

  private isLogged: boolean = false;

  public isLoggedUser(): boolean {
    this.isLogged = localStorage.getItem('token')? true: false;
    return this.isLogged;
  }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`);
  }

  public postSignup(signup: ISignup): Observable<ISignupResponse> {
    const url = `${this.urlAPI}${this.serviceName}/signup`;
    return this.httpCliente.post<ISignupResponse>(url, signup)
            .pipe(
              retry(2), catchError(this.handlerError)
            );
  }

  public postLogin(login: ILogin): Observable<ILoginResponse> {
    const url = `${this.urlAPI}${this.serviceName}/login`;
    return this.httpCliente.post<ILoginResponse>(url, login)
            .pipe(
              retry(2), catchError(this.handlerError)
            );
  }

}
