import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  public productos: Producto[] = [
    {
      id: 1,
      name: 'Automobil de juguete',
      precio: 100,
      image: 'https://static3.depositphotos.com/1000865/118/i/600/depositphotos_1183767-stock-photo-toy-car.jpg'
    },
    {
      id: 2,
      name: 'Muñeca de trapo',
      precio: 180,
      image: 'https://kinuma.com/8869-home_default/muneca-de-trapo-mali.jpg'
    },
    {
      id: 3,
      name: 'Pelota de futbol',
      precio: 120,
      image: 'https://media.istockphoto.com/photos/soccer-ball-isolated-3d-rendering-picture-id1257575611?k=20&m=1257575611&s=612x612&w=0&h=g530fFJspT42xFGY7HycLvpBKLXpJ2XAkKCRyY-SK80='
    },
    {
      id: 4,
      name: 'Castillo',
      precio: 220,
      image: 'https://i.imgur.com/44nzvkQ.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.productos)
  }

}
