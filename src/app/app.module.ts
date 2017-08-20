import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FirebaseAuthService } from './services/firebase-auth.service';

import { RouterModule } from '@angular/router';

// pages
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItemComponent } from './pages/item/item.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

// components
import { BannerComponent } from './components/banner/banner.component';
import { BlogComponent } from './components/blog/blog.component';
import { ControlsComponent } from './components/controls/controls.component';
import { DescriptionComponent } from './components/description/description.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaymentProcessComponent } from './components/payment-process/payment-process.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    ItemComponent,
    CheckoutComponent,
    BannerComponent,
    BlogComponent,
    ControlsComponent,
    DescriptionComponent,
    FeaturedComponent,
    FeaturesComponent,
    FooterComponent,
    NavbarComponent,
    PaymentProcessComponent,
    PhotosComponent,
    ShoppingCartComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [FirebaseAuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
