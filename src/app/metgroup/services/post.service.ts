import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { Post } from "../post";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = "/posts";

  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }


  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Post[]> {
    return this.httpClient.get<any>(this.apiURL + '/stores')
      .pipe(
        map(resp => {
          return resp.stores;

        })
      )
  }


  //   this.apiService.getTest().pipe(
  //   map((data: any) => {
  //     data.Data = data.Data.map((item: any) => ({
  //       projectName: item['Project Name'],
  //       projectCode: item.PCode
  //     });
  //     return data;
  //   })
  // ).subscribe((data: any) => this.projects = data.Data);


  cargarUsuarios() {
    const url = 'https://reqres.in/api/users';

    return this.httpClient.get<any>(url)
      .pipe(
        map(resp => {
          return resp.data;

        })
      );

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
