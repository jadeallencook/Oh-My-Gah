// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// external components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PopupComponent } from './popup/popup.component';
import { TodaysDealComponent } from './todays-deal/todays-deal.component';
import { FooterComponent } from './footer/footer.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SocialFeedComponent } from './social-feed/social-feed.component';
import { SocialLinksComponent } from './social-links/social-links.component';
import { ExtendedDealsComponent } from './extended-deals/extended-deals.component';
import { SingleItemComponent } from './single-item/single-item.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        PopupComponent,
        TodaysDealComponent,
        FooterComponent,
        UserDashboardComponent,
        AdminDashboardComponent,
        SocialFeedComponent,
        SocialLinksComponent,
        ExtendedDealsComponent,
        SingleItemComponent
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
