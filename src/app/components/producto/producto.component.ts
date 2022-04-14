import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent {

  @Input() producto!: Producto;
  @Output() addProduct = new EventEmitter<Producto>();

  constructor() { }

  addToShoppingCart(p: Producto): void {
    this.addProduct.emit(p);
  }

}
