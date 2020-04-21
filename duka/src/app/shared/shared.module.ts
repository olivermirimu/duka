import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OfflineComponent } from './offline/offline.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    SideBarComponent,
    PageNotFoundComponent,
    OfflineComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavComponent,
    FooterComponent,
    SideBarComponent
  ]
})
export class SharedModule { }
