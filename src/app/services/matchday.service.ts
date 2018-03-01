import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MatchdayService {

  constructor(private http: HttpClient) { }

}
