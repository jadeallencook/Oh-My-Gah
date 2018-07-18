webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "section.wrapper {\n    max-width: 1000px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"container\">\n  <app-navbar></app-navbar>\n  <section id=\"main-content\">\n    <section class=\"wrapper\">\n      <router-outlet *ngIf=\"firebase.auth().currentUser\"></router-outlet>\n      <app-signin *ngIf=\"!firebase.auth().currentUser\"></app-signin>\n    </section>\n  </section>\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.firebase = __WEBPACK_IMPORTED_MODULE_1_firebase__;
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBO9zEf2ZiynpQWKMu2NB2LF7nv83qERw0",
            authDomain: "oh-my-gah.firebaseapp.com",
            databaseURL: "https://oh-my-gah.firebaseio.com",
            projectId: "oh-my-gah",
            storageBucket: "oh-my-gah.appspot.com",
            messagingSenderId: "191991113067"
        };
        __WEBPACK_IMPORTED_MODULE_1_firebase__["initializeApp"](config);
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_products_products_component__ = __webpack_require__("./src/app/pages/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__ = __webpack_require__("./src/app/pages/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_overview_overview_component__ = __webpack_require__("./src/app/components/overview/overview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_last30_last30_component__ = __webpack_require__("./src/app/components/last30/last30.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_new_product_new_product_component__ = __webpack_require__("./src/app/components/new-product/new-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin_component__ = __webpack_require__("./src/app/pages/signin/signin.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_5__pages_products_products_component__["a" /* ProductsComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__pages_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_overview_overview_component__["a" /* OverviewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_last30_last30_component__["a" /* Last30Component */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_new_product_new_product_component__["a" /* NewProductComponent */],
                __WEBPACK_IMPORTED_MODULE_11__pages_signin_signin_component__["a" /* SigninComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/last30/last30.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/last30/last30.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <div class=\"col-md-12\">\n\n    <div class=\"widget\">\n      <div class=\"widget-header bg-white\">\n        <h3 class=\"fg-gray\">Last 30 Days</h3>\n      </div>\n      <div class=\"widget-content bg-white\">\n\n        <div class=\"row\">\n\n          <div class=\"col-md-12 col-sm-12 col-xs-12\">\n            <div>\n              <div class=\"top-profiles-wrapper\">\n\n                <ul class=\"list-unstyled top_profiles\">\n                  <li class=\"media event\">\n\n                    <div class=\"pull-left thumbnail-hover margin-left-28\">\n                      <div class=\"overflow-hidden\">\n                        <img src=\"../../assets/images/users/img3.jpg\" width=\"80\" alt=\"image\" />\n                      </div>\n                    </div>\n                    <div class=\"media-body\">\n                      <a class=\"title\" href=\"#\">John Smith</a>\n                      <p>\n                        <strong>$120.00 </strong>\n                      </p>\n                      <p>1/1/18</p>\n                      <p>\n                        <small>3 Items</small>\n                      </p>\n                    </div>\n                  </li>\n\n                </ul>\n\n              </div>\n              <!--/.top-profiles-wrapper-->\n\n            </div>\n          </div>\n          <!--/.col-md-4-->\n\n        </div>\n        <!--/row-->\n\n      </div>\n      <!--/widget-content-->\n    </div>\n    <!--/widget-->\n\n  </div>\n  <!--/.col-md-12-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/last30/last30.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Last30Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Last30Component = /** @class */ (function () {
    function Last30Component() {
    }
    Last30Component.prototype.ngOnInit = function () {
    };
    Last30Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-last30',
            template: __webpack_require__("./src/app/components/last30/last30.component.html"),
            styles: [__webpack_require__("./src/app/components/last30/last30.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Last30Component);
    return Last30Component;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header fixed-top clearfix\">\n\n  <!--logo start-->\n  <div class=\"brand\">\n\n    <a routerLink=\"home\" class=\"logo\">\n      Oh My Gah\n    </a>\n    <div class=\"sidebar-toggle-box\">\n      <div class=\"fa fa-bars\"></div>\n    </div>\n  </div>\n</header>\n<!--header end-->\n\n<!--sidebar start-->\n<aside>\n  <div id=\"sidebar\" class=\"nav-collapse md-box-shadowed\">\n    <!-- sidebar menu start-->\n    <div class=\"leftside-navigation leftside-navigation-scroll\">\n      <ul class=\"sidebar-menu\" id=\"nav-accordion\">\n        <li class=' '>\n          <a routerLink=\"/home\" class=\"hvr-bounce-to-right-sidebar-parent\">\n            <span class='icon-sidebar icon-home fa-2x'></span>\n            <span>Dashboard</span>\n          </a>\n        </li>\n        <li class=' '>\n          <a routerLink=\"/products\" class=\"hvr-bounce-to-right-sidebar-parent\">\n            <span class='icon-sidebar icon-basket-loaded fa-2x'></span>\n            <span>Products</span>\n          </a>\n        </li>\n        <li class=' '>\n          <a routerLink=\"/orders\"class=\"hvr-bounce-to-right-sidebar-parent\">\n            <span class='icon-sidebar icon-book-open fa-2x'></span>\n            <span>Orders</span>\n          </a>\n        </li>\n        <li class=' '>\n          <a class=\"hvr-bounce-to-right-sidebar-parent\" (click)=\"firebase.auth().signOut()\">\n            <span class='icon-sidebar icon-logout fa-2x'></span>\n            <span>Logout</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <!-- sidebar menu end-->\n  </div>\n</aside>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
        this.firebase = __WEBPACK_IMPORTED_MODULE_1_firebase__;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/new-product/new-product.component.css":
/***/ (function(module, exports) {

module.exports = "div#product-form input {\n  color: #000;\n}\n\na#remove-photo {\n  margin-top: 15px;\n}\n\nimg#image-preview {\n  max-width: 75%;\n}\n\ndiv.image-preview {\n  height: 150px;\n  padding-top: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  background-size: cover;\n  background-position: center center;\n}\n"

/***/ }),

/***/ "./src/app/components/new-product/new-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"c_panel\" style=\"margin-top: 50px;\">\n\n  <div class=\"c_title bg-wet-asphalt padding-top-20 padding-bottom-20\">\n    <h2>\n      <strong>New Product</strong>\n    </h2>\n    <div class=\"clearfix\"></div>\n  </div>\n  <!--/.c_title-->\n\n  <div class=\"c_content\" id=\"product-form\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" id=\"title-label\">Title *</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"Scented Candles\" [(ngModel)]=\"item.title\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" id=\"stock-label\">Stock *</label>\n          <input type=\"number\" class=\"form-control\" placeholder=\"100\" [(ngModel)]=\"item.stock\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" id=\"price-label\">Price *</label>\n          <input type=\"number\" class=\"form-control\" placeholder=\"8.99\" [(ngModel)]=\"item.price\">\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" id=\"id-label\">ID</label>\n          <input type=\"text\" class=\"form-control\" placeholder=\"ID12345\" [(ngModel)]=\"item.id\">\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"row\" style=\"padding-left: 25px;\">\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" name=\"label-name\" [(ngModel)]=\"item.featured\"> Featured\n            </label>\n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" name=\"label-name\" [(ngModel)]=\"item.front\"> Front Page\n            </label>\n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" name=\"label-name\" [(ngModel)]=\"item.email\"> Email Blast\n            </label>\n          </div>\n          <div class=\"checkbox\">\n            <label>\n              <input type=\"checkbox\" name=\"label-name\" [(ngModel)]=\"item.sale\"> On Sale (50% Off)\n            </label>\n          </div>\n        </div>\n        <br />\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" id=\"image-label\">Image *</label>\n          <img id=\"image-preview\" *ngIf=\"editor.edit\" src=\"{{images[editor.selected]}}\" class=\"thumbnail\" alt=\"\">\n          <div *ngIf=\"!editor.edit\" class=\"fileupload fileupload-new\" data-provides=\"fileupload\">\n            <div class=\"fileupload-preview fileupload-exists thumbnail\" id=\"base64\" style=\"max-width: 200px; max-height: 150px; line-height: 20px;\"></div>\n            <div>\n              <input type=\"file\" id=\"image-upload\" style=\"display: inline-block;\" [(ngModel)]=\"image\">\n              <a href=\"#\" class=\"btn btn-danger fileupload-exists\" id=\"remove-photo\" data-dismiss=\"fileupload\">\n                <i class=\"fa fa-trash\"></i> Remove</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-12\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" id=\"description-label\">Description *</label>\n          <textarea class=\"form-control autosize-animated\" placeholder=\"Product description\" style=\"max-width: 100%;\" [(ngModel)]=\"item.description\"></textarea>\n        </div>\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"button\" *ngIf=\"editor.edit\" class=\"btn btn-wet-asphalt btn-flat\" (click)=\"save()\">Save Changes</button>\n      <button type=\"button\" *ngIf=\"!editor.edit\" class=\"btn btn-wet-asphalt btn-flat\" (click)=\"add()\">Add To Site</button>\n    </div>\n  </div>\n  <!--/.c_content-->\n\n</div>\n\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\" *ngFor=\"let uid of uids\">\n    <div class=\"widget user-view-style-1\">\n      <div class=\"thumbnail\">\n        <div class=\"image-preview\" [style.backgroundImage]=\"'url(' + images[uid] + ')'\">\n          <div class=\"user-info\">\n            <p class=\"user-name\">{{items[uid].title}}</p>\n            <p class=\"user-type administrator\">\n              <span class=\"badge\">${{items[uid].price}}</span>\n            </p>\n          </div>\n        </div>\n        <div class=\"caption\">\n          <div class=\"user-task-info\">\n            {{items[uid].description}}\n          </div>\n          <div class=\"user-other-info\">\n            <ul>\n              <li>\n                <b>Stock</b>\n                <span>{{items[uid].stock}}</span>\n              </li>\n              <li>\n                <b>Front</b>\n                <span>{{items[uid].front}}</span>\n              </li>\n              <li>\n                <b>Featured</b>\n                <span>{{items[uid].featured}}</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"user-action\">\n            <button (click)=\"edit(uid)\" type=\"button\" class=\"btn btn-green btn-flat btn-sm\" data-toggle=\"modal\" data-target=\"#modal-pull-right-view\">\n              Edit\n            </button>\n            <button (click)=\"delete(uid)\" type=\"button\" class=\"btn btn-danger btn-flat btn-sm\" data-toggle=\"modal\" data-target=\"#modal-pull-right-view\">\n              Delete\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--/widget-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/new-product/new-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewProductComponent = /** @class */ (function () {
    function NewProductComponent(router) {
        var _this = this;
        this.router = router;
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
        };
        this.items = {};
        this.uids = [];
        this.images = {};
        this.editor = {
            edit: false,
            selected: null
        };
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('products/').on('value', function (snapshot) {
            _this.items = snapshot.val();
            _this.uids = Object.keys(_this.items);
            _this.uids.forEach(function (uid) {
                var image = _this.items[uid].image;
                __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().refFromURL('gs://oh-my-gah.appspot.com/' + image).getDownloadURL().then(function (url) {
                    _this.images[uid] = url;
                });
            });
        });
    }
    NewProductComponent.prototype.add = function () {
        var _this = this;
        var timestamp = new Date().getTime(), ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref(timestamp + '.jpeg'), imageElem = document.getElementById('base64').children[0], test = true;
        if (imageElem) {
            document.getElementById('image-label').style.color = '#767676';
            this.item.image = timestamp + '.jpeg';
            Object.keys(this.item).forEach(function (key) {
                var elem = document.getElementById(key + '-label');
                if (elem && !_this.item[key]) {
                    elem.style.color = '#FF0000';
                    test = false;
                }
                else if (elem && _this.item[key]) {
                    elem.style.color = '#767676';
                }
            });
            if (test) {
                ref.putString(imageElem.getAttribute('src').toString(), 'data_url').then(function () {
                    __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/products/').push(_this.item).then(function () {
                        _this.reset();
                    });
                });
            }
        }
        else {
            document.getElementById('image-label').style.color = '#FF0000';
        }
    };
    NewProductComponent.prototype.edit = function (uid) {
        this.editor.edit = true;
        this.editor.selected = uid;
        this.item = this.items[uid];
    };
    NewProductComponent.prototype.reset = function () {
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
        };
        this.editor.edit = false;
        this.editor.selected = null;
        var elem = document.getElementById('remove-photo');
        if (elem)
            elem.click();
    };
    NewProductComponent.prototype.save = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('products/' + this.editor.selected).set(this.item).then(function () {
            _this.reset();
        });
    };
    NewProductComponent.prototype.delete = function (uid) {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('products/').child(uid).remove();
    };
    NewProductComponent.prototype.ngOnInit = function () { };
    NewProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-new-product',
            template: __webpack_require__("./src/app/components/new-product/new-product.component.html"),
            styles: [__webpack_require__("./src/app/components/new-product/new-product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], NewProductComponent);
    return NewProductComponent;
}());



/***/ }),

/***/ "./src/app/components/overview/overview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/overview/overview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row top-page-header\">\n\n<div class=\"col-md-3\">\n\n  <div class=\"widget\">\n    <div class=\"widget-content bg-white\">\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <h3 class=\"counter font-bold font-size-38\">0</h3>\n        </div>\n        <div class=\"col-xs-6\">\n          <p class=\"font-size-38\">\n            <span class=\"icon-people pull-right\"></span>\n          </p>\n        </div>\n      </div>\n      <p>Users Registered</p>\n      <div class=\"progress progress-xs\">\n        <div class=\"progress-bar bg-green\" role=\"progressbar\" data-transitiongoal=\"74\"></div>\n      </div>\n    </div>\n    <!--/widget-content-->\n  </div>\n  <!--/widget-->\n\n</div>\n\n<div class=\"col-md-3\">\n\n  <div class=\"widget\">\n    <div class=\"widget-content bg-white\">\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <h3 class=\"counter font-bold font-size-38\">0</h3>\n        </div>\n        <div class=\"col-xs-6\">\n          <p class=\"font-size-38\">\n            <span class=\"icon-user-follow pull-right\"></span>\n          </p>\n        </div>\n      </div>\n      <p>Subscribers Request</p>\n      <div class=\"progress progress-xs\">\n        <div class=\"progress-bar bg-green-sea\" role=\"progressbar\" data-transitiongoal=\"57\"></div>\n      </div>\n    </div>\n    <!--/widget-content-->\n  </div>\n  <!--/widget-->\n\n\n</div>\n\n<div class=\"col-md-3\">\n\n  <div class=\"widget\">\n    <div class=\"widget-content bg-white\">\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <h3 class=\"counter font-bold font-size-38\">0</h3>\n        </div>\n        <div class=\"col-xs-6\">\n          <p class=\"font-size-38\">\n            <span class=\"icon-book-open pull-right\"></span>\n          </p>\n        </div>\n      </div>\n      <p>Orders</p>\n      <div class=\"progress progress-xs\">\n        <div class=\"progress-bar bg-sun-flower\" role=\"progressbar\" data-transitiongoal=\"90\"></div>\n      </div>\n    </div>\n    <!--/widget-content-->\n  </div>\n  <!--/widget-->\n\n</div>\n\n<div class=\"col-md-3\">\n\n  <div class=\"widget\">\n    <div class=\"widget-content bg-white\">\n      <div class=\"row\">\n        <div class=\"col-xs-6\">\n          <h3 class=\"counter font-bold font-size-38\">0</h3>\n        </div>\n        <div class=\"col-xs-6\">\n          <p class=\"font-size-38\">\n            <span class=\"icon-basket-loaded pull-right\"></span>\n          </p>\n        </div>\n      </div>\n      <p>Sales</p>\n      <div class=\"progress progress-xs\">\n        <div class=\"progress-bar bg-alizarin\" role=\"progressbar\" data-transitiongoal=\"45\"></div>\n      </div>\n    </div>\n    <!--/widget-content-->\n  </div>\n  <!--/widget-->\n\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/overview/overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-overview',
            template: __webpack_require__("./src/app/components/overview/overview.component.html"),
            styles: [__webpack_require__("./src/app/components/overview/overview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-overview></app-overview>\n<app-last30></app-last30>"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__("./src/app/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/products/products.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<app-new-product></app-new-product>"

/***/ }),

/***/ "./src/app/pages/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("./src/app/pages/products/products.component.html"),
            styles: [__webpack_require__("./src/app/pages/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/pages/signin/signin.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-overlay\"></div>\n<section class=\"registration-login-wrapper\">\n  <div class=\"row page-login\">\n    <div class=\"col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2\">\n      <div class=\"form-body bg-white padding-20\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-header bg-white padding-10 text-center\">\n              <h2>\n                <strong>Login</strong> to your account</h2>\n            </div>\n              <div class=\"inner-addon right-addon margin-bottom-15\">\n                <i class=\"fa fa-envelope\"></i>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"email\">\n              </div>\n              <div class=\"inner-addon right-addon margin-bottom-15\">\n                <i class=\"fa fa-lock\"></i>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"password\">\n              </div>\n              <p>{{error}}</p>\n              <div class=\"row\">\n                <div class=\"col-md-12 text-left\">\n                  <button type=\"submit\" class=\"btn btn-green btn-raised btn-flat\" (click)=\"login()\">Login</button>\n                </div>\n              </div>\n          </div>\n        </div>\n        <hr>\n        <div class=\"row\">\n          <div class=\"col-md-12 text-center\">\n            <p>\n              Oh My Gah | Developed by @jadeallencook\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__("./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = /** @class */ (function () {
    function SigninComponent() {
        this.email = '';
        this.password = '';
        this.error = '';
    }
    SigninComponent.prototype.login = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_firebase__["auth"]().signInWithEmailAndPassword(this.email, this.password).catch(function (error) {
            _this.error = error.message;
        });
    };
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/pages/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/pages/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map