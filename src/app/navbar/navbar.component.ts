import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  // links for btns
  links = [
      {
        text: 'Contact',
        link: '/contact'
      }, {
        text: 'Account',
        link: '/dashboard'
      }, {
        text: 'Extended',
        link: '/extended'
      }, {
        text: 'Today',
        link: '/today'
      },
    ];
  constructor() {}
  ngOnInit() {}

}
