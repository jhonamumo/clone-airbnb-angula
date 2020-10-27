import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IBooking } from 'src/app/shared/models/booking.models';
import { IBookingResponse } from 'src/app/shared/models/bookingResponse.models';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  private urlAPI: string = 'https://bankairbnbapp.herokuapp.com';

  constructor(private httpCliente: HttpClient) { }

  private handlerError(error: HttpErrorResponse){
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`);
  }

  public postReserve(reserve: IBooking): Observable<IBookingResponse> {
    const url = `${this.urlAPI}/booking`;
    return this.httpCliente.post<IBookingResponse>(url, reserve)
            .pipe(
              retry(2), catchError(this.handlerError)
            );
  }

}
