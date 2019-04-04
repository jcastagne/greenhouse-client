import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [MatTableModule],
  exports: [
    MatTableModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
})
export class SharedModule {}
