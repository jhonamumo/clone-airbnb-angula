import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError }  from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { IExperience } from 'src/app/shared/models/experience.models';
import { IExperiencesResponse } from 'src/app/shared/models/experiencesResponse.model';
import { IExperienceTop5Response } from 'src/app/shared/models/experienceTop5Response.model';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  private urlAPI: string = 'https://bankairbnbapp.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  private handlerError(error: HttpErrorResponse) {
    console.error('Http error', error);
    return throwError(`Error calling api ${error.message}`);
  }

  public getExperiences(): Observable<IExperiencesResponse> {
    const url = `${this.urlAPI}/experiences`;
    return this.httpClient.get<IExperiencesResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperiencesTop5(): Observable<IExperienceTop5Response> {
    const url = `${this.urlAPI}/experiences/top5`;
    return this.httpClient.get<IExperienceTop5Response>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }

  public getExperienceById (id: string): Observable<IExperiencesResponse> {
    const url = `${this.urlAPI}/experiences/detail/${id}`;
    return this.httpClient.get<IExperiencesResponse>(url).pipe(
      retry(2), catchError(this.handlerError)
    );
  }
}
