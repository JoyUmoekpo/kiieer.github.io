import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../shared/users';
import { Reservations } from '../shared/reservations';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { FilterReservations } from './filterreservations';
@Injectable({
  providedIn: 'root',
})
export class RestApiService {
  // Define API
  apiURL = 'http://localhost:8081';
  constructor(private http: HttpClient) {}
  /*========================================
    CRUD Methods for consuming RESTful API
  =========================================*/
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  // HttpClient API get() method => Fetch employees list
  // getEmployees(): Observable<Employee> {
  //   return this.http
  //     .get<Employee>(this.apiURL + '/employees')
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // HttpClient API get() method => Fetch employee
  // getEmployee(id: any): Observable<Employee> {
  //   return this.http
  //     .get<Employee>(this.apiURL + '/employees/' + id)
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // HttpClient API post() method => Create employee
  createUser(user: any): Observable<Users> {
    return this.http
      .post<Users>(
        this.apiURL + '/user',
        JSON.stringify(user),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }
  // HttpClient API put() method => Update employee
    loginUser(username: any, password: any): Observable<Users[]>{
      var array = this.http
          .get<Users[]>(this.apiURL + '/user/' + username + '/' + password)
          .pipe(retry(1), catchError(this.handleError));
        return array;
    }

    getId(username: any, password: any): Observable<string>{
      let url = this.apiURL + '/id/' + username + '/' + password;
      var array = this.http
          .get(url, {responseType: 'text'})
          .pipe(retry(1), catchError(this.handleError));
          return array;
    }

    getReservations(): Observable<FilterReservations> {
      let Uid = sessionStorage.getItem('id');
      console.log(Uid);
    return this.http
      .get<FilterReservations>(this.apiURL + '/reserve/' + Uid)
      .pipe(retry(1), catchError(this.handleError));
  }

  createReservation(reservation: any): Observable<Reservations> {
    let Uid = sessionStorage.getItem('id')
    return this.http
      .post<Reservations>(
        this.apiURL + '/post/' + Uid + '/reserve',
        JSON.stringify(reservation),
        this.httpOptions
      )
      .pipe(retry(1), catchError(this.handleError));
  }

  // // HttpClient API delete() method => Delete employee
  // deleteEmployee(id: any) {
  //   return this.http
  //     .delete<Employee>(this.apiURL + '/employees/' + id, this.httpOptions)
  //     .pipe(retry(1), catchError(this.handleError));
  // }
  // Error handling

  
  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}