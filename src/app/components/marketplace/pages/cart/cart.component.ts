import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { MarketplaceService } from '../../services/marketplace.service';
import { Ecommerce } from 'src/app/models/ecommerce';
import { EcommercesService } from 'src/app/services/ecommerces.service';
import { LocalizacionService } from 'src/app/services/localizacion.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  marketplace: any = {};
  carrito: any[] = [];
  ipUser: string = '';
  total: number = 0;
  routes = {
    back: '/ecommerce',
    login: '/login',
  };

  constructor(private ecommerceService: EcommercesService, private localizationService: LocalizacionService) {}

  ngOnInit(): void {
    this.marketplace = JSON.parse(localStorage.getItem('marketplace')!) || {};
    const reqComercios = this.ecommerceService.getEcommerces();
    const reqIp = this.localizationService.getIPAddress();
    forkJoin([reqComercios, reqIp]).subscribe({
      next: ([ecommerces, ip]) => {
        const ecommerceId = Math.floor(Math.random() * ecommerces.length);
        const comercio = ecommerces[ecommerceId];

        this.marketplace.destinoPago = comercio;
        this.marketplace.motivo = 'Compra de productos en ' + comercio.nombre;
        this.marketplace.ipUser = ip;
        localStorage.setItem('marketplace', JSON.stringify(this.marketplace));
      }
    });
    this.carrito = this.marketplace.cart || [];
    this.calcularTotal();
  }
  restarCantidad(producto: Product) {
    let productCard = this.carrito.find((p: Product) => p.id === producto.id);
    if (productCard.quantity > 0) productCard.quantity--;
    this.calcularTotal();
  }
  sumarCantidad(producto: Product) {
    let productCard = this.carrito.find((p: Product) => p.id === producto.id);
    productCard.quantity++;
    this.calcularTotal();
  }
  calcularTotal() {
    this.total = 0;
    this.carrito.forEach((p: any) => {
      if (p.quantity === 0) this.carrito.splice(this.carrito.indexOf(p), 1);
      this.total += p.price * p.quantity;
    });
    this.marketplace.cart = this.carrito;
    this.marketplace.total = this.total.toString();
    localStorage.setItem('marketplace', JSON.stringify(this.marketplace));
  }
}
