import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Post, create } from "../post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "/posts";
  private apiURL2 = "https://test-api-met.herokuapp.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<any>(this.apiURL + '/stores')
      .pipe(
        map(resp => {
          return resp.stores;

        })
      )
  }



  create(post: create): Observable<any> {
    let url = this.apiURL + '/store/' + post.name;
    //console.log(post);
    //console.log(this.apiURL + '/store/', post.name);
    return this.httpClient.post<create>(url, post.name)
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
