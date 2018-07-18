import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  items = {};
  uids = [];
  images = {};
  editor = {
    edit: false,
    selected: null
  }

  constructor(private router: Router) {
    firebase.database().ref('products/').on('value', (snapshot) => {
      this.items = snapshot.val();
      this.uids = Object.keys(this.items);
      this.uids.forEach(uid => {
        var image = this.items[uid].image;
        firebase.storage().refFromURL('gs://oh-my-gah.appspot.com/' + image).getDownloadURL().then((url) => {
          this.images[uid] = url;
        });
      });
    });
  }

  add() {
    var timestamp = new Date().getTime(),
      ref = firebase.storage().ref(timestamp + '.jpeg'),
      imageElem = document.getElementById('base64').children[0],
      test = true;
    if (imageElem) {
      document.getElementById('image-label').style.color = '#767676';
      this.item.image = timestamp + '.jpeg';
      Object.keys(this.item).forEach(key => {
        var elem = document.getElementById(key + '-label');
        if (elem && !this.item[key]) {
          elem.style.color = '#FF0000';
          test = false;
        } else if (elem && this.item[key]) {
          elem.style.color = '#767676';
        }
      });
      if (test) {
        ref.putString(imageElem.getAttribute('src').toString(), 'data_url').then(() => {
          firebase.database().ref('/products/').push(this.item).then(() => {
            this.reset();
          });
        });
      }
    } else {
      document.getElementById('image-label').style.color = '#FF0000';
    }
  }

  edit(uid) {
    this.editor.edit = true;
    this.editor.selected = uid;
    this.item = this.items[uid];
  }

  reset() {
    this.router.navigate(['/', 'products']);
    this.item = {
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
    this.editor.edit = false;
    this.editor.selected = null;
    var elem = document.getElementById('remove-photo');
    if (elem) elem.click();
  }

  save() {
    firebase.database().ref('products/' + this.editor.selected).set(this.item).then(() => {
      this.reset();
    });
  }

  delete(uid) {
    firebase.database().ref('products/').child(uid).remove();
  }

  ngOnInit() { }

}
