import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { IData } from './IData';
import { IResult } from './IResult';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from './app.config'

@Injectable()
export class OperationServiceService {
 
  private _url = 'math/add';

  private options: RequestOptions;
  private headers: Headers;

  getResult(inputData: IData): Observable<IResult> {
    let params: URLSearchParams = new URLSearchParams();
    for (var key in inputData) {
        if (inputData.hasOwnProperty(key)) {
            let val = inputData[key];
            params.set(key, val);
        }
    }
    this.options = new RequestOptions({ headers: this.headers, search: params });
    console.log(this.appConfig.appUrl + this._url);

    return this.http.post(this.appConfig.appUrl + this._url, inputData, this.options)
              .map((response: Response) => response.json())
              .do(data => console.log('All: ' + JSON.stringify(data)))
              .catch(this.handleError);
  }

  private handleError(error: Response) {
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
  }

  constructor(private http: Http, private appConfig: AppConfig) {
        this.headers = new Headers({ 'Content-Type': 'application/json', 
                                     'Accept': 'q=0.8;application/json;q=0.9' });
        this.options = new RequestOptions({ headers: this.headers });
    }

}
