import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JokesModel } from './jokes-model.model';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http: HttpClient) { }

  retrieveJokes(): Observable<JokesModel[]> {
    return this.http.get<any>('https://official-joke-api.appspot.com/random_joke');;
  }
}