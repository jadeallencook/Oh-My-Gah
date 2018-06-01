import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  item = {
    title: null,
    stock: null,
    price: null,
    id: null,
    description: null,
    featured: false,
    front: false,
    email: false,
    sale: false,
    image: null
  }
  image: any;
  base64: string;
  constructor() { }

  add() {
    console.log(this.image);
  }

  ngOnInit() {
  }

}
