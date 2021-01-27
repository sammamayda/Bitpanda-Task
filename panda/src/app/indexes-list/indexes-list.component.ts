import { Component, OnInit } from '@angular/core';
import { AppComponent } from './../app.component';
@Component({
  selector: 'app-indexes-list',
 
   template: `
    <ul class="items">
       <li (click)="onSelect(indexes)" *ngFor="let index of indexes">
         <p1><img src={{index.attributes.logo}}
           width="30" height="30"> 
           {{index.attributes.symbol}} Wallet 
           <br><br>
             <h3><strong>EUR 0.00</strong>

  `,
  styles: []
})
export class IndexesListComponent implements OnInit {
public indexes = []
  constructor(private _appComponent:AppComponent) { }

  ngOnInit() {
    this._appComponent.getResponse()
    .subscribe(response=> this.indexes = response.data.attributes.indexes)
  }
  }
