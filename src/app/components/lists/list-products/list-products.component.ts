import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EntidadFinanciera } from 'src/app/models/entidad-financiera';
import { TipoProductoF } from 'src/app/models/tipo-producto-f';
import { EntidadFinancieraService } from 'src/app/services/entidad-financiera.service';
import { ProductosFService } from 'src/app/services/productos-f.service';
import { SubtipoProducto } from 'src/app/models/subtipoProducto';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css'],
})
export class ListProductsComponent implements OnInit {
  @Input() mostrarSaldo!: boolean;
  @Input() clientId!: number;
  @Output() onProductSelected = new EventEmitter<any>();
  productsByClient: any[] = [];
  entitiesF: EntidadFinanciera[] = [];
  typesProducts: TipoProductoF[] = [];
  subtypesProducts: SubtipoProducto[] = [];

  constructor(
    private productosFService: ProductosFService,
    private entidadFinancieraService: EntidadFinancieraService
  ) {}

  ngOnInit(): void {
    this.entidadFinancieraService.getEntitiesF().subscribe({
      next: (entities) => {
        this.entitiesF = entities;
      },
    });
    this.productosFService.getTypesProduct().subscribe({
      next: (types) => {
        this.typesProducts = types;
      },
      error: (error) => {
        console.error(error);
      }
    })
    this.productosFService.getSubTypesProduct().subscribe({
      next: (subtypes) => {
        this.subtypesProducts = subtypes;
      },
      error: (error) => {
        console.error(error);
      }
    })
    this.productosFService.getProductsByClient(this.clientId).subscribe({
      next: (products) => {
        products.forEach((product) => {
          let entidadF = this.entitiesF.find(entity => entity.idEntidadFinanciera === product.idEntidadFinanciera)
          let subtipoProducto = this.subtypesProducts.find(subtypes => subtypes.idSubtipo_Producto === product.idSubtipo_Producto)// comparar la lista de subtipos productos con el id de subtipo de productos que tiene la entidad producto
          let tipoProducto = this.typesProducts.find(types => types.idTipo_Producto === subtipoProducto?.idTipo_Producto)//conseguir el tipo de producto por medio del subtipo de producto
          let montoProd = Math.floor(Math.random() * 10000000);
          let newProduct = { ...product, entidadF, subtipoProducto, tipoProducto, montoProd };
          console.log(newProduct)
          this.productsByClient.push(newProduct);
        });
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  setProductSelected(product: any) {
    this.onProductSelected.emit(product);
  }
}
