import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Producto[] = [];
  private myCart = new BehaviorSubject<Producto[]>([]);
  public myCart$ = this.myCart.asObservable();

  constructor() { }

  addProducto(producto: Producto): void {
    this.myShoppingCart.push(producto);
    this.myCart.next(this.myShoppingCart);
  }

}
