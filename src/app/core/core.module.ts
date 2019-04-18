import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

import { NavMenuComponent } from './navigation/components/nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule
  ],
  exports: [
    NavMenuComponent,
    HttpClientModule
  ]
})
export class CoreModule { }
