import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { TipoProductoF } from '../models/tipo-producto-f';
import { ProductoF } from '../models/producto-f';
import { Transaction } from '../models/transaction';
import { SubtipoProducto } from '../models/subtipoProducto';
import { DetallesSolicitudP } from '../models/detallesSolicitudP';



@Injectable({
  providedIn: 'root',
})
export class ProductosFService {
  baseUrl: string = environment.URL_BACKEND;

  constructor(private httpClient: HttpClient) {}

  getHeaders(): HttpHeaders {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    });
    return headers;
  }

  getTypesProduct(): Observable<TipoProductoF[]> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/tipoProducto`;
    return this.httpClient.get<TipoProductoF[]>(url, { headers: headers });
  }

  getSubTypesProduct(): Observable<SubtipoProducto[]> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/subtipoProducto`;
    return this.httpClient.get<SubtipoProducto[]>(url, {headers: headers })
  }

  getTypeProductById(typeProductId: number): Observable<TipoProductoF> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/tipoProducto/${typeProductId}`;
    return this.httpClient.get<TipoProductoF>(url, { headers: headers });
  }

  getSubTypeProductById(subtypeProductId: number): Observable<SubtipoProducto> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/subtipoProducto/${subtypeProductId}`;
    return this.httpClient.get<SubtipoProducto>(url, { headers: headers });
  }

  createProductF(product: ProductoF): Observable<ProductoF> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/producto`;
    console.log("Este es el producto desde el sevicio: ",product);
    return this.httpClient.post<ProductoF>(url, product, { headers: headers });
  }
  getProductById(productId: number): Observable<ProductoF> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/producto/${productId}`;
    return this.httpClient.get<ProductoF>(url, { headers: headers });
  }
  getProductByIdAccount(productId: number): Observable<ProductoF> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/producto/${productId}`;
    return this.httpClient.get<ProductoF>(url, { headers: headers });
  }

  getProductsByClient(clientId: number): Observable<ProductoF[]> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/producto/user/${clientId}`;
    return this.httpClient.get<ProductoF[]>(url, { headers: headers });
  }

  getTransactionsByProduct(productId: number): Observable<Transaction[]> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/transaccion/product/${productId}`;
    return this.httpClient.get<Transaction[]>(url, { headers: headers });
  }

  getRequestDetails(): Observable<DetallesSolicitudP[]> {
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/detallesSolicitud`;
    return this.httpClient.get<DetallesSolicitudP[]>(url, { headers: headers });
  }
  getRequestDetailById(RequestDetailId: number): Observable<DetallesSolicitudP>{
    let headers = this.getHeaders();
    let url = `${this.baseUrl}/detallesSolicitud/${RequestDetailId}`;
    return this.httpClient.get<DetallesSolicitudP>(url, { headers: headers });
  }
}
