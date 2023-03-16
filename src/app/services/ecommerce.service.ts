import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ECommerceService {
  constructor(
    private http: HttpClient
  ) { }

  public getSales(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/f9942c71-b172-4060-4381-08da496bf5f2");
  }

  public getRevenue(): Observable<any> {
    return this.http.get("https://excel2json.io/api/share/03e74dde-d2e1-4fee-437d-08da496bf5f2");
  }
}
