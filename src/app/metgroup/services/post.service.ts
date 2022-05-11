import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Post } from "../post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "https://test-api-met.herokuapp.com/";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiURL + '/stores')
      .pipe(
        catchError(this.errorHandler)
      )
  }





  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
