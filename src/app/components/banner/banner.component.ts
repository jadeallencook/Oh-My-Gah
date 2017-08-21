import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  ProductName:string = 'Winged Horse';
  BannerCaption:string = 'This is the center piece you\'ve been looking for!';

  constructor() {
  }

  ngAfterViewInit() {
      let ImageURL: string = 'assets/img/products/winged-horse.jpg';
      let BannerElement = document.getElementById('homepage-banner-wrapper');
      BannerElement.style.backgroundImage = 'url("' + ImageURL + '")';
  }

  ngOnInit() {
  }

}
