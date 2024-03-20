import { Injectable } from '@angular/core';
import { HttpClientModule } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagosService {

  constructor() { }

  pagosArray: number[] = [2,4,5,7,4,5,6,7,8,9,4,4,2,3,4,5,4];

  add(valor:number){
    this.pagosArray.push(valor);
  }
  
}
