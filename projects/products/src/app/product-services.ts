import { Injectable, signal, WritableSignal } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServices {
  activeProduct: WritableSignal<any> = signal(null);
  baseUrl = environment._WEBGATEWAY_BASIC_URL_;
  constructor(private http: HttpClient) {}

  getAllProducts(): Observable<any> {
    const url = `${this.baseUrl}api/products`;
    return this.http.get(url, { observe: 'response' });
  }
}
