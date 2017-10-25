import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicTableModule } from './basic-table-module/basic-table.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BasicTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
