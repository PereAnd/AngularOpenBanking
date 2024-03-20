import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaccion } from '../interfaces/transaccion.interface'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {

  transferenciasArray: number[]=[1,2.3,4.5,5];

  constructor( private http: HttpClient) { 

  }
  getTransaccion(): Observable<Transaccion[]>{
    return this.http.get<Transaccion[]>('http://localhost:3000/api/transaccion');
  }

  createTransaccion(body: Transaccion){
    return this.http.post('http://localhost:3000/api/transaccion',body);
  }

/*
  obtenerTranferencias(){
    fetch('http://localhost:3000/api/transaccion')
    .then((response) => response.json())
    .then((json)=> console.log(json))
    .then((json) => {return json});
  }



  createPost(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      body: JSON.stringify({
        title: 'foo',
        body:'bar',
        userId: 1
      }),
      headers:{
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
    .then((response)=> response.json())
    .then((json)=> console.log(json));
  }*/
}


