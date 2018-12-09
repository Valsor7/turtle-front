import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {


  constructor(private httpClient: HttpClient) {
    console.log('http init');
  }

  sendUpdates(data: { message, lang }): Observable<any> {
    console.log('updates ', data);
    return this.httpClient.post('http://6c23a315.ngrok.io/updates', data, {
      headers: {'Content-Type': 'application/json'},
    });
  }
}
