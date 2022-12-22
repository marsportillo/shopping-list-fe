import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component'
import { ProductRoutingModule } from './product-routing.module';
import { ProductFormComponent } from './product-form/product-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { NzCardModule } from 'ng-zorro-antd/card';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductFormComponent,
    CatalogueComponent,
    ProductTileComponent
  ],
  imports: [
    ProductRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzCardModule
  ]
})

export class ProductModule { }
