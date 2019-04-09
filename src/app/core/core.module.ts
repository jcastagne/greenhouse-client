import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from '../app-routing.module';
import { NavMenuComponent } from './navigation/components/nav-menu/nav-menu.component';


@NgModule({
  declarations: [
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
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
