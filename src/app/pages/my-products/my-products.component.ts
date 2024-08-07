import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css'],
})
export class MyProductsComponent implements OnInit {
  categorySelected: TipoProductoF = {} as TipoProductoF;
  txtFilterProduct: string = '';
  txtCategorySelected: string ='';
  user: Cliente = {} as Cliente;
  routes = {
    back: '/dashboard',
    help: '/help',
    transactions: '/products/transactions',
    addProduct: '',
  };

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    localStorage.removeItem('product');
  }
//texto en el cuadro de busqueda el cual se pasa por parametro como string
  setTxTFilterProduct(filter: string) {
    this.txtFilterProduct = filter;
  }

  setProductSelected(product: any) {
    localStorage.setItem('product', JSON.stringify(product));
    this.goToPage(this.routes.transactions);
  }
// viene de list- category en donde se seleccionan las categorias del menú y es de tipo producto
  setCategorySelected(category: TipoProductoF) {
    this.categorySelected = category;
    this.txtCategorySelected = category.nombreTipo
  }
  setTxtCategorySelected(filter:string){
    this.txtCategorySelected=this.categorySelected.nombreTipo
    filter=this.txtCategorySelected
  }
  goToPage(page: string) {
    this.router.navigate([page]);
  }
}
