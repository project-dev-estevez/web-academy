import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurDojosComponent } from './components/our-dojos/our-dojos.component';
import { DojoCrudPageComponent } from './pages/dojo-crud-page/dojo-crud-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomePageComponent,
    OurDojosComponent,
    DojoCrudPageComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SharedModule
  ]
})
export class IndexModule { }
