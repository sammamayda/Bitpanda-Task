import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
@Component({
  selector: 'app-commodities-list',
 
     template: `
    <ul class="items">
      <li (click)="onSelect(indexes)" *ngFor="let commodity of commodities">
       <text><img src={{commodity.attributes.logo}}
       width="30" height="30"> 
       {{commodity.attributes.name}} Wallet <br><br>
       <h3 class="txt"> <strong>EUR 0.00
       <br>
        <p1>0.000 g 
  `,
  styles: [
  ]
})

 export class CommoditiesListComponent implements OnInit {
public commodities = []
  constructor(private _appComponent:AppComponent) { }

  ngOnInit() {
    this._appComponent.getResponse()
    .subscribe(response=> this.commodities = response.data.attributes.commodities)
  }
  }

