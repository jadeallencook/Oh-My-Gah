import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firebase = firebase;
  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBO9zEf2ZiynpQWKMu2NB2LF7nv83qERw0",
      authDomain: "oh-my-gah.firebaseapp.com",
      databaseURL: "https://oh-my-gah.firebaseio.com",
      projectId: "oh-my-gah",
      storageBucket: "oh-my-gah.appspot.com",
      messagingSenderId: "191991113067"
    };
    firebase.initializeApp(config);
  }
}
