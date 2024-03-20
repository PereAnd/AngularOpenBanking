import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TipoTransaccion } from '../interfaces/tipoTransaccion.interface';

@Injectable({
  providedIn: 'root'
})
export class TipoTransaccionService {

  constructor(public http: HttpClient) { }

  getTipoTransacciones(){
    return this.http.get('http://localhost:3000/api/tipoTransaccion');
  }

  getTipoTransaccion(id:number){
    return this.http.get(`http://localhost:3000/api/tipoTransaccion/${id}`);
  }

  createTipoTransaccion(body:TipoTransaccion){
    return this.http.post('http://localhost:3000/api/tipoTransaccion', body);
  }

  updateTipoTransaccion(body: TipoTransaccion){
    return this.http.put(`http://localhost:3000/api/tipoTransaccion/${body.idTipo_Transaccion}`,body)
  }

  deleteTipoTransaccion(id:number){
    return this.http.delete(`http://localhost:3000/api/tipoTransaccion/${id}`);
  }

}
