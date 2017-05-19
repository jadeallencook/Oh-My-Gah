// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// external components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PopupComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})

export class AppModule { }
