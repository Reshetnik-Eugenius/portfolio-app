import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private httpClient: HttpClient) { }

  getRandomImage():Observable<any> {
    return this.httpClient.get(`https://dog.ceo/api/breeds/image/random`);
  }

}
