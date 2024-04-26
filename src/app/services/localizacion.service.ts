import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Ciudad } from '../models/ciudad';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class LocalizacionService {
  baseUrl: string = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }

  getIPAddress() {
    return this.httpClient.get('https://api.ipify.org?format=json').pipe(
      map((response: any) => response.ip),
      catchError((error) => {
        console.error('Error al obtener la dirección IP:', error);
        return of('');
      })
    );
  }

  getCiudades(): Observable<Ciudad[]> {
    let headers = this.getHeaders();
    let url = this.baseUrl + '/ciudad';
    return this.httpClient.get<Ciudad[]>(url, { headers: headers });
  }
}
