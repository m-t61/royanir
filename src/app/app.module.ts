import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './mainPages/about/about.component';
import { CountsComponent } from './mainpages/counts/counts.component';
import { HomeComponent } from './mainpages/home/home.component';
import { PortfolioComponent } from './mainpages/portfolio/portfolio.component';
import { ServicesComponent } from './mainpages/services/services.component';
import { ConsultComponent } from './otherpages/consult/consult.component';
import { SiteHeaderComponent } from './sharecomponents/site-header/site-header.component';
import { SiteFooterComponent } from './sharecomponents/site-footer/site-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CountsComponent,
    HomeComponent,
    PortfolioComponent,
    ServicesComponent,
    ConsultComponent,
    SiteHeaderComponent,
    SiteFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
