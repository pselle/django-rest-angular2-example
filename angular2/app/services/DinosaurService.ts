import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DinosaurService {
  private apiURL = 'http://localhost:8000/dinos';

  constructor(private http: Http) { }

  getDinos() {
    return this.http.get(this.apiURL)
              .toPromise()
              .then(response => response.json().data)
              .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}