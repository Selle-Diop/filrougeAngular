import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComplementsService {
  private UrlComp = 'http://127.0.0.1:8000/api/complements';
  constructor(private htpp: HttpClient) { }
  
  getLesComplements(): Observable<any> {
    return this.htpp.get<any>(this.UrlComp);
  }
}
