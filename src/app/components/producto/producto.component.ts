import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() producto!: Producto;

  constructor() {

  }

  ngOnInit(): void {
    console.log('this.producto', this.producto)
  }

}
