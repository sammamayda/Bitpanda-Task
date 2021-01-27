import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { CryptocoinsListComponent } from './cryptocoins-list/cryptocoins-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FiatsListComponent } from './fiats-list/fiats-list.component';
import { CommoditiesListComponent } from './commodities-list/commodities-list.component';
import { IndexesListComponent } from './indexes-list/indexes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    
    CryptocoinsListComponent,
    routingComponents,
    NavbarComponent,
    FiatsListComponent,
    CommoditiesListComponent,
    IndexesListComponent,
    PageNotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
