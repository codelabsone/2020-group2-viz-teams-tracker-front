import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PicsumService {
  picsumUrl = 'https://picsum.photos/v2/list?page=2&limit=100'


  constructor(private http: HttpClient) { }

  getPictures(): Observable<any> {
    return this.http.get<any>(`${this.picsumUrl}`)
  }
}
