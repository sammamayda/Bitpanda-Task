import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cryptocoin, Fiat, Commodity, Index, Response } from './Response';

import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/internal/Observable';

 import { throwError } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="master-data";
  url = `https://api.bitpanda.com/v1/masterdata`;
  response:Response;
  cryptocoins:Cryptocoin[];
  fiats:Fiat[];
  commodities:Commodity[];
  indexes:Index[];


  constructor(private http: HttpClient) {
  }

  getResponse(): Observable<Response>{
    return this.http.get<Response[]>(this.url)
                    .pipe(tap(data => data) , catchError(null))
  }

errorHandler(error: HttpErrorResponse){
return throwError(error.message || "Server Error")
  }

}
