import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {

  FeaturedProducts = [
    {
      PercentOff: 50,
      FeaturedMsg: ['METAL SWAN', 'COLLECTION'],
      Link: '#',
      ImageURL: 'assets/img/products/geese.jpg'
    }, {
      PercentOff: 60,
      FeaturedMsg: ['SCENTED', 'CANDLES'],
      Link: '#',
      ImageURL: 'assets/img/products/candles.jpg'
    }
  ];

  constructor() { }

  ngAfterViewInit() {
    for (let i = 0; i < 2; i++) document.getElementById('featured-product-' + (i + 1)).style.backgroundImage = 'url("' + this.FeaturedProducts[i].ImageURL + '")';
  }

  ngOnInit() {

  }

}
