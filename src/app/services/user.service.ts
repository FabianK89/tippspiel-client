import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

  userURL: string;

  constructor(private http: HttpClient) {
    this.userURL = '././assets/data/json/user.json';
  }

  getUser(): Observable<User> {
    return this.http.get<User>(this.userURL);
  }
}
