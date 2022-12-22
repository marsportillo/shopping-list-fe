import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'catalogue',  component: CatalogueComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
