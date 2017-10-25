import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableWithExternalDataModule } from './table-with-external-data/table-with-external-data.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableWithExternalDataModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
