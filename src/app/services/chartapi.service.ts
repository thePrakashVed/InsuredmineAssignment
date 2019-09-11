
import { Injectable } from '@angular/core';
import { Urls } from '../urls/Urls'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept-Language': 'English'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ChartapiService {

   postData = {"from":"2019-08-10", "to":"2019-08-11"}
  constructor(private http: HttpClient) {
    console.log(Urls.apiUrl)
    
   }
   getChartData() {
    return Observable.create(observer => {
      this.http
        .post(Urls.apiUrl, this.postData, httpOptions)
        .pipe(catchError(error => this.handleError(error)))
        .subscribe(
          data => {
            observer.next(data);
            observer.complete();
          },
          error => {
            observer.error(error);
            observer.complete();
          }
        );
    });
  }

  private async handleError(error: Response | any) {
    if (error.statusText === 'Unknown Error') {
      console.log('Unknown Error');
    }
  }
}
