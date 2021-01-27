import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
import { Router} from '@angular/router';
import { preserveWhitespacesDefault } from '@angular/compiler';
@Component({
  selector: 'app-cryptocoins-list',
  template: `

  <ul class="items">
    <li (click)="onSelect(cryptocoin)" *ngFor="let coin of cryptocoins">
      <p1><img src={{coin.attributes.logo}}
        width="30" height="30"> 
        {{coin.attributes.symbol}}   Wallet  
        <br><br><br>
      <h3><strong>EUR 0.00</strong></h3>
      {{coin.attributes.symbol}} 0.000 
    
  `,
  styles: [ ]
})
export class CryptocoinsListComponent implements OnInit {
  public cryptocoins = []
  constructor(private _appComponent:AppComponent, private router:Router) { }

  ngOnInit() {
    this._appComponent.getResponse()
    .subscribe(response=> this.cryptocoins = response.data.attributes.cryptocoins)
  }

 //onSelect(cryptocoin){
   //  this.router.navigate(['/cryptocoin', cryptocoin.id]);
  // }
}

