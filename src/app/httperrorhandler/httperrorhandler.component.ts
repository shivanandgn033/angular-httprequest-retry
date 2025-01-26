import { Component, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { retry, catchError, delay } from 'rxjs/operators';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-httperrorhandler',
  imports: [CommonModule,JsonPipe],
  templateUrl: './httperrorhandler.component.html',
  styleUrl: './httperrorhandler.component.css'
})
export class HttperrorhandlerComponent {
data:any;
errorMesage:string|null =null;
http=inject(HttpClient);
private apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'; // Example API


   // A more basic retry example without custom logic
   fetchdata() {
    return this.http.get(this.apiUrl).pipe(
      retry(3), // retry 3 times by default
      catchError(this.handleError)
    ).subscribe({next:(response:any)=>{
      this.data=response;
    },error:(erro:any)=>{
       console.log('unhandled error',erro);}
    });
  }

private handleError(error: HttpErrorResponse) {
  console.log(error.status);
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(() => 'Something bad happened; please try again later.');
}




}
