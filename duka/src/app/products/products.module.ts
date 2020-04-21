import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductService } from './product.service';

@NgModule({
  declarations: [ProductListComponent,
    ProductDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'details', component: ProductDetailsComponent },
      { path: '', component: ProductListComponent },
    ])
  ],
  providers: [
    ProductService
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
