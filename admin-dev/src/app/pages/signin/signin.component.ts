import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email: string = '';
  password: string = '';
  error:string = '';

  constructor() { }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch((error) => {
      this.error = error.message;
    });
  }

  ngOnInit() {
  }

}
