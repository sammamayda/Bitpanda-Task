import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommoditiesListComponent } from './commodities-list/commodities-list.component';
import { CryptocoinsListComponent } from './cryptocoins-list/cryptocoins-list.component';
import { FiatsListComponent } from './fiats-list/fiats-list.component';
import { IndexesListComponent } from './indexes-list/indexes-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CommoditiesListComponent,
    CryptocoinsListComponent,
    FiatsListComponent,
    IndexesListComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
