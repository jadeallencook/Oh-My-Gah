import { Component } from '@angular/core';

@Component({
  selector: 'app-last-chance',
  templateUrl: './last-chance.component.html',
  styleUrls: ['./last-chance.component.css']
})
export class LastChanceComponent {

  // create [] of verbs
  ReturnVerb() {
    let verbs = ['Now Only', 'For Only', 'Lowered To', 'Get It For', 'Buy It For', 'Available For'];
    let verb = verbs[Math.floor(Math.random() * verbs.length)]
    return verb;
  }
  Verbs = [];

  // cache list of products
  LastChanceProducts = [
    {
      ImageURL: 'assets/img/products/desk-in-barn.jpg',
      Price: 49.99,
      Title: 'Rustic Desk'
    }, {
      ImageURL: 'assets/img/products/chair.jpg',
      Price: 109.99,
      Title: 'Chair Set'
    }, {
      ImageURL: 'assets/img/products/clips.jpg',
      Price: 9.99,
      Title: 'Aged Clips'
    }, {
      ImageURL: 'assets/img/products/container.jpg',
      Price: 12.99,
      Title: 'Feed Container'
    }, {
      ImageURL: 'assets/img/products/tray.jpg',
      Price: 10.99,
      Title: 'Vintage Tray'
    }, {
      ImageURL: 'assets/img/products/frame.jpg',
      Price: 15.99,
      Title: 'Photo Frame'
    }
  ];

  constructor() {
    // cache needed verbs
    for (let i = 0, max = this.LastChanceProducts.length; i < max; i++) this.Verbs.push(this.ReturnVerb())
  }

  ngAfterViewInit() {
    // attach images to products
    for (let i = 0, max = this.LastChanceProducts.length; i < max; i++) document.getElementById('product-image-' + i).style.backgroundImage = 'url("' + this.LastChanceProducts[i].ImageURL + '")';
  }

}
