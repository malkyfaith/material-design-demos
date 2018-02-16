import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableBasicExampleModule } from './table-basic-example/table-basic-example.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TableBasicExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
