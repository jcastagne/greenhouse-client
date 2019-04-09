import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PlantModule } from './modules/plants/plant.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PlantModule,
    CoreModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
