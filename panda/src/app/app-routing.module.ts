import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexesListComponent} from './indexes-list/indexes-list.component';
import { CommoditiesListComponent} from './commodities-list/commodities-list.component';
import { FiatsListComponent} from './fiats-list/fiats-list.component';
import { CryptocoinsListComponent } from './cryptocoins-list/cryptocoins-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: '/index',pathMatch:'full'},
  {path:'cryptocoins', component: CryptocoinsListComponent},
  {path:'fiats', component: FiatsListComponent},
  {path:'indexes', component: IndexesListComponent},
  {path:'commodities', component: CommoditiesListComponent},
 {path:"**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents =[
  CryptocoinsListComponent,
  FiatsListComponent,
  IndexesListComponent,
  CommoditiesListComponent,
  PageNotFoundComponent
]
