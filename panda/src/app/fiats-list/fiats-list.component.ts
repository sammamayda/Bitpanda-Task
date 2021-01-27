import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-fiats-list',
  template: `
  
    <ul class="items">
      <li  style="background-color:rgb(85,117,130);"
      (click)="onSelect(fiats)" *ngFor="let fiat of fiats">
        <h5><img src={{fiat.attributes.logo}}
          width="30" height="30"> 
           {{fiat.attributes.name}} Wallet
          <br><br><br><br><br>
         <h6>{{fiat.attributes.symbol}} 0.00 
          <br>
         <p1> {{fiat.attributes.symbol}} 0.00 
  `,
  styles: [
  ]
})
export class FiatsListComponent implements OnInit {
public fiats = []
  constructor(private _appComponent:AppComponent) { }

  ngOnInit() {
    this._appComponent.getResponse()
    .subscribe(response=> this.fiats = response.data.attributes.fiats.filter(f=> f.attributes.has_wallets))
  }
  }


